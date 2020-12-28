import React from "react"
import styles from "../styles/header.module.css"
import Link from "next/link"

const Header = () => {
    return (
        <header className={styles.header}>
            <ul className={styles.pageLinks}>
                <li>
                    <Link href="/">
                        <a>Start</a>
                    </Link>
                </li>
                <li><Link href="/uses"><a>Uses</a></Link></li>
                <li><Link href="/blog"><a>Blog</a></Link></li>
                <li> <Link href="/projects"><a>Projects</a></Link></li>
            </ul>

            <a className={styles.twitterMe} href="https://twitter.com/JosiasWing?s=09">
                <img src="/icons/twitter.svg" alt="twitter-logo"/>
            </a>
        </header>
    )
}

export default Header