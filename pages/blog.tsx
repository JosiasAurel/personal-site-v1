import React, {useState, useEffect, FunctionComponent} from "react"
import Header from "../components/header"
import Post from "../components/Post"
import styles from "../styles/blog.module.css"
import Head from "next/head"

const Blog: FunctionComponent = (): JSX.Element => {

    return (
        <div>
            <Header />
            <Head>
                <title>Josias Aurel - Blog</title>
            </Head>
            <div>
                <h2 style={{textAlign: "center"}}>Here you will find cool blog posts.</h2>
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
                <Post title="The difference between String and string in TypeScript" link="the-difference-between-string-ts" />
            </div>
        </div>
    )
}

export default Blog
