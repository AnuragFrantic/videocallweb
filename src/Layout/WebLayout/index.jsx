// import React from 'react'

import { Outlet, useLocation } from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"
import { useEffect } from "react"

const WebLayout = () => {
    const location = useLocation();
    const isApp = new URLSearchParams(location.search).get("app") === "true";

    const clearAppCache = async () => {
        if ('caches' in window) {
            const keys = await caches.keys();
            await Promise.all(keys.map(key => caches.delete(key)));
        }

    };

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [location.pathname]);

    useEffect(() => {
        clearAppCache()
    }, [])

    return (
        <>
            {!isApp && <Header />}
            <main>
                {<Outlet />}
            </main>
            {!isApp && <Footer />}
        </>
    )
}

export default WebLayout
