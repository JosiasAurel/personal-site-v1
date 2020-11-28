import React, {useState} from 'react'
import Link from 'next/link'
import ColorMode from '../components/ColorMode'
import styles from "../styles/projects.module.css"
import ProjectCard from "../components/projectsCard"


const Projects = () => {
    const  [Mode, setMode] = useState("Dark");
	const [colorText, setColorText] = useState("Dark")
	function toggleColor() {
        if (Mode === "Light") {
			setMode("Dark")
			setColorText("Dark")
        } else if (Mode === "Dark") {
			setMode("Light")
            setColorText("Light")
        }
    }
    
    return (
        <div className={ (Mode === "Light") ? (styles.homeLightBody) : (styles.homeDarkBody) }>
            <header className={styles.header}>
			<Link href="/">
				<a><h2 className={styles.name}>JA</h2></a>
				</Link>

				<span className={styles.headerLinks}>
					<Link href="/blog">
					<a >Blog</a>
					</Link>

					<Link href="/projects">
					<a >Projects</a>
					</Link>

					<Link href="/about">
					<a >About</a>
					</Link>
				</span>
				<ColorMode
					onClick={() => toggleColor()}
					value={colorText}
				/>
			</header>

            <div>
               <ProjectCard projectName="Snippet Ski" label="At Work" description="A code snippet sharing app." />
			   <ProjectCard projectName="Pika" label="At Work" description="A URL shortening app."/>
				<ProjectCard projectName="GraphQL Book API" description="A simple GraphQL Books API." />
				<ProjectCard projectName="Paint App" description="A minimalistic basic painting app." />
				<ProjectCard projectName="RGB To Hex Color Converter" description="An ap that can convert RGB color codes to hexadecimal color codes. Supports multiple conversions." />
				<ProjectCard projectName="Palindrome Checker" description="A simple python script that can determine if a word is a palindrome or not." />
				<ProjectCard projectName="Subdomain Scanner" description="A python app that can determine all the subdomains on a root domain. Uses BruteForce method." />
				<ProjectCard projectName="Steganography Program" description="A simple python program to encode and decode text in imgaes." />
				<ProjectCard projectName="Rock Paper Scissors" description="A rock paper scissors CLI game in python." />
				<ProjectCard projectName="NextJS" description="A minimal NextJS markdown blog template." />
				<ProjectCard projectName="Face Detection" description="A face detection program using OpenCV and a pretrained face classifier." />
				<ProjectCard projectName="Covid19 Info App" description="A simple web app to provide Covid19 Info in Cameroon and the whole world." />
				<ProjectCard projectName="Location detector" description="A simple web app that shows you your current location through the web loaction API." />
				<ProjectCard projectName="QR code encryption and decryption" description="A simple python program to gemerate and decode QR codes." />
				<ProjectCard projectName="Color generator" description="A web app that generates colors in RGB for you." />
				<ProjectCard projectName="Device Detection" description="A web API that detects the device/system the client runs." />
				<ProjectCard projectName="Nega Calculator" description="The first big program i made as a beginner in Python XD." />
				<ProjectCard projectName="Password Generator" description="A password generator app." />
				<ProjectCard projectName="Peasy Notes" description="An app that helps you take notes and encode them in a URL." />
				<ProjectCard projectName="An image classifier Tensorflow" description="A tensorflow model to clessfify images and numbers." />
				<ProjectCard projectName="Word Counter" description="A simple python program to count the number of words in a text." />
				<ProjectCard projectName="word to PDF converter" description="A python program to convert word documents into PDF documents using an API." />
				<ProjectCard projectName="GraphQL Book API" description="A simple GraphQL Books API" />
				<ProjectCard projectName="Notes API" description="A simple notes API with NodeJS and MongoDB" />	  
				</div>
        </div>
    )
}

export default Projects