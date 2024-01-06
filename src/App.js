import './App.css';
import imgMe from "./assets/me.jpeg"

function App() {
	return <section class="py-10 md:py-16">

		<div class="container max-w-screen-xl mx-auto px-4">

			<div class="text-center">

				<div class="flex justify-center mb-16">
					<img src={imgMe} alt="Image" className='object-contain h-48 w-96' />
				</div>

				<h6 class="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">Felipe Tun</h6>

				<h1 class="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">Desarrollador de Software</h1>

				<p class="font-normal text-gray-600 text-md md:text-xl mb-16">Tengo 8 años de experiencia en el desarrollo y mantenimiento de software,
					con herramientas y metodologías agiles Apasionado por el mundo de la programación, me gusta
					aplicar mis conocimientos y experiencia para ayudar en soluciones a problemas aparentemente
					complejos
				</p>
			</div>

		</div>
	</section>
}

export default App;
