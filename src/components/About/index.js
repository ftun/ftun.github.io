import React from 'react';
import { Section } from "../section"
import Avatar from '../avatar';

const Index = ({ name, title, description, imgSrc }) => {
    return <Section>
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-full mb-10 px-4">
                <Avatar 
                    src={imgSrc}
                    name={name}
                    title={title}
                />
                <p className="mb-0 mt-0">{description}</p>
            </div>
        </div>
    </Section>
}
    

export default Index