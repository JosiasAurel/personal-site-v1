import React, {useState} from 'react'
import PostCard from '../components/postCard'
import styles from '../styles/posts.module.css'
import Link from 'next/link'
import ColorMode from '../components/ColorMode'


const Posts = () => {
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
<div>
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
			<PostCard postName="Install VSCode on Android"
			          link="/post/install-vscode-on-android" />
			<PostCard postName="Handle Browser Load events in JavaScript"
			          link="/post/install-vscode-on-android" />
        </div>

			 
            

			<h2 className={styles.c}> © 2020 Josias Aurel </h2>
			</div>
			
			</div>
        </>
    )
}

export default Posts