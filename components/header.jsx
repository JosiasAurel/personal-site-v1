import React, { useState } from "react"
import styles from "../styles/header.module.css"
import Link from "next/link"

const Header = ({ icon, changeHandler }) => {
    return (
        <header className={styles.header}>
            <span>
                <Link href="/">
                    <h2 className={styles.getHome}>JA</h2>
                </Link>
            </span>
            <span className={styles.headerLinks}>
                <Link href="/uses">
                <a className={styles.headerLink}>Uses</a>
                </Link>
                <Link href="/blog">
                <a className={styles.headerLink}>Blog</a>
                </Link>
            <Link href="/projects">
            <a className={styles.headerLink}>Projects</a>
            </Link>
            <button onClick={changeHandler} className={styles.colorModeToggle}><img src={icon} alt=""/></button>
            </span>
        </header>
    )
}

export default Header