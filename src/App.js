import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Details from "./pages/Details";

import { fetchPopularMovies } from "./redux/actions/movieActions";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopularMovies());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <div className="min-h-screen bg-slate-950">

                <Navbar />

                <Routes>

                    {/* Login - Public */}
                    <Route
                        path="/login"
                        element={<Login />}
                    />

                    {/* Home - Protected */}
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />

                    {/* Search - Protected */}
                    <Route
                        path="/search"
                        element={
                            <PrivateRoute>
                                <Search />
                            </PrivateRoute>
                        }
                    />

                    {/* Movie Details - Protected */}
                    <Route
                        path="/movie/:imdbID"
                        element={
                            <PrivateRoute>
                                <Details />
                            </PrivateRoute>
                        }
                    />

                </Routes>

            </div>
        </BrowserRouter>
    );
}

export default App;