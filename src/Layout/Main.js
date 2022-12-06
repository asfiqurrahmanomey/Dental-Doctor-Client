import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import ScrollToTop from "react-scroll-to-top";


const Main = () => {



    return (
        <div className='bg-gradient-to-b from-green-100 to-green-100 overflow-x-hidden'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <ScrollToTop smooth />
            <Footer></Footer>
        </div>
    );
};

export default Main;