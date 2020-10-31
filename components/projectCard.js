import styles from '../styles/project.module.css'

const ProjectCard = (props) => {
	return (
		<div className={styles.card}>
		<span className={styles.imgc}>
		 <img 
		 className={styles.logo}
		 src={props.imgsrc} 
		 alt={props.alt} />
		 </span>
		 <a
		 className={styles.link}
		  href={props.target}> <h3> {props.name} </h3> </a>
		</div>
	)
}

export default ProjectCard
