import React, {useState, useEffect} from "react"
import styles from "../styles/uses.module.css"
import Header from "../components/header"


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
            <div>
                <h2>Tools</h2>
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
                <h2>Languages, Frameworks and Libraries</h2>
                <div className={styles.container}>
                    <ul className={styles.tools}>
                    <span className={styles.isTool}>
                        <li ><img className={styles.tool} src="/dev/html.png" alt=""/></li>
                        <p>HTML</p>
                    </span>
                    <span>
                        <li ><img className={styles.tool} src="/dev/css.png" alt=""/></li>
                        <p>CSS</p>
                    </span>
                    <span>
                        <li ><img className={styles.tool} src="/dev/js.png" alt=""/></li>
                        <p>JavaScript</p>
                    </span>
                    <span>
                        <li ><img className={styles.tool} src="/dev/ts.png" alt=""/></li>
                        <p>TypeScript</p>
                    </span>
                    <span>
                        <li ><img className={styles.tool} src="/dev/python.png" alt=""/></li>
                        <p>Python</p>
                    </span>
                    <span>
                        <li ><img className={styles.tool} src="/dev/react.png" alt=""/></li>
                        <p>React</p>
                    </span>
                    <span>
                        <li ><img className={styles.tool} src="/dev/flask.png" alt=""/></li>
                        <p>Flask</p>
                    </span>
                    <span>
                        <li ><img className={styles.tool} src="/dev/django.png" alt=""/></li>
                        <p>Djano</p>
                    </span>
                    <span>
                        <li ><img className={styles.tool} src="/dev/git.png" alt=""/></li>
                        Git
                    </span>
                    <span>
                        <li ><img className={styles.tool} src="/dev/graphql.png" alt=""/></li>
                        GraphQL
                    </span>
                    <span>
                        <li ><img className={styles.tool} src="/dev/node.png" alt=""/></li>
                        <p>NodeJS</p>
                    </span>
                    <span>
                        <li ><img className={styles.tool} src="/dev/godot.png" alt=""/></li>
                        <p>Godot</p>
                    </span>
                </ul>
                </div>

                <h3>THEY ARE JUST TOOLS!</h3>
            </div>
        </div>
    )
}

export default Uses