import React, { useState } from "react"
import Link from "next/link"
import styles from "../styles/about.module.css"
import ColorMode from '../components/ColorMode'

const About = () => {
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
            <>
            <div className={ (Mode === "Light") ? (styles.homeLightBody) : (styles.homeDarkBody) } >
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

            <div>
                <h2>
                    Hi i am Josias Aurel
                </h2>

                <p>
                    I am a self-taught software developer. I can code in <a className={styles.lang}>Python</a>, <a className={styles.lang}>Java</a> and <a className={styles.lang}>JavaScript</a>.
                    
                </p>

                <div>
                    <h3> My Technology Stack is :</h3>
                    <div className={styles.stack}>
                    <ul>
                        <li><a className={styles.lang}>Django</a></li>
                        <li><a className={styles.lang}>Flask</a></li>
                        <li><a className={styles.lang}>NextJS</a></li>
                        <li><a className={styles.lang}>ReactJS</a></li>
                        <li><a className={styles.lang}>NodeJS</a></li>
                        <li><a className={styles.lang}>FastAPI</a></li>
                        <li><a className={styles.lang}>SQLite</a></li>
                        <li><a className={styles.lang}>MongoDB</a></li>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
            </>
    )
}
export default About