import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                    <p className="text-sm">Blog App</p>
                    <p className="text-xs text-gray-400">
                        © 2026 All rights reserved.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-2 text-center md:text-right">
                    <a
                        href="/privacy"
                        className="text-sm text-gray-300 hover:text-white"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="/terms"
                        className="text-sm text-gray-300 hover:text-white"
                    >
                        Terms
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
