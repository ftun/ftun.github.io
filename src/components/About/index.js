import React from 'react';
import { useSelector } from 'react-redux';
import imgMe from "../../assets/me.jpeg"
import { SvgIcon } from "../Icons"
import { Section } from "../Section"

const Index = () => {
    const dataProfile = useSelector(state => state.profile.data);
    const { name, title, description, socialNetworks } = dataProfile

    return <Section>
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-full mb-10 px-4">
                <div className="rounded-lg">
                    <img src={imgMe} className='h-40 w-40 md:w-48 md:h-auto img-profile-animation mx-auto bg-cover bg-no-repeat' />
                </div>
                <h2 className="title-font text-xl font-medium text-gray-900 mt-6 mb-3">
                    {name}
                </h2>
                <h6 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                    {title}
                </h6>
                <p className="leading-relaxed text-base">
                    {description}
                </p>
                {/* <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Contactame</button> */}
            </div>
        </div>
        <div className="w-full h-auto py-8 flex items-center justify-center gap-2 flex-wrap">
            {socialNetworks && socialNetworks.map(s => <SvgIcon key={s.name} type={s.name} link={s.link} />)}
        </div>
    </Section>
}
    

export default Index