"use client";
import { logout } from "@/app/actions/auth";
import Link from "next/link";
import React from "react";

const NavBar: React.FC = () => {
    return (
        <header className="bg-gray-900 text-gray-100 shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
                <Link
                    href="/"
                    className="text-lg font-semibold tracking-wide text-gray-100"
                >
                    EcoMart
                </Link>

                <nav className="hidden space-x-6 md:flex ms-10">
                    <Link
                        href="/"
                        className="text-sm text-gray-300 hover:text-white"
                    >
                        Home
                    </Link>
                    <Link
                        href="/login"
                        className="text-sm text-gray-300 hover:text-white"
                    >
                        Login
                    </Link>
                    <Link
                        href="/signup"
                        className="text-sm text-gray-300 hover:text-white"
                    >
                        Signup
                    </Link>
                </nav>

                <div className="flex flex-1 items-center justify-end gap-3">
                    <Link
                        href="/app/create"
                        className="rounded-full bg-gray-700 px-4 py-2 text-sm font-medium text-gray-100 hover:bg-gray-600"
                    >
                        Create Product
                    </Link>
                    <div className="hidden md:block">
                        <input
                            type="search"
                            placeholder="Search products"
                            className="w-full max-w-xs rounded-full border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-gray-100 placeholder-gray-500 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
                        />
                    </div>
                    <Link
                        href="/cart"
                        className="rounded-full bg-gray-700 px-4 py-2 text-sm font-medium text-gray-100 hover:bg-gray-600"
                    >
                        Cart
                    </Link>
                    <button
                        onClick={() => logout()}
                        className="p-1 bg-red-600 rounded"
                    >
                        Logout
                    </button>
                </div>
            </div>
            <div className="flex justify-center border-t border-gray-800 bg-gray-950 px-4 py-2 text-xs text-gray-400 md:hidden">
                Search and shop eco-friendly goods
            </div>
        </header>
    );
};

export default NavBar;
