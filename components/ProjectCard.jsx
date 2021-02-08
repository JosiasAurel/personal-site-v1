import React from "react"
import Image from "next/image"
import styles from "../styles/projectcard.module.css"
import { Card } from "@geist-ui/react"

const ProjectCard = ({name, link, photo}) => {
    return (
        <div className={styles.card}>
            <Card hoverable>
            { photo ? <Image src={photo} width="250px" height="250px" /> : "" }
            <a href={link ? link : "#"}>
                <h2 style={{textAlign: "center"}}>{name}</h2>
            </a>
            </Card>
        </div>
    )
}

export default ProjectCard