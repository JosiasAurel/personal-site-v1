import styles from '../styles/home.module.css'
import Tech from '../components/tech'
import ProjectCard from '../components/projectCard'
import Link from 'next/link'
import React, {useState} from 'react'
import ColorMode from '../components/ColorMode'

const Home = () => {
	const  [Mode, setMode] = useState("Dark");
	const [colorText, setColorText] = useState("Dark")
	function toggleColor() {
        if (Mode === "Light") {
			setMode("Dark")
			setColorText("Dark")
        } else if (Mode === "Dark") {
			setMode("Light")
            setColorText("Light")
        }
	}
	
	return (
		<div className={styles.body}>
		<div className={ (Mode === "Light") ? (styles.homeLightBody) : (styles.homeDarkBody) }>
			<header className={styles.header}>
			<Link href="/">
				<a><h2 className={styles.name}>JA</h2></a>
				</Link>
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
				<ColorMode
					onClick={() => toggleColor()}
					value={colorText}
				/>
			</header>
		<span className={styles.imgc}>
		 <img className={styles.logo} src="/josias-profile.png" alt="josias-logo" />
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
			 target="https://cropboard.josiasaurel.tech"
			 />

			 <h4> Find More on <a href="https://github.com/JosiasAurel?tab=repositories" className={styles.git}>GitHub</a> </h4>
			 <div className={styles.footer}>
			<a href="https://github.com/JosiasAurel"><img src="/github.png" alt="github" className={styles.social} /></a>		 
			<a href="mailto:%20ndjosiasaurel@gmail.com"><img src="/gmail.png" alt="github" className={styles.social} /></a>		 
			<a href="https://twitter.com/JosiasWing?s=09"><img src="/twitter.png" alt="github" className={styles.social} /></a>		 
			<a href="https://josiasaurel.itch.io/"><img src="/itchio.png" alt="github" className={styles.social} /></a>	
			<a href="https://hashnode.com/@JosiasAurel"><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1592752137870/scHk9tTaA.png?auto=compress" alt="hashnode" className={styles.social} /></a>	 
			<a href="https://dev.to/josiasaurel"><img src="https://d2fltix0v2e0sb.cloudfront.net/dev-black.png" alt="dev.to" className={styles.social} /></a>	
			</div>
		
			<h2 className={styles.c}> © 2020 Josias Aurel </h2>
		</div>
		</div>
	)
}

export default Home
