import React from "react"
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
            <h1 className={styles.name}>Hi, I'm Josias Aurel</h1>
        </div>
        </div>

        <div>
            <p>It's nice to have you here.</p>
        </div>

    </div>
    )
}

export default Index