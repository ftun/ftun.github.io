import imgMe from "../../assets/me.jpeg"
import { SvgIcon } from "../Icons"
import { Section } from "../Section"
import data from "./data.json"


const Index = () =>
    <Section>
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-full mb-10 px-4">
                <div className="rounded-lg">
                    <img src={imgMe} className='h-40 w-40 md:w-48 md:h-auto img-profile-animation mx-auto bg-cover bg-no-repeat' />
                </div>
                <h2 className="title-font text-xl font-medium text-gray-900 mt-6 mb-3">
                    {data.name}
                </h2>
                <h6 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                    {data.title}
                </h6>
                <p className="leading-relaxed text-base">
                    {data.description}
                </p>
                {/* <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Contactame</button> */}
            </div>
        </div>
        <div className="w-full h-auto py-8 flex items-center justify-center gap-2 flex-wrap">
            <SvgIcon type="whatsappIcon" link="https://api.whatsapp.com/send?phone=529961025585"/>
            <SvgIcon type="linkedinIcon" link="https://www.linkedin.com/in/felipe-tun-cauich/" />
            {/* <SvgIcon type="mailIcon" /> */}
        </div>
    </Section>
    

export default Index