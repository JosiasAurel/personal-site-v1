import React from 'react'
import styles from '../styles/projectcard.module.css'

const ProjectCard = ({ projectName, label, description, code, liveApp }) => {
    return (
        <div className={styles.card}>
    <h2>{projectName}</h2>

    <span className={styles.info}><p className={styles.label}>{label}</p> <p>{description}</p></span>
    <span className={styles.info}><a href={code}><img className={styles.social} src="/github.png" alt=""/></a> <p>{liveApp}</p></span>
        </div>
    )
}

export default ProjectCard