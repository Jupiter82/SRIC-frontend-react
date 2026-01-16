"use client";

import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ClientProviders({ children }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            {children}
            {mounted && (
                <ToastContainer
                    position="top-right"
                    autoClose={500}
                    newestOnTop
                    closeOnClick
                    pauseOnHover
                />
            )}
        </>
    );
}
