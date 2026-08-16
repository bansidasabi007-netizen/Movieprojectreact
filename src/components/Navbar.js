import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logoutUser } from "../redux/actions/authActions";

function Navbar() {
    const dispatch = useDispatch();

    const { isAuthenticated, user } = useSelector(
        (state) => state.auth
    );

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <nav className="border-b border-slate-800 bg-slate-900">
            <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold text-white"
                >
                    Movie Library
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-6">

                    <Link
                        to="/"
                        className="text-slate-300 transition hover:text-white"
                    >
                        Home
                    </Link>

                    <Link
                        to="/search"
                        className="text-slate-300 transition hover:text-white"
                    >
                        Search
                    </Link>

                    {/* Authentication */}
                    {isAuthenticated ? (
                        <div className="flex items-center gap-4">

                            <span className="hidden text-sm font-medium text-slate-300 sm:block">
                                {user?.name}
                            </span>

                            <button
                                onClick={handleLogout}
                                className="rounded-lg bg-red-600 px-5 py-2.5 font-medium text-white transition hover:bg-red-700"
                            >
                                Logout
                            </button>

                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
                        >
                            Login
                        </Link>
                    )}

                </div>
            </div>
        </nav>
    );
}

export default Navbar;