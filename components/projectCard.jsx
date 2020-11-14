import React from 'react'
import styles from '../styles/projectcard.module.css'

const ProjectCard = (props) => {
    return (
        <div className={styles.card}>
            <img src={props.projectImage} alt="" className={props.projectImage}/>
    <h2>{props.projectName}</h2>
        </div>
    )
}

export default ProjectCard