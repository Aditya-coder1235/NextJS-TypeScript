import { signup } from "@/app/actions/auth";

const Page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <h1 className="text-2xl font-semibold text-gray-900 mb-6">
                    Sign Up
                </h1>
                <form action={signup} className="space-y-5">
                    <label className="block">
                        <span className="text-sm font-medium text-gray-700">
                            Name
                        </span>
                        <input
                            type="text"
                            name="name"
                            className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                            placeholder="Your full name"
                            required
                        />
                    </label>
                    <label className="block">
                        <span className="text-sm font-medium text-gray-700">
                            Email
                        </span>
                        <input
                            type="email"
                            name="email"
                            className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                            placeholder="you@example.com"
                            required
                        />
                    </label>
                    <label className="block">
                        <span className="text-sm font-medium text-gray-700">
                            Password
                        </span>
                        <input
                            type="password"
                            name="password"
                            className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                            placeholder="Enter a strong password"
                            required
                        />
                    </label>
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Page;
