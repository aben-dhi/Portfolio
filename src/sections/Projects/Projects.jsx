import styles from './ProjectsStyles.module.css';
import ft_irc from '../../assets/ft_irc.png';
import ProjectCard from '../../common/ProjectCard';
import cub3d from '../../assets/cub3d.png';
import inception from '../../assets/inception.png';
import transcendance from '../../assets/transcendance.png';

function Projects() {
  return <section id="projects" className={styles.container}>
	<h1 className="sectionTitle">Projects</h1>
	<div className={styles.projectsContainer}>
		<ProjectCard src={ft_irc}
		link='https://github.com/aben-dhi/FT_IRC'
		h3='Ft_irc'
		p={"IRC server and client\nimplementation in C++"}
		/>
		<ProjectCard src={cub3d}
		link='https://github.com/aben-dhi/cub3d-final-form'
		h3='Cub3d'
		p={'Raycasting engine in C'}
		/>
		<ProjectCard src={inception}
		link='https://github.com/aben-dhi/Inception-42'
		h3='Inception'
		p={'Dockerization of\nmultiple services'}
		/>
		<ProjectCard src={transcendance}
		link='https://github.com/aben-dhi/'
		h3='Transcendance'
		p={'Web application for\na virtual pong game'}
		/>
	</div>
  </section>;
}

export default Projects;