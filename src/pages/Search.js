import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { searchMovies } from "../redux/actions/movieActions";

function Search() {
    const [query, setQuery] = useState("");

    const dispatch = useDispatch();

    const { searchResults, loading, error } = useSelector(
        (state) => state.movies
    );

    const handleSearch = (e) => {
        e.preventDefault();

        const trimmedQuery = query.trim();

        if (!trimmedQuery) {
            return;
        }

        dispatch(searchMovies(trimmedQuery));
    };

    return (
        <div className="mx-auto max-w-7xl px-6 py-10">

            {/* Heading */}
            <h1 className="text-4xl font-bold text-white">
                Search Movies
            </h1>

            <p className="mt-2 text-slate-400">
                Search for your favorite movies.
            </p>

            {/* Search Form */}
            <form
                onSubmit={handleSearch}
                className="mt-8 flex max-w-2xl gap-3"
            >
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter movie name..."
                    className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
                />

                <button
                    type="submit"
                    className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                    Search
                </button>
            </form>

            {/* Loading */}
            {loading && (
                <p className="mt-8 text-slate-300">
                    Searching movies...
                </p>
            )}

            {/* Error */}
            {error && !loading && (
                <p className="mt-8 text-red-400">
                    {error}
                </p>
            )}

            {/* Search Results */}
            {!loading && searchResults.length > 0 && (
                <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

                    {searchResults.map((movie) => (
                        <Link
                            key={movie.imdbID}
                            to={`/movie/${movie.imdbID}`}
                            className="block overflow-hidden rounded-xl bg-slate-800 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
                        >

                            {/* Poster */}
                            {movie.Poster &&
                            movie.Poster !== "N/A" ? (
                                <img
                                    src={movie.Poster}
                                    alt={movie.Title}
                                    className="h-72 w-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.style.display = "none";

                                        e.currentTarget.nextElementSibling.style.display =
                                            "flex";
                                    }}
                                />
                            ) : null}

                            {/* Fallback */}
                            <div
                                className={`h-72 w-full items-center justify-center bg-slate-700 px-4 text-center ${
                                    movie.Poster &&
                                    movie.Poster !== "N/A"
                                        ? "hidden"
                                        : "flex"
                                }`}
                            >
                                <div>
                                    <div className="text-5xl">
                                        🎬
                                    </div>

                                    <p className="mt-4 font-semibold text-slate-300">
                                        No Poster Available
                                    </p>

                                    <p className="mt-1 text-sm text-slate-500">
                                        {movie.Title}
                                    </p>
                                </div>
                            </div>

                            {/* Movie Info */}
                            <div className="p-4">

                                <h3 className="truncate text-lg font-semibold text-white">
                                    {movie.Title}
                                </h3>

                                <p className="mt-1 text-sm text-slate-400">
                                    {movie.Year}
                                </p>

                                <p className="mt-1 text-xs capitalize text-slate-500">
                                    {movie.Type}
                                </p>

                            </div>

                        </Link>
                    ))}

                </div>
            )}

            {/* No Results */}
            {!loading &&
                !error &&
                searchResults.length === 0 && (
                    <p className="mt-10 text-slate-500">
                        Search for a movie to see results.
                    </p>
                )}

        </div>
    );
}

export default Search;