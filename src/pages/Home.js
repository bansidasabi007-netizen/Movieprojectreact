import MovieList from "../components/MovieList";

function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="mb-2 text-4xl font-bold text-white">
        Popular Movies
      </h1>

      <p className="mb-8 text-slate-400">
        Discover movies from our library
      </p>

      <MovieList />
    </div>
  );
}

export default Home;