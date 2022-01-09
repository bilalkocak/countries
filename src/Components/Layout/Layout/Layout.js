import React from 'react';
import Header from "../Header/Header";
import './Layout.scss'

const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <div className={'app-page-content'}>
                {children}
            </div>
        </div>
    );
};


export default Layout;
