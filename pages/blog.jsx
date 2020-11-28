import React, {useState} from 'react'
import PostCard from '../components/postCard'
import styles from '../styles/posts.module.css'
import Link from 'next/link'
import ColorMode from '../components/ColorMode'


const Posts = () => {
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

        <h2>
            Welcome to the posts page
        </h2>

        <div>
            <PostCard postName="Hello World in Brainf****" />
        </div>

			 <div className={styles.footer}>
			<a href="https://github.com/JosiasAurel"><img src="/github.png" alt="github" className={styles.social} /></a>		 
			<a href="mailto:%20ndjosiasaurel@gmail.com"><img src="/gmail.png" alt="github" className={styles.social} /></a>		 
			<a href="https://twitter.com/JosiasWing?s=09"><img src="/twitter.png" alt="github" className={styles.social} /></a>		 
			<a href="https://josiasaurel.itch.io/"><img src="/itchio.png" alt="github" className={styles.social} /></a>		 
			</div>

			<h2 className={styles.c}> © 2020 Josias Aurel </h2>
            </div>
        </>
    )
}

export default Posts