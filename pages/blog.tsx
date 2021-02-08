import React, {useState, useEffect, FunctionComponent} from "react"
import Header from "../components/header"
import Post from "../components/Post"
import styles from "../styles/blog.module.css"
import Head from "next/head"

const Blog: FunctionComponent = (): JSX.Element => {
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
                <Post title="Creating a custom HTML element" link="creating-a-custom-html-element" />
                <Post title="Free hosting services for developers" link="free-hosting-services-for-web-developers" />
                <Post title="9 Useful apps for web developers" link="9-useful-apps-for-devs" />
                <Post title="11 JavaScript Console Commands explained" link="14js-console-commands-explained" />
                <Post title="Handling browser load events" link="handling-browser-load-events-in-javascript" />
                <Post title="Install VSCode on Android" link="install-vscode-on-android" />
                <Post title="How to create React app without create-react-app CLI" link="how-to-create-react-app-without-the-cra-cli" />
                <Post title="JavaScript Array Methods" link="js-array-methods" />
            </div>
        </div>
    )
}

export default Blog
