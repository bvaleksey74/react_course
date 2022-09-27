import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <header>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/chats'}>Chats</NavLink>
                <NavLink to={'/profile'}>Profile</NavLink>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>&copy; 2022</footer>
        </>
    );
};

export default MainLayout;