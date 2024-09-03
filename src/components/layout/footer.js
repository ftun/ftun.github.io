import { IconLink } from "../Icons"

const Footer = ({ socialNetworks = [] }) => {
    
    if (socialNetworks.length === 0) return null
    
    return <footer className="section-layout-theme">
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
    </footer>
}

export default Footer