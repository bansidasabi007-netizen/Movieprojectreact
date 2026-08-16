import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";

function Details() {
    const { imdbID } = useParams();

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await api.get("", {
                    params: {
                        i: imdbID,
                        plot: "full",
                    },
                });

                if (response.data.Response === "True") {
                    setMovie(response.data);
                } else {
                    setError(response.data.Error);
                }
            } catch (err) {
                setError("Failed to load movie details.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [imdbID]);

    if (loading) {
        return (
            <div className="flex min-h-[80vh] items-center justify-center">
                <p className="text-lg text-slate-300">
                    Loading movie details...
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex min-h-[80vh] flex-col items-center justify-center px-6">
                <p className="text-lg text-red-400">
                    {error}
                </p>

                <Link
                    to="/"
                    className="mt-6 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
                >
                    Back to Movies
                </Link>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-7xl px-6 py-10">

            <Link
                to="/"
                className="mb-8 inline-block text-sm text-blue-400 hover:text-blue-300"
            >
                ← Back to Movies
            </Link>

            <div className="grid gap-10 rounded-2xl bg-slate-900 p-6 shadow-xl md:grid-cols-[300px_1fr]">

                {/* Poster */}
                <div>
                    {movie.Poster && movie.Poster !== "N/A" ? (
                        <img
                            src={movie.Poster}
                            alt={movie.Title}
                            className="w-full rounded-xl object-cover shadow-lg"
                        />
                    ) : (
                        <div className="flex aspect-[2/3] items-center justify-center rounded-xl bg-slate-800 text-center">
                            <div>
                                <div className="text-6xl">🎬</div>
                                <p className="mt-4 text-slate-400">
                                    No Poster Available
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Details */}
                <div>

                    <h1 className="text-4xl font-bold text-white">
                        {movie.Title}
                    </h1>

                    <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-400">
                        <span>{movie.Year}</span>
                        <span>•</span>
                        <span>{movie.Runtime}</span>
                        <span>•</span>
                        <span>{movie.Rated}</span>
                        <span>•</span>
                        <span>{movie.Genre}</span>
                    </div>

                    {/* Rating */}
                    <div className="mt-6">
                        <span className="text-amber-400">
                            ★
                        </span>

                        <span className="ml-2 text-lg font-semibold text-white">
                            {movie.imdbRating}
                        </span>

                        <span className="ml-2 text-sm text-slate-500">
                            / 10 IMDb
                        </span>
                    </div>

                    {/* Plot */}
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold text-white">
                            Plot
                        </h2>

                        <p className="mt-3 leading-7 text-slate-300">
                            {movie.Plot}
                        </p>
                    </div>

                    {/* Information */}
                    <div className="mt-8 grid gap-5 sm:grid-cols-2">

                        <div>
                            <p className="text-sm text-slate-500">
                                Director
                            </p>

                            <p className="mt-1 text-slate-200">
                                {movie.Director}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-slate-500">
                                Writer
                            </p>

                            <p className="mt-1 text-slate-200">
                                {movie.Writer}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-slate-500">
                                Actors
                            </p>

                            <p className="mt-1 text-slate-200">
                                {movie.Actors}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-slate-500">
                                Language
                            </p>

                            <p className="mt-1 text-slate-200">
                                {movie.Language}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-slate-500">
                                Country
                            </p>

                            <p className="mt-1 text-slate-200">
                                {movie.Country}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-slate-500">
                                Released
                            </p>

                            <p className="mt-1 text-slate-200">
                                {movie.Released}
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Details;