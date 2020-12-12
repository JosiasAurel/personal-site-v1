import React, { useState } from "react"
import styles from "../styles/header.module.css"

const Header = ({ icon, changeHandler }) => {
    return (
        <header className={styles.header}>
            <span className={styles.headerLinks}>
            <a className={styles.headerLink} href="">Uses</a>
            <a className={styles.headerLink} href="">Blog</a>
            <a className={styles.headerLink} href="">Projects</a>
            <button onClick={changeHandler} className={styles.colorModeToggle}><img src={icon} alt=""/></button>
            </span>
        </header>
    )
}

export default Header