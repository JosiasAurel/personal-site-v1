import styles from '../styles/home.module.css'
import Tech from '../components/tech'
import ProjectCard from '../components/projectCard'

const Home = () => {
	return (
		<div>
		<h1 className={styles.name}> JA </h1>
		<span className={styles.imgc}>
		 <img className={styles.logo} src="/josias-logo.png" alt="josias-logo" />
</span>
		 <h2 className={styles.pre}>
		 Hi, I am Josias Aurel, 15 years old self-taught developer.
		 I am passionate about Web Development, Game Development and AI.
		  </h2>

		  <Tech 
		  title="I am comfortable with the following technologies"
			/>

			<h2> Projects I work On </h2>

			<ProjectCard
			 name="CropBoard"
			 alt="CropBoard"
			 imgsrc="/cropb.png"
			 target="https://cropboard.vercel.app"
			 />

			 <h4> Find More on GitHub </h4>

			 <div className={styles.footer}>
			<a href="https://github.com/JosiasAurel"><img src="/github.png" alt="github" className={styles.social} /></a>		 
			<a href="mailto:%20ndjosiasaurel@gmail.com"><img src="/gmail.png" alt="github" className={styles.social} /></a>		 
			<a href="https://twitter.com/JosiasWing?s=09"><img src="/twitter.png" alt="github" className={styles.social} /></a>		 
			<a href="https://josiasaurel.itch.io/"><img src="/itchio.png" alt="github" className={styles.social} /></a>		 
			</div>

			<h2 className={styles.c}> © 2020 Josias Aurel </h2>
		</div>
	)
}

export default Home
