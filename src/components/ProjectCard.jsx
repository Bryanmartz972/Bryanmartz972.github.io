import ProjectCardTech from './ProjectCardTech'
import { GithubButton } from './Button'

const ProjectCard = ({ title, info, text, image, linkTo }) => {
	return (
		<div className='bg-primary w-full rounded-xl'>
			<div className='flex flex-row w-full p-4'>
				<div className='w-3 h-3 mr-2 rounded-full bg-[#ff605c]'></div>
				<div className='w-3 h-3 mr-2 rounded-full bg-[#ffbd44]'></div>
				<div className='w-3 h-3 rounded-full bg-[#00ca4e]'></div>
			</div>
			<div className='h-36'>
				<img
					src={image}
					className='h-36 w-full object-cover brightness-90'
					alt=''
					loading='lazy'
				/>
			</div>
			<div className='flex flex-col px-2 pb-4'>
				<h3 className='font-bold text-2xl py-2'>{title}</h3>
				<div className='grid grid-cols-2 gap-x-4 gap-y-2 py-2 p'>
					{text.map((tech, index) => {
						return <ProjectCardTech text={tech} key={index} />
					})}
				</div>
				<div className='mt-2 mb-4'>{info}</div>
				<div className=' '>
					<GithubButton linkTo={linkTo} />
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
