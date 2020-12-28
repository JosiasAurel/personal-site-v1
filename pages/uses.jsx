import React, {useState, useEffect} from "react"
import styles from "../styles/uses.module.css"
import Header from "../components/header"
import Head from "next/head"

const Uses = () => {
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
                    Josias Aurel - Uses
                </title>
            </Head>
            <div>
               <center> <h2>Tools</h2></center>
                <br/>
                <ul>
                    <li>PC</li>
                    <li>Lenovo K5 Play - Android 8.1</li>
                    <li>Termux</li>
                    <li>PowerLevel10K Terminal Theme</li>
                    <li>Nexdo (Todo App)</li>
                    <li>Notion</li>
                    <li>VSCode</li>
                    <li>Postman</li>
                    <li>Restler (Postman-like tool for Android)</li>
                </ul>

                <h3 style={{textAlign: "center"}}>THEY ARE JUST TOOLS!</h3>
            </div>

            <footer className={styles.footer}>
                    <p>&copy; {new Date().getFullYear()} Josias Aurel. Made with &#x1f497;</p>
                </footer>
        </div>
    )
}

export default Uses
