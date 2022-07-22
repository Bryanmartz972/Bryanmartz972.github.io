import ResponsiveDiv from './ResponsiveDiv'
import ProjectCard from './ProjectCard'
import CommentNowFrontend from '../assets/images/commentnow-frontend-photo-gimp.png'
import CommentNowBackend from '../assets/images/commentnow-backend-photo.png'
import PrometheusBackend from '../assets/images/prometheus-backend-photo.jpg'
import PrometheusFrontend from '../assets/images/prometheus-frontend-photo.png'
import IglesiaSanIsidro from '../assets/images/iglesia-san-isidro.png'
import PortfolioWebsite from '../assets/images/portfolio-website.png'
import TwitterUIMirroring from '../assets/images/twitter-ui-mirroring.png'

const Projects = () => {
	return (
		<section id='projects' className='flex flex-col items-center py-8'>
			<h2 className='text-3xl font-bold mb-4'>Projects</h2>
			<ResponsiveDiv>
				<div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full'>
					<ProjectCard
						text={['React', 'Redux', 'Css']}
						title='CommentNow'
						linkTo='https://github.com/Bryanmartz972/commentnow-frontend'
						info='This is a web app that allows users to post comments and other people liking those posts. It is a React app with a Redux store. It includes a login, signup, and profile page. It includes the functionality of posting and liking other people posts. It is connected to a REST API that was created by a team of developers led by me.'
						image={CommentNowFrontend}
					/>
					<ProjectCard
						text={['React Native', 'API']}
						title='Prometheus App'
						linkTo='https://github.com/Bryanmartz972/ProyectoMovil2ReactUsuario'
						info='This is a mobile application that allows users to buy clothing items and sneakers. It is a React Native application with Expo that fetches to an API developed by a team led by me. It includes a login system, a cart system and search products system.'
						image={PrometheusFrontend}
					/>
					<ProjectCard
						text={['React', 'TailwindCSS']}
						title='Portfolio Website'
						linkTo='https://github.com/Bryanmartz972/portfolio-website'
						info=''
						image={PortfolioWebsite}
					/>
					<ProjectCard
						text={['HTML', 'CSS', 'JavaScript']}
						title='Iglesia San Isidro'
						linkTo='https://github.com/Bryanmartz972/IglesiaSanIsidro_PW1'
						info=''
						image={IglesiaSanIsidro}
					/>
					<ProjectCard
						text={['React', 'TailwindCSS', 'MaterialUI']}
						title='Twitter UI Mirror'
						linkTo='https://github.com/Bryanmartz972/twitter-ui-mirroring'
						info='This is a React application that recreates the Twitter UI. It is still in progress since it only supports mobile viewport. It was developed and design by eyeing the Twitter UI and then applying the same principles to a React application. I am planning to finish it and include functioanl features like the likes interaction and more viewports.'
						image={TwitterUIMirroring}
					/>

					<ProjectCard
						text={['NodeJS', 'Express', 'MySQL']}
						title='Prometheus API'
						linkTo='https://github.com/Bryanmartz972/ProyectoMovil2'
						info=''
						image={PrometheusBackend}
					/>
				</div>
			</ResponsiveDiv>
		</section>
	)
}

export default Projects
