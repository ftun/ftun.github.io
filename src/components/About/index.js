import React from 'react';
import { useSelector } from 'react-redux';
import imgMe from "../../assets/me.jpeg"
import { SvgIcon } from "../Icons"
import { Section } from "../section"
import Avatar from '../avatar';

const Index = () => {
    const dataProfile = useSelector(state => state.profile.data);
    const { name, title, description, socialNetworks } = dataProfile

    return <Section>
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-full mb-10 px-4">
                <Avatar 
                    src={imgMe}
                    name={name}
                    title={title}
                />
                <p className="mb-0 mt-0 text-base font-light leading-relaxed">{description}</p>
            </div>
        </div>
        <div className="w-full h-auto py-8 flex items-center justify-center gap-2 flex-wrap">
            {socialNetworks && socialNetworks.map(s => <SvgIcon key={s.name} type={s.name} link={s.link} />)}
        </div>
    </Section>
}
    

export default Index