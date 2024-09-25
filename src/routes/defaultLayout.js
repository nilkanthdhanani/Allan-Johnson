import React from 'react'
import Header from '../common/header'
import { Outlet } from 'react-router-dom'
import Footer from '../common/footer'
import ScrollToTop from '../components/ScrollToTop'

export default function DefaultLayout() {
    return (
        <>
            <ScrollToTop />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
