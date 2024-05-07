import React, { FunctionComponent } from "react"
import styles from "../styles/header.module.css"
import Link from "next/link"

const Header: FunctionComponent = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <ul className={styles.pageLinks}>
                <li>
                    <Link href="/">
                        Start
                    </Link>
                </li>
                <li><Link href="/uses">Uses</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li> <Link href="/projects">Projects</Link></li>
            </ul>

            <a className={styles.twitterMe} href="https://twitter.com/JosiasWing?s=09">
                <img src="/icons/twitter.svg" alt="twitter-logo"/>
            </a>
        </header>
    )
}

export default Header