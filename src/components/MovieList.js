import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MovieList() {
    const { popularMovies, loading, error } = useSelector(
        (state) => state.movies
    );

    if (loading) {
        return (
            <div className="py-10 text-center text-white">
                Loading movies...
            </div>
        );
    }

    if (error) {
        return (
            <div className="py-10 text-center text-red-400">
                Error: {error}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {popularMovies.map((movie) => (
                <Link
                    key={movie.imdbID}
                    to={`/movie/${movie.imdbID}`}
                    className="group relative block overflow-hidden rounded-xl bg-slate-800 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                    {/* Poster */}
                    <div className="relative">
                        {movie.Poster && movie.Poster !== "N/A" ? (
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                                onError={(e) => {
                                    e.currentTarget.style.display = "none";

                                    if (e.currentTarget.nextElementSibling) {
                                        e.currentTarget.nextElementSibling.style.display =
                                            "flex";
                                    }
                                }}
                            />
                        ) : null}

                        {/* Fallback */}
                        <div
                            className={`h-72 w-full items-center justify-center bg-slate-700 px-4 text-center ${
                                movie.Poster && movie.Poster !== "N/A"
                                    ? "hidden"
                                    : "flex"
                            }`}
                        >
                            <div>
                                <div className="text-5xl">🎬</div>

                                <p className="mt-4 font-semibold text-slate-300">
                                    No Poster Available
                                </p>

                                <p className="mt-1 text-sm text-slate-500">
                                    {movie.Title}
                                </p>
                            </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition duration-300 group-hover:opacity-100">
                            <div className="translate-y-4 text-center transition duration-300 group-hover:translate-y-0">
                                <div className="mb-3 text-4xl">
                                    🎬
                                </div>

                                <span className="inline-block rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white shadow-lg transition hover:bg-blue-700">
                                    More Details
                                </span>
                            </div>
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
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default MovieList;