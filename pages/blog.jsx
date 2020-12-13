import React, {useState, useEffect} from "react"
import Header from "../components/header"
import Post from "../components/Post"
import styles from "../styles/blog.module.css"
import Head from "next/head"

const Blog = () => {
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
                <title>Josias Aurel - Blog</title>
            </Head>
            <div>
                <center><h2>Here you will find cool blog posts.</h2></center>
            </div>

            <div>
                <Post title="11 JavaScript Console Commands explained" link="14js-console-commands-explained" />
                <Post title="Handling browser load events" link="handling-browser-load-events-in-javascript" />
                <Post title="Install VSCode on Android" link="install-vscode-on-android" />
                <Post title="How to create React app without create-react-app CLI" link="how-to-create-react-app-without-the-cra-cli" />
            </div>
        </div>
    )
}

export default Blog