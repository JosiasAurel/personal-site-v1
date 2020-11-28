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
               <ProjectCard projectName="Snippet Ski" label="At Work" description="A code snippet sharing app." code="https://github.com/JosiasAurel/Ski" liveApp="https://snippet-ski.herokuapp.com/" />
			   <ProjectCard projectName="Pika" label="At Work" description="A URL shortening app." code="https://github.com/JosiasAurel/pika" />
				<ProjectCard projectName="GraphQL Book API" description="A simple GraphQL Books API." code="https://github.com/JosiasAurel/GraphQL-book-api" />
				<ProjectCard projectName="Paint App" description="A minimalistic basic painting app." code="https://github.com/JosiasAurel/paint-app" liveApp="https://paint-app-ja.vercel.app/" />
				<ProjectCard projectName="RGB To Hex Color Converter" description="An ap that can convert RGB color codes to hexadecimal color codes. Supports multiple conversions." code="https://github.com/JosiasAurel/RGB-to-hex-converter" liveApp="https://rgb-to-hex-converter.vercel.app/" />
				<ProjectCard projectName="Palindrome Checker" description="A simple python script that can determine if a word is a palindrome or not." code="https://github.com/JosiasAurel/dummy-project/blob/master/palindrome_checker.py" />
				<ProjectCard projectName="Subdomain Scanner" description="A python app that can determine all the subdomains on a root domain. Uses BruteForce method." code="https://github.com/JosiasAurel/dummy-project/tree/master/subdomain-s-scanner" />
				<ProjectCard projectName="Steganography Program" description="A simple python program to encode and decode text in images." code="https://github.com/JosiasAurel/dummy-project/tree/master/steganography" />
				<ProjectCard projectName="Rock Paper Scissors" description="A rock paper scissors CLI game in python." code="https://github.com/JosiasAurel/dummy-project/tree/master/rock-paper-scissors" />
				<ProjectCard projectName="NextJS" description="A minimal NextJS markdown blog template." code="https://github.com/JosiasAurel/dummy-project/tree/master/nextjs-markdown-blog" />
				<ProjectCard projectName="Face Detection" description="A face detection program using OpenCV and a pretrained face classifier." code="https://github.com/JosiasAurel/dummy-project/tree/master/face-detection-" />
				<ProjectCard projectName="Covid19 Info App" description="A simple web app to provide Covid19 Info in Cameroon and the whole world." code="https://github.com/JosiasAurel/dummy-project/tree/master/covid19nd" liveApp="https://covid19nd.now.sh/" />
				<ProjectCard projectName="Location detector" description="A simple web app that shows you your current location through the web location API." code="https://github.com/JosiasAurel/dummy-project/tree/master/KitsHive" liveApp="https://kits-hive.vercel.app/" />
				<ProjectCard projectName="QR code encryption and decryption" description="A simple python program to generate and decode QR codes." code="https://github.com/JosiasAurel/dummy-project/tree/master/QRCode-encryption-and-decryption-" />
				<ProjectCard projectName="Color generator" description="A web app that generates colors in RGB for you." liveApp="https://color-generator-seven.vercel.app/" />
				<ProjectCard projectName="Device Detection" description="A web API that detects the device/system the client runs." code="https://github.com/JosiasAurel/dummy-project/tree/master/device-detection-Python" />
				<ProjectCard projectName="Nega Calculator" description="The first big program i made as a beginner in Python XD." code="https://github.com/JosiasAurel/dummy-project/tree/master/NEGA-CALCULATOR-2.1" />
				<ProjectCard projectName="Password Generator" description="A password generator app." liveApp="https://ndpassgen.vercel.app/" code="https://github.com/JosiasAurel/dummy-project/tree/master/password-generator" />
				<ProjectCard projectName="Peasy Notes" description="An app that helps you take notes and encode them in a URL." code="https://github.com/JosiasAurel/dummy-project/tree/master/pizynotew" />
				<ProjectCard projectName="An image classifier Tensorflow" description="A tensorflow model to classfify images and numbers." code="https://github.com/JosiasAurel/dummy-project/tree/master/tfjs-image-classifier" />
				<ProjectCard projectName="Word Counter" description="A simple python program to count the number of words in a text." code="https://github.com/JosiasAurel/dummy-project/tree/master/word-counter" />
				<ProjectCard projectName="word to PDF converter" description="A python program to convert word documents into PDF documents using an API." code="https://github.com/JosiasAurel/dummy-project/tree/master/word_to_pdf_converter" />
				<ProjectCard projectName="Notes API" description="A simple notes API with NodeJS and MongoDB" code="https://github.com/JosiasAurel/dummy-project/tree/master/Notes-api" />	  
				</div>
        </div>
    )
}

export default Projects