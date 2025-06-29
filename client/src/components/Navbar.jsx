import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

const Navbar = () => {

    const {user, userSignOut} = useContext(AuthContext);

    const handleSignOut = () => {
        userSignOut()
        .then(() => {
            alert('SignOut Successful')
        })
        .catch(() => {
            alert('SignOut Unsuccessful')
        })
    }

    const navLinks = <>
        <NavLink className='btn btn-ghost' to={'/'}>Home</NavLink>
    </>

    return (
        <div className="bg-base-100 shadow-sm">
            <div className='navbar w-11/12 mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Talensure</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.email}
                    {
                        user ? (<button className='btn btn-ghost' onClick={handleSignOut}>SignOut</button>) : (<NavLink className='btn btn-ghost' to={'/auth/signup'}>SignUp</NavLink>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;