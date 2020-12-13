import React, {useState, useEffect} from "react"
import Header from "../components/header"
import styles from "../styles/projects.module.css"
import Head from "next/head"

const Projects = () => {
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
    return (
        <div className={(colorMode === "light") ? "" : (styles.dark) }>
            <Header color={colorMode} icon={icon} changeHandler={toggleColorMode} />
            <Head>
                <title>
                    Josias Aurel - Projects
                </title>
            </Head>
            <div>
              <center>  <h1>Here will go the projects.</h1> </center>
                <center><p>Sorry! They are being refactored and bugs squashed to feel better than before.</p></center>
            </div>
        </div>
    )
}

export default Projects
