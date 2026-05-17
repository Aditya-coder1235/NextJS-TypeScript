import { login } from "@/app/actions/auth";
import React from "react";

const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-3xl border border-slate-200 p-8">
                <h1 className="text-3xl font-semibold text-slate-900 mb-6">
                    Login
                </h1>
                <form action={login} className="space-y-5">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-slate-700 mb-2"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-slate-700 mb-2"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                            placeholder="Enter a strong password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-2xl bg-indigo-600 px-4 py-3 text-white font-semibold shadow-sm transition hover:bg-indigo-700"
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
