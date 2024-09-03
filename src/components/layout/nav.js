import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { IconButton } from "../Icons"
import { Container } from '../section';

const ID_MENU_MOBILE = "mobile-menu"

const Nav = ({ menuLinks = [] }) => {
    const isDarkMode = localStorage.theme === "dark"

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

    return <nav className="section-layout-theme">
        <Container>
            <div className="relative flex h-16 items-center justify-between">
                {/* <!-- Mobile menu button--> */}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
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
                    <div className="hidden sm:block">
                        <div className="flex space-x-4">
                            <MenuLink links={menuLinks} />
                        </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
                    <IconButton type={darkMode ? "sun" : "moon"} click={changeThemeHandler} />
                </div>
            </div>
        </Container>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className={expanded ? "" : "hidden"} id={ID_MENU_MOBILE}>
            <div className="space-y-1 px-2 pb-3 pt-2">
                <MenuLink links={menuLinks} />
            </div>
        </div>
    </nav>
}

const MenuLink = ({ links = [] }) => {
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

export default Nav