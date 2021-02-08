import React, { FunctionComponent } from "react"
import Header from "../components/header"
import ProjectCard from "../components/ProjectCard"
import styles from "../styles/projects.module.css"

const Projects: FunctionComponent = (): JSX.Element => {
    return (
        <div>
            <Header />
            <h1 style={{textAlign: "center"}}>Find Projects I have worked on</h1>
            <div className={styles.projectContainer}>
                <ProjectCard 
                name="Octo UI"
                photo="/octoui.PNG"
                link="https://octodemo.josiasaurel.tech"
                 />

                <ProjectCard 
                name="RGB To Hex"
                photo="/rgbtohex.PNG"
                link="https://rgbtohex.josiasaurel.tech"
                 />

                <ProjectCard 
                name="Scooter"
                photo="/scooter.PNG"
                link="https://scooter.josiasaurel.tech"
                 />

                <ProjectCard 
                name="PeasyNotes"
                photo="/peasynotes.PNG"
                link="https://peasynotes.josiasaurel.tech"
                 />

                <ProjectCard
                name="Find more on my GitHub Profile"
                photo="https://raw.githubusercontent.com/JosiasAurel/JosiasAurel/master/jos.png"
                link="https://github.com/JosiasAurel?tab=repositories"
                />
            </div>
            <footer className={styles.footer}>
                    <p>&copy; {new Date().getFullYear()} Josias Aurel. Made with &#x1f497;</p>
                </footer>
        </div>
    )
}

export default Projects
