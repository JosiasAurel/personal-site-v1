import React, {useState} from 'react'
import Link from 'next/Link'
import ColorMode from '../components/ColorMode'
import styles from "../styles/projects.module.css"
import ProjectCard from "../components/projectCard"

const Projects = () => {
    const  [Mode, setMode] = useState("Light");
	const [colorText, setColorText] = useState("Light")
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
        <div className={ (Mode === "Light") ? (styles.homeLightBody) : (styles.homeDarkBody) }>
            <header className={styles.header}>
				<h2 className={styles.name}>JA</h2>

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

            <div>
                <ProjectCard 
                    projectImage="/projects/site.PNG"
                    projectName="My Website"
                />
            </div>
        </div>
    )
}

export default Projects