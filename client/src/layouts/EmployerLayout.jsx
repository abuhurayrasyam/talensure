import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const EmployerLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default EmployerLayout;