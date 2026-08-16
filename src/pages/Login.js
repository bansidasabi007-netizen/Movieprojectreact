import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../redux/actions/authActions";

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        setError("");

        if (!name.trim() || !email.trim() || !password.trim()) {
            setError("Please enter name, email and password.");
            return;
        }

        const success = dispatch(
            loginUser(
                name.trim(),
                email.trim(),
                password
            )
        );

        if (success) {
            navigate("/");
        }
    };

    return (
        <div className="flex min-h-[80vh] items-center justify-center px-6">

            <div className="w-full max-w-md rounded-2xl bg-slate-900 p-8 shadow-xl">

                <h1 className="text-3xl font-bold text-white">
                    Login
                </h1>

                <p className="mt-2 text-slate-400">
                    Sign in to your movie library
                </p>

                <form
                    onSubmit={handleLogin}
                    className="mt-8 space-y-5"
                >

                    {/* Name */}
                    <div>
                        <label className="mb-2 block text-sm text-slate-300">
                            Name
                        </label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                            placeholder="Enter your name"
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="mb-2 block text-sm text-slate-300">
                            Email
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            placeholder="Enter your email"
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="mb-2 block text-sm text-slate-300">
                            Password
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            placeholder="Enter your password"
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Error */}
                    {error && (
                        <p className="text-sm text-red-400">
                            {error}
                        </p>
                    )}

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Login
                    </button>

                </form>
            </div>
        </div>
    );
}

export default Login;