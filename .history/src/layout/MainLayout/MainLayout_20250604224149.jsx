import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const MainLayout = () => {
    useEffect(() => {
        <AOS></AOS><div className="init"></div>({
            duration: 800, // animation duration
            once: true,    // only animate once
        });
    }, []);

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;