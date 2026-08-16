import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import { fetchMovieDetails } from "../redux/actions/movieActions";

function MovieDetails() {
  const { imdbID } = useParams();

  const dispatch = useDispatch();

  const {
    movieDetails,
    loading,
    error,
  } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovieDetails(imdbID));
  }, [dispatch, imdbID]);

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <p className="text-lg text-white">
          Loading movie details...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <p className="text-red-400">
          Error: {error}
        </p>
      </div>
    );
  }

  if (!movieDetails) {
    return null;
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">

      {/* Back Button */}
      <Link
        to="/"
        className="mb-8 inline-block text-blue-400 hover:text-blue-300"
      >
        ← Back to Movies
      </Link>

      <div className="grid gap-10 md:grid-cols-[300px_1fr]">

        {/* Poster */}
        <div>
          {movieDetails.Poster &&
          movieDetails.Poster !== "N/A" ? (
            <img
              src={movieDetails.Poster}
              alt={movieDetails.Title}
              className="w-full rounded-xl shadow-2xl"
            />
          ) : (
            <div className="flex h-[450px] items-center justify-center rounded-xl bg-slate-800 text-center text-slate-400">
              No Poster Available
            </div>
          )}
        </div>

        {/* Movie Information */}
        <div>

          <h1 className="text-4xl font-bold text-white">
            {movieDetails.Title}
          </h1>

          <p className="mt-3 text-slate-400">
            {movieDetails.Year} • {movieDetails.Runtime}
          </p>

          {/* Rating */}
          <div className="mt-5 inline-flex rounded-lg bg-yellow-500/10 px-4 py-2">
            <span className="font-semibold text-yellow-400">
              ⭐ {movieDetails.imdbRating}
            </span>
          </div>

          {/* Plot */}
          <p className="mt-6 leading-7 text-slate-300">
            {movieDetails.Plot}
          </p>

          {/* Details */}
          <div className="mt-8 space-y-4">

            <div>
              <span className="font-semibold text-white">
                Genre:
              </span>

              <span className="ml-2 text-slate-400">
                {movieDetails.Genre}
              </span>
            </div>

            <div>
              <span className="font-semibold text-white">
                Language:
              </span>

              <span className="ml-2 text-slate-400">
                {movieDetails.Language}
              </span>
            </div>

            <div>
              <span className="font-semibold text-white">
                Released:
              </span>

              <span className="ml-2 text-slate-400">
                {movieDetails.Released}
              </span>
            </div>

            <div>
              <span className="font-semibold text-white">
                Director:
              </span>

              <span className="ml-2 text-slate-400">
                {movieDetails.Director}
              </span>
            </div>

            <div>
              <span className="font-semibold text-white">
                Cast:
              </span>

              <span className="ml-2 text-slate-400">
                {movieDetails.Actors}
              </span>
            </div>

            <div>
              <span className="font-semibold text-white">
                Writer:
              </span>

              <span className="ml-2 text-slate-400">
                {movieDetails.Writer}
              </span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default MovieDetails;