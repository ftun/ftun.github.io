import { Section } from "../Section";
import data from "./data.json"

const Index = () => 
    <Section>
        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-10">Experiencia</h1>
        <div className="-my-8 divide-y-2 divide-gray-200">
            {data.map((item, i) => <Item key={i} {...item} />)}
        </div>
    </Section>

const Item = ({ date, job, company, description, technologies }) => <div className="py-8 flex flex-wrap md:flex-nowrap">
    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold title-font text-gray-700">{company}</span>
        <span className="mt-1 text-gray-500 text-sm">{date}</span>
    </div>
    <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{job}</h2>
        <p className="leading-relaxed">{description}</p>
        <div className="lex flex-row flex-wrap justify-center items-center mt-4">
            {technologies.map((t, i) => 
                <span key={i} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 m-1">{t}</span>
            )}
        </div>
    </div>
</div>

export default Index