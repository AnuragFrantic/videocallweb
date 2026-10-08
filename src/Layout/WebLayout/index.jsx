// import React from 'react'

import { Outlet, useLocation } from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"
import { useEffect } from "react"

const WebLayout = () => {
    const location = useLocation();
    const isApp = new URLSearchParams(location.search).get("app") === "true";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

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
