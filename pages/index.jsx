import React from "react"
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark"
import Header from "../components/header"
// import styles
import styles from "../styles/index.module.css"

const Index = () => {
    return (
        <div>
            <Header />
        <div className={styles.profileContainer}>
            <img className={styles.profile} src="/josias.jpg" alt="Josias Profile"/>
        </div>
        
        <div className={styles.present}>
            <div className={styles.typewriter}>
            <h1 className={styles.name}>Hey, I'm Josias Aurel</h1>
        </div>
        </div>

        <div className={styles.message}>
            <p>It's nice to have you here.</p>
            <p>I am a hobbyist self-taugh developer from Cameroon.
                <br/>
                I code everyday on random stuff or my projects, because coding it is fun for me.
                <br/>
                <p>You can reach to me on Twitter - that's where i usually hangout.</p>
            </p>
            <p>I am an occasional Open Source contributor and maintainer.
                <br/>
                Fun fact : I write bugs XD.
            </p>
           
        </div>

    </div>
    )
}

export default Index