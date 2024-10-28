import React, { useState } from 'react'
import Header from '../common/header'
import { Outlet } from 'react-router-dom'
import Footer from '../common/footer'
import ScrollToTop from '../components/ScrollToTop'
import Chat from '../components/chat'

export default function DefaultLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <ScrollToTop />
            <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            <main>
                <Outlet />
            </main>
            <Footer />
            <Chat isHidden={isSidebarOpen} />
        </>
    )
}
