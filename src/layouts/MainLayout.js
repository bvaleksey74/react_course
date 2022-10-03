import React, {useContext} from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {ThemeContext} from "../context";

const MainLayout = () => {
    const {themes, toggleTheme} = useContext(ThemeContext);
    return (
        <div style={{background: themes.background, color: themes.color}}>
            <header>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/chats'}>Chats</NavLink>
                <NavLink to={'/profile'}>Profile</NavLink>
                <button onClick={toggleTheme}>change theme</button>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>&copy; 2022</footer>
        </div>
    );
};

export default MainLayout;