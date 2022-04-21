import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <>
            <h1>Snippy</h1>
            <h2>the code snippets manager</h2>
            <hr />
            <Outlet />
        </>
    );
};

export default Layout;
