
const Section = ({ children }) => 
    <section className="py-5 md:py-10 bg-white dark:bg-slate-800">
        <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 px-4 text-slate-900 dark:text-white">
            {children}
        </div>
    </section>

export {
    Section
}