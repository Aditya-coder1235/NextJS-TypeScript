import React from "react";

const Page: React.FC = () => {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
            <section className="max-w-5xl mx-auto px-6 py-16 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
                    Premium Products at Your Fingertips
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                    Discover our curated collection of quality items. Shop with
                    confidence with fast shipping and easy returns.
                </p>
                <div className="flex items-center justify-center gap-4">
                    <a
                        href="#products"
                        className="px-6 py-3 bg-sky-600 text-white rounded-md font-medium"
                    >
                        Shop Now
                    </a>
                    <a
                        href="#about"
                        className="px-6 py-3 border border-gray-200 rounded-md text-gray-700"
                    >
                        About Us
                    </a>
                </div>
            </section>

            <section id="products" className="max-w-5xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Featured Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                        <div className="w-full h-48 bg-gray-200 rounded-md mb-4"></div>
                        <h3 className="text-lg font-semibold mb-2">
                            Product One
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                            High-quality item with premium features and
                            durability.
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-sky-600">
                                $99.99
                            </span>
                            <button className="px-4 py-2 bg-sky-600 text-white rounded-md text-sm">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                        <div className="w-full h-48 bg-gray-200 rounded-md mb-4"></div>
                        <h3 className="text-lg font-semibold mb-2">
                            Product Two
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Perfect for everyday use with modern design and
                            reliability.
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-sky-600">
                                $149.99
                            </span>
                            <button className="px-4 py-2 bg-sky-600 text-white rounded-md text-sm">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                        <div className="w-full h-48 bg-gray-200 rounded-md mb-4"></div>
                        <h3 className="text-lg font-semibold mb-2">
                            Product Three
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Exclusive design with exceptional value and customer
                            satisfaction.
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-sky-600">
                                $129.99
                            </span>
                            <button className="px-4 py-2 bg-sky-600 text-white rounded-md text-sm">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="about"
                className="max-w-5xl mx-auto px-6 py-12 text-center"
            >
                <div className="bg-white p-8 rounded-lg shadow-md inline-block">
                    <h4 className="text-xl font-semibold mb-3">
                        Why Shop With Us?
                    </h4>
                    <p className="text-gray-600 mb-6">
                        Fast shipping, secure checkout, and 30-day money-back
                        guarantee.
                    </p>
                    <div className="flex items-center justify-center gap-3">
                        <button className="px-5 py-2 bg-sky-600 text-white rounded-md">
                            View All Products
                        </button>
                        <button className="px-5 py-2 border border-gray-200 rounded-md text-gray-700">
                            Contact Support
                        </button>
                    </div>
                </div>
            </section>

            <footer className="max-w-5xl mx-auto px-6 py-8 text-sm text-gray-500">
                <div className="flex items-center justify-between">
                    <span>© {new Date().getFullYear()} EcommStore</span>
                    <div className="space-x-4">
                        <a className="hover:underline" href="#">
                            Privacy
                        </a>
                        <a className="hover:underline" href="#">
                            Terms
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default Page;
