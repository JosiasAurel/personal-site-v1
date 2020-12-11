import React from "react"
// import styles
import styles from "../styles/index.module.css"

const Index = () => {
    return (
        <div>
        <header className={styles.header}>
            <span className={styles.headerLinks}>
            <a className={styles.headerLink} href="">Uses</a>
            <a className={styles.headerLink} href="">Blog</a>
            <a className={styles.headerLink} href="">Projects</a>
            <a className={styles.headerLink} href="">About</a>
            </span>
        </header>
        <div className={styles.profileContainer}>
            <img className={styles.profile} src="/josias-profile.jpg" alt="Josias Profile"/>
        </div>
        <div className={styles.typewriter}>
            <h1 className={styles.name}>Hi, I'm Josias Aurel</h1>
        </div>
    </div>
    )
}

export default Index