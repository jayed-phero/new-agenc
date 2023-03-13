import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import HomeHeader from '../Shared/HomeHeader/HomeHeader';
import Navbar from '../Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <HomeHeader/>
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;