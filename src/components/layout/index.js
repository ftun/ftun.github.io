import React from 'react';
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import Nav from './nav';
import Footer from './footer';

const dataLinks = [
    { display: "Inicio", to: "/", isActive: true },
    // { display: "Proyectos", to: "/projects", isActive: false },
    // { display: "Contacto", to: "/contact", isActive: false },
]


const Layout = () => {
    const socialNetworks = useSelector(state => state.profile.data.socialNetworks) || [];

    return <>
        <Nav menuLinks={dataLinks} />
        <Outlet />
        <Footer socialNetworks={socialNetworks} />
    </>
}

export default Layout