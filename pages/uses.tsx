import React, {useState, useEffect, FunctionComponent} from "react"
import styles from "../styles/uses.module.css"
import Header from "../components/header"
import Head from "next/head"

const Uses: FunctionComponent = (): JSX.Element => {

    return (
        <div>
            <Header />

            <Head>
                <title>
                    Josias Aurel - Uses
                </title>
            </Head>
            <div>
               <h2 style={{textAlign: "center"}}>Tools</h2>
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
