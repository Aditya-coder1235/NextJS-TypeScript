"use client";

import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">
                        TaskMaster
                    </h1>
                    <nav>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 px-4"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 px-4"
                        >
                            Features
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 px-4"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 px-4"
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            </header>

            <main className="flex-grow">
                <section className="bg-blue-600 text-white py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold mb-4">
                            Manage Your Tasks Efficiently
                        </h2>
                        <p className="text-xl mb-8">
                            Stay organized, boost productivity, and achieve your
                            goals with our intuitive task management tool.
                        </p>
                        <button onClick={() => router.push("/signup")} className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                            Get Started
                        </button>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
                            Features
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-8 h-8 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <h4 className="text-xl font-semibold mb-2 text-gray-800">
                                    Task Creation
                                </h4>
                                <p className="text-gray-600">
                                    Easily create and organize your tasks with
                                    our user-friendly interface.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-8 h-8 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <h4 className="text-xl font-semibold mb-2 text-gray-800">
                                    Time Tracking
                                </h4>
                                <p className="text-gray-600">
                                    Track time spent on tasks to improve
                                    productivity and time management.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-8 h-8 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <h4 className="text-xl font-semibold mb-2 text-gray-800">
                                    Collaboration
                                </h4>
                                <p className="text-gray-600">
                                    Work together with your team on shared tasks
                                    and projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2023 TaskMaster. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default page;
