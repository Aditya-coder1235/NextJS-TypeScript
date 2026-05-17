"use client";
import React from "react";
import axios from "axios";

interface Product {
    _id: string;
    name: string;
    description: string;
    category: string;
    price: number;
}

const Dashboard = () => {
    const [products, setProducts] = React.useState<Product[]>([]);

    const fetchProducts = async () => {
        try {
            const res = await axios.get("/api/product");
            setProducts(res.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const deleteProduct = async (id: string) => {
        try {
             console.log("Deleting product:", id);
            await axios.delete(`/api/product/${id}`);
            fetchProducts(); 
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    React.useEffect(() => {
        fetchProducts();
    }, []);

    console.log(products);
    return (
        <div className="min-h-screen bg-slate-100 text-slate-900 px-6 py-10">
            <div className="mx-auto max-w-6xl rounded-3xl bg-white/80 p-8 shadow-xl shadow-slate-200 backdrop-blur-sm">
                <header className="mb-8 text-center">
                    <p className="mb-2 text-sm uppercase tracking-[0.3em] text-slate-500">
                        Product Dashboard
                    </p>
                    <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                        Available Products
                    </h1>
                    <p className="mt-3 text-slate-600">
                        Browse the latest items from your store inventory.
                    </p>
                </header>

                {products.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-600 shadow-sm">
                        No products available.
                    </div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {products.map((product) => (
                            <div
                                key={product._id}
                                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="mb-4 flex items-center justify-between">
                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
                                        {product.category}
                                    </span>
                                    <span className="text-lg font-semibold text-slate-900">
                                        ${product.price.toFixed(2)}
                                    </span>
                                </div>
                                <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                                    {product.name}
                                </h2>
                                <p className="text-slate-600">{product.description}</p>
                                <button
                                    className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                                    onClick={() => deleteProduct(product._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
