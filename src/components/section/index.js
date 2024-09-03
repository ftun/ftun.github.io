
const Section = ({ children }) => 
    <section className="py-3 md:py-6 bg-white dark:bg-slate-800 ">
        <Container>
            {children}
        </Container>
    </section>


const Container = ({ children }) => {
    return <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-slate-900 dark:text-white">
        {children}
    </div>
}

export {
    Section,
    Container,
}