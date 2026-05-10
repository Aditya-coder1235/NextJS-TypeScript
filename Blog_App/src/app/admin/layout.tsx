import React from "react";

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            <div className="flex">
            </div>
            {children}
        </div>
    );
};

export default Layout;
