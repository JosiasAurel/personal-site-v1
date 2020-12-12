import React from "react"
import styles from "../styles/header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <span className={styles.headerLinks}>
            <a className={styles.headerLink} href="">Uses</a>
            <a className={styles.headerLink} href="">Blog</a>
            <a className={styles.headerLink} href="">Projects</a>
            <a className={styles.headerLink} href="">About</a>
            </span>
        </header>
    )
}

export default Header