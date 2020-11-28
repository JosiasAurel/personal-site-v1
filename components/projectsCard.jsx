import React from 'react'
import styles from '../styles/projectcard.module.css'

const ProjectCard = ({ projectName, label, description, code, liveApp }) => {
    return (
        <div className={styles.card}>
    <h2>{projectName}</h2>

    <span className={styles.info}><p className={styles.label}>{label}</p> <p>{description}</p></span>
    <span className={styles.flex}>
        { code ? <a href={code}><img className={styles.social} src="/github.png" alt=""/></a> : "" }
        { liveApp ? <a href={liveApp}><img className={styles.social} src="/live.png" alt=""/></a> : "" }
        </span>
        </div>
    )
}

export default ProjectCard