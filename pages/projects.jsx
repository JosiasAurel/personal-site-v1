import React from "react"
import Header from "../components/header"
import styles from "../styles/projects.module.css"

const Projects = () => {
    return (
        <div>
            <Header />
            <h1 style={{textAlign: "center"}}>They are being worked on and bugs squashed down so they feel even cooler!</h1>
            <footer className={styles.footer}>
                    <p>&copy; {new Date().getFullYear()} Josias Aurel. Made with &#x1f497;</p>
                </footer>
        </div>
    )
}

export default Projects