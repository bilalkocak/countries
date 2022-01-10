import React from 'react';
import './Header.scss';
import DarkModeToggle from "../../DarkModeToggle";

const Header = () => {
    return (
        <header className={'header'}>
            <div className={'header-content'}>
                Where in the world
                <DarkModeToggle/>
            </div>
        </header>
    );
};

export default Header;
