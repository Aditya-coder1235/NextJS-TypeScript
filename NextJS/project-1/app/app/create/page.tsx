"use client";
import axios from "axios";
import { useRouter } from "next/dist/client/components/navigation";
import React from "react";

const ProductCreate = () => {
    const navigate = useRouter();
    const [formdata, setformdata] = React.useState({
        name: "",
        description: "",
        price: 0,
        category: "",
    });

    const [loading, setLoading] = React.useState(false);

    const createProduct = async () => {
        try {
            setLoading(true);

            const res = await axios.post("/api/product", formdata);

            console.log(res.data);

            setformdata({
                name: "",
                description: "",
                price: 0,
                category: "",
            });
            navigate.push("/app");
        } catch (error) {
            console.error("Error creating product:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createProduct();
    };

    const handleOnChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        const { name, value } = e.target;

        setformdata((prev) => ({
            ...prev,
            [name]: name === "price" ? Number(value) : value,
        }));
    };

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
            <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl p-8">
                <h1 className="text-2xl font-semibold text-slate-900 mb-6">
                    Create Product
                </h1>

                <form className="space-y-5" onSubmit={handleOnSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Product Name
                        </label>
                        <input
                            name="name"
                            type="text"
                            value={formdata.name}
                            placeholder="Enter product name"
                            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                            onChange={handleOnChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Description
                        </label>
                        <textarea
                            name="description"
                            rows={4}
                            value={formdata.description}
                            placeholder="Enter product description"
                            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                            onChange={handleOnChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Price
                        </label>
                        <input
                            name="price"
                            type="number"
                            step="0.01"
                            value={formdata.price}
                            placeholder="0.00"
                            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                            onChange={handleOnChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Category
                        </label>
                        <select
                            name="category"
                            value={formdata.category}
                            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                            onChange={handleOnChange}
                        >
                            <option value="">Select a category</option>
                            <option value="electronics">Electronics</option>
                            <option value="fashion">Fashion</option>
                            <option value="home">Home</option>
                            <option value="beauty">Beauty</option>
                            <option value="sports">Sports</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-2xl bg-sky-600 px-5 py-3 text-white font-semibold hover:bg-sky-700 transition-colors disabled:opacity-50"
                    >
                        {loading ? "Saving..." : "Save Product"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProductCreate;
