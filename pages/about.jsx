import React, { useState } from "react"
import Link from "next/link"
import styles from "../styles/about.module.css"
import ColorMode from '../components/ColorMode'

const About = () => {
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
            </div>
            </>
    )
}
export default About