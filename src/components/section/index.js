
const Section = ({ children }) => 
    <section className="py-5 md:py-10 bg-white dark:bg-slate-800">
        <div className="container max-w-screen-xl mx-auto px-4 text-slate-900 dark:text-white">
            {children}
        </div>
    </section>

export {
    Section
}