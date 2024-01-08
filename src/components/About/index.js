import imgMe from "../../assets/me.jpeg"
import { Section } from "../Section"

const Index = () =>
    <Section>
        <div className="text-center">

            <div className="flex justify-center mb-16">
                <img src={imgMe} alt="Image" className='h-40 w-40 md:w-48 md:h-auto rounded-full mx-auto' />
            </div>

            <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">Felipe Tun</h6>

            <h1 className="font-normal text-gray-900 text-4xl md:text-4xl leading-none mb-8">Desarrollador Frontend Sr.</h1>

            <p className="font-normal text-gray-600 text-md md:text-xl mb-16">Tengo 8 años de experiencia en el desarrollo y mantenimiento de software,
                con herramientas y metodologías agiles Apasionado por el mundo de la programación, me gusta
                aplicar mis conocimientos y experiencia para ayudar en soluciones a problemas aparentemente
                complejos
            </p>
        </div>
    </Section>
    

export default Index