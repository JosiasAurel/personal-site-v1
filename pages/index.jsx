import styles from '../styles/home.module.css'
import Tech from '../components/tech'
import ProjectCard from '../components/projectCard'
import Link from 'next/link'

const Home = () => {
	return (
		<div>
			<header className={styles.header}>
				<h2>JA</h2>

				<span className={styles.headerLinks}>
					<Link href="/blog">
					<a >Blog</a>
					</Link>

					<Link href="/projects">
					<a >Projects</a>
					</Link>

					<Link href="/about">
					<a >About</a>
					</Link>
				</span>
			</header>
		<span className={styles.imgc}>
		 <img className={styles.logo} src="/josias-logo.png" alt="josias-logo" />
</span>
		 <h2 className={styles.pre}>
		 Hi, I'm Josias Aurel
		  </h2>

		  <Tech 
			/>

			<h2> Projects I work On </h2>

			<ProjectCard
			 name="CropBoard"
			 alt="CropBoard"
			 imgsrc="/cropb.png"
			 target="https://cropboard.vercel.app"
			 />

			 <h4> Find More on <a href="https://github.com/JosiasAurel?tab=repositories" className={styles.git}>GitHub</a> </h4>
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
