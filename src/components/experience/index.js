import React from 'react';
import { Section } from "../section";
import { SkeletonLine } from '../../helpers/skeleton';

const Index = ({ experience = [] }) => {
    return <Section>
        {
            experience.length === 0 ?
                <Skeleton />
                :
                <>
                    <h1 className="text-3xl md:text-4xl mb-10">Experiencia</h1>
                    <div className="-my-8 divide-y-2 divide-gray-200">
                        {experience.map((item, i) => <Item key={i} {...item} />)}
                    </div>
                </>
        }
    </Section>
}   

const Item = ({ date, job, company, description, technologies }) => <div className="py-8 flex flex-wrap md:flex-nowrap">
    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold title-font">{company}</span>
        <span className="mt-1 text-sm">{date}</span>
    </div>
    <div className="md:flex-grow">
        <h2 className="text-2xl font-medium title-font mb-2">{job}</h2>
        <p className="text-justify">{description}</p>
        <div className="flex-row flex-wrap justify-center items-center mt-4">
            {technologies.map((t, i) => 
                <span key={i} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 m-1">{t}</span>
            )}
        </div>
    </div>
</div>


const Skeleton = () => {
    return <div role="status" className="animate-pulse">
        <SkeletonLine className="w-52 ml-0 h-5" />
        <div className="-my-8 divide-y-2 divide-gray-200">
            <SkeletonItem />
            <SkeletonItem />
            <SkeletonItem />
        </div>
    </div>
}

const SkeletonItem = () => {
    return <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <SkeletonLine className="w-52 ml-0 m-1 mt-1" />
            <SkeletonLine className="w-52 ml-0 m-1 mt-1" />
        </div>
        <div className="md:flex-grow">
            <div className="leading-relaxed">
                <SkeletonLine className="w-52 ml-0 m-1" />
                <SkeletonLine className="ml-0" />
                <SkeletonLine className="ml-0" />
                <SkeletonLine className="ml-0" />
                <SkeletonLine className="ml-0" />
            </div>
            <div className="flex-row flex-wrap justify-center items-center mt-4">
                <SkeletonTechnologies />
            </div>
        </div>
    </div>
}

const SkeletonTechnologies = () => {
    let lines = []
    for (let index = 0; index < 15; index++) {
        lines.push(<SkeletonLine key={index} className="ml-0 mb-0 m-1 inline-flex items-center px-5 py-1 " />)        
    }

    return lines
}

export default Index