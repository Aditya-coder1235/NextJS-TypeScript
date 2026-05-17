import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-200">
                <div className="h-20 border-t border-slate-800 pt-8 text-sm text-slate-500 text-center">
                    <p>
                        © {new Date().getFullYear()} ShopFlow. All rights
                        reserved.
                    </p>
                </div>
        </footer>
    );
};

export default Footer;
