import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import SvgIcon from "../Icons"

const ID_MENU_MOBILE = "mobile-menu"

const dataLinks = [
    { display: "Inicio", to: "/", isActive: true },
    // { display: "Proyectos", to: "/projects", isActive: false },
    // { display: "Contacto", to: "/contact", isActive: false },
]

const Layout = () => {
    const [expanded, setExpanded] = useState(false)
    const socialNetworks = useSelector(state => state.profile.data.socialNetworks) || [];

    const onClickBtnMobile = () => setExpanded(!expanded)

    return <>
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* <!-- Mobile menu button--> */}
                        <button
                            type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls={ID_MENU_MOBILE}
                            onClick={onClickBtnMobile}
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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                            </svg>

                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <MenuLink links={dataLinks} className='rounded-md px-3 py-2 text-sm font-medium' />
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="relative rounded-full bg-gray-800 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View notifications</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div className={expanded ? "" : "hidden"} id={ID_MENU_MOBILE}>
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <MenuLink links={dataLinks} className='block rounded-md px-3 py-2 text-base font-medium' />
                </div>
            </div>
        </nav>
        <Outlet />
        {socialNetworks.length > 0 && <footer className="bg-gray-800">
            <div className="container px-6 pt-6 mx-auto">
                <div className="w-full h-auto py-8 flex items-center justify-center gap-2 flex-wrap">
                    {socialNetworks.map(s => <SvgIcon key={s.name} type={s.name} link={s.link} />)}
                </div>
            </div>
            <div className="p-4 text-center bg-opacity-20">
                <span className="text-gray-300">
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
        let addClassName = l.isActive ? "text-white bg-gray-900" : "text-gray-300 hover:bg-gray-700 hover:text-white"
        return <Link onClick={() => handleOnClick(l)} key={l.display} to={l.to} className={`${className} ${addClassName}`}>
            {l.display}
        </Link>
    })
}

export default Layout