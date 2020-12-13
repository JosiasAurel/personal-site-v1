import { use } from "marked"
import React, { useState, useEffect } from "react"
import Header from "../components/header"
// import styles
import styles from "../styles/index.module.css"
import Head from "next/head"

function Index() {
    const [colorMode, setColorMode] = useState("light")
    const [theme, setTheme] = useState("")
    const [icon, setIcon] = useState("/moon.svg")
    

    function toggleColorMode() {
        if (colorMode === "dark") {
            setTheme("")
            setColorMode("light")
        } else if  (theme === "") {
            setColorMode("dark")
            setTheme("{styles.dark}")
            setIcon("/sun.svg")
        }
        return
    }

<<<<<<< HEAD
    return (
        <div className={(colorMode === "light") ? "" : (styles.dark) }>
            <Header color={colorMode} icon={icon} changeHandler={toggleColorMode} />
=======
					<Link href="/about">
					<a >About</a>
					</Link>

					<a href="/resume.png" download>Resume</a>
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
>>>>>>> master

            <Head>
                <title>Josias Aurel - Home</title>
            </Head>
        <div className={styles.profileContainer}>
            <img className={styles.profile} src="/josias.jpg" alt="Josias Profile"/>
        </div>
        
        <div className={styles.present}>
            <div className={styles.typewriter}>
            <h1 className={styles.name}>Hey, I'm Josias Aurel</h1>
        </div>
        </div>

        <div className={styles.message}>
            <p>It's nice to have you here.</p>
            <p>I am a hobbyist self-taugh developer from Cameroon.
                <br/>
                I code everyday on random stuff or my projects, because coding is fun for me.
                <br/>
                <p>You can reach out to me on Twitter - that's where i usually hangout.</p>
            </p>
            <p>I am an occasional Open Source contributor and maintainer.
                <br/>
                Fun fact : I write bugs XD.
            </p>
           
        </div>

        <footer className={styles.footer}>
            <a className={styles.social} href="https://twitter.com/JosiasWing?s=09"><img className={styles.social} src="/twitter.png" alt=""/></a>
            <a className={styles.social} href="https://github.com/JosiasAurel"><img img className={styles.social} src="/github.png" alt=""/></a>
            <a className={styles.social} href="mailto: ndjosiasaurel@gmail.com"><img img className={styles.social} src="/gmail.png" alt=""/></a>
        </footer>

        <span className={styles.footer2}>
        <h2 className={styles.end}> 
        © 2020 Josias Aurel <br />  Happily built with
         <img src="/dev/next.png" alt=""/></h2></span>
    </div>
    )
}


export default Index
