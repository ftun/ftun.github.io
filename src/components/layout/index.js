import React, { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import { IconLink, IconButton } from "../Icons"

const ID_MENU_MOBILE = "mobile-menu"

const dataLinks = [
    { display: "Inicio", to: "/", isActive: true },
    // { display: "Proyectos", to: "/projects", isActive: false },
    // { display: "Contacto", to: "/contact", isActive: false },
]


const Layout = () => {
    const isDarkMode = localStorage.theme === "dark"
    const socialNetworks = useSelector(state => state.profile.data.socialNetworks) || [];

    const [darkMode, setDarkMode] = useState(isDarkMode)
    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        if (isDarkMode) document.body.classList.add("dark")
    }, [isDarkMode])
    
    const changeThemeHandler = () => {
        localStorage.theme = darkMode ? "light" : "dark"
        setDarkMode(!darkMode)
        document.body.classList.toggle("dark")
    }

    const expandedMenuHandler = () => setExpanded(!expanded)

    return <>
        <nav className="section-layout-theme">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* <!-- Mobile menu button--> */}
                        <button
                            type="button" className="relative inline-flex items-center justify-center rounded-md p-2 btn-custom-theme"
                            aria-controls={ID_MENU_MOBILE}
                            onClick={expandedMenuHandler}
                            aria-expanded="true">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>

                            {expanded ? 
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="false">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                : <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="false">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            }
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center relative rounded-full bg-gray-800 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            {/* Add mi logo or image */}
                            {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" /> */}
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                            </svg> */}

                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <MenuLink links={dataLinks} className='rounded-md px-3 py-2' />
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <IconButton type={darkMode ? "sun" : "moon"} click={changeThemeHandler} />
                    </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div className={expanded ? "" : "hidden"} id={ID_MENU_MOBILE}>
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <MenuLink links={dataLinks} className='block rounded-md px-3 py-2' />
                </div>
            </div>
        </nav>
        <div >
            <Outlet />
        </div>
        {socialNetworks.length > 0 && <footer className="section-layout-theme">
            <div className="container px-6 pt-6 mx-auto">
                <div className="w-full h-auto py-8 flex items-center justify-center gap-2 flex-wrap">
                    {socialNetworks.map(s => <IconLink key={s.name} type={s.name} link={s.link} />)}
                </div>
            </div>
            <div className="p-4 text-center bg-opacity-20">
                <span className="dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:focus:outline-none dark:focus:ring-2 dark:focus:ring-white dark:focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                    © {new Date().getFullYear()} Copyright
                </span>
            </div>
        </footer>}
    </>
}

const MenuLink = ({ links = [], className = "" }) => {
    const [data, setData] = useState(links)

    const handleOnClick = link => {
        setData(data.map(l => {
            l.isActive = l.display === link.display
            return l
        }))
    }

    return data.map(l => {
        let addClassName = l.isActive ? "btn-custom-active" : "btn-custom-default"
        return <Link onClick={() => handleOnClick(l)} key={l.display} to={l.to}
            className={`block px-5 py-2.5 btn-custom-theme ${addClassName}`}
        >
            {l.display}
        </Link>
    })
}

export default Layout