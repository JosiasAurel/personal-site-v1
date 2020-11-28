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
                    <ul className={styles.tech}>
                        <li><a className={styles.lang}>Django</a></li>
                        <li><a className={styles.lang}>Flask</a></li>
                        <li><a className={styles.lang}>NextJS</a></li>
                        <li><a className={styles.lang}>ReactJS</a></li>
                        <li><a className={styles.lang}>NodeJS</a></li>
                        <li><a className={styles.lang}>FastAPI</a></li>
                        <li><a className={styles.lang}>SQLite</a></li>
                        <li><a className={styles.lang}>MongoDB</a></li>
                        <li><a className={styles.lang}>APIs and JAMStack</a></li>
                        <li><a className={styles.lang}>SCripting</a></li>
                    </ul>
                    </div>
                </div>

                <div>
                    <h3> What i use</h3>
                    <div className={styles.stack}>
                    <ul className={styles.tech}>
                        <li><a className={styles.lang}>VSCode with Atom One Dark Theme</a></li>
                        <li><a className={styles.lang}>Termux (for coding on phone)</a></li>
                        <li><a className={styles.lang}>PowerLevel10K terminal theme</a></li>
                        <li><a className={styles.lang}>SPCK Editor </a></li>
                        <li><a className={styles.lang}>Git and GitHub</a></li>
                        <li><a className={styles.lang}>Post Man (for api testing)</a></li>
                        <li><a className={styles.lang}>Lenovo K5 Play Phone</a></li>
                    </ul>
                    </div>
                </div>

                <div>
                    <p>
                        I learn some new things everyday and i am open to learning more. I am interested in Game Developent, App Development and making Open Source Contributions.
                        I like experimenting with stuff.
                    </p>
                    <p>
                        Coding is my hobby and it makes me happy most. Anything coding ? I am interested in XD.
                    </p>

                    <p>
                        If you wish to contact me, my DMs are open on Twitter and my Mail Box too. Don't just spam me ;)
                    </p>
                </div>
            </div>
            </div>

            <div className={styles.footer}>
			<a href="https://github.com/JosiasAurel"><img src="/github.png" alt="github" className={styles.social} /></a>		 
			<a href="mailto:%20ndjosiasaurel@gmail.com"><img src="/gmail.png" alt="github" className={styles.social} /></a>		 
			<a href="https://twitter.com/JosiasWing?s=09"><img src="/twitter.png" alt="github" className={styles.social} /></a>		 
			<a href="https://josiasaurel.itch.io/"><img src="/itchio.png" alt="github" className={styles.social} /></a>		 
			</div>

			<h2 className={styles.c}> © 2020 Josias Aurel </h2>
            </>
    )
}
export default About