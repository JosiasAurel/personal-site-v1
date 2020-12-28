import React from "react"

import Image from "next/image"
import Head from "next/head"

// import custom styles
import styles from "../styles/index.module.css"

// import custom components
import Header from "../components/header"

const Index = () => {
    return (
        <div>
            <Head>
                <meta name="og:title" content="Josias Aurel" />
                <meta name="title" content="Josias Aurel" />
                <meta name="og:image" content="https://raw.githubusercontent.com/JosiasAurel/josiasaureldev/master/public/og.PNG?token=ALN24EAEFPPAFJFPKZDNJHC75IB3U"/>
            </Head>
            <Header />
            <div className={styles.page}>
                
                <div className={styles.user}>
                    <h1 className={styles.name}>Josias Aurel ▪ </h1>
                    <Image width="200px" height="200px" className={styles.profile} src="/josias.jpg" />
                </div>

                <p className={styles.present}>
                    I am a self-taught full-stack developer also in Game, Machine Learning and Mobile development from cameroon. <br/>
                    I love to code for fun and experiment. <br/>
                    I love to learn new things and build projects with my knowledge. <br/>
                </p>

                    <hr className={styles.separator} />

                    <h2 style={{textAlign: "center", fontFamily: "arial", fontWeight: "lighter"}}>Technologies I work with</h2>

                <div className={styles.techsContainer}>
                    <ul className={styles.techs}>
                    <li>
                        <Image src="/icons/html.svg" width="40px" height="40px" />
                        <p>HTML</p>
                    </li>
                    <li>
                        <Image src="/icons/css.svg" width="40px" height="40px" />
                        <p>CSS</p>
                    </li>
                    <li>
                        <Image src="/icons/js.svg" width="40px" height="40px" />
                        <p>JavaScript</p>
                    </li>
                    <li>
                        <Image src="/icons/ts.svg" width="40px" height="40px" />
                        <p>TypeScript</p>
                    </li>
                    <li>
                        <Image src="/dev/python.png" width="40px" height="40px" />
                        <p>Python</p>
                    </li>
                    <li>
                        <Image src="/icons/node.svg" width="40px" height="40px" />
                        <p>NodeJS</p>
                    </li>
                    <li>
                        <Image src="/icons/gql.svg" width="40px" height="40px" />
                        <p>GraphQL</p>
                    </li>
                    <li>
                        <Image src="/icons/mongo.svg" width="40px" height="40px" />
                        <p>Mongo DB</p>
                    </li>
                    <li>
                        <Image src="/icons/git.svg" width="40px" height="40px" />
                        <p>Git</p>
                    </li>
                    <li>
                        <Image src="/icons/apollo.svg" width="40px" height="40px" />
                        <p>Apollo</p>
                    </li>
                    <li>
                        <Image src="/icons/do.svg" width="40px" height="40px" />
                        <p>DigitalOcean</p>
                    </li>
                    <li>
                        <Image src="/icons/vercel.svg" width="40px" height="40px" />
                        <p>Vercel</p>
                    </li>
                    <li>
                        <Image src="/icons/heroku.svg" width="40px" height="40px" />
                        <p>Heroku</p>
                    </li>
                    <li>
                        <Image src="/dev/flask.png" width="40px" height="40px" />
                        <p>Flask</p>
                    </li>
                    <li>
                        <Image src="/dev/django.png" width="40px" height="40px" />
                        <p>Django</p>
                    </li>
                    <li>
                        <Image src="/dev/godot.png" width="40px" height="40px" />
                        <p>Godot</p>
                    </li>
                    <li>
                        <Image src="/icons/next.svg" width="40px" height="40px" />
                        <p>NextJS</p>
                    </li>
                </ul>
                </div>

                    <hr className={styles.separator} />

                <div>
                    <p style={{fontSize:"20px", textAlign: "center"}}>Interested to work with me ? Send me an email at <a style={{color:"grey"}} href="mailto:ndjosiasaurel@gmail.com">ndjosiasaurel@gmail.com</a></p>
                </div>

                <ul className={styles.socials}>
                    <li><a href="https://twitter.com/JosiasWing?s=09"><Image src="/icons/twitterlogo.svg" width="30px" height="30px" /></a></li>
                    <li><a href="https://www.linkedin.com/in/josias-aurel-dev-io/"><Image src="/icons/In.svg" width="30px" height="30px" /></a></li>
                    <li><a href="https://github.com/JosiasAurel"><Image src="/icons/github.svg" width="30px" height="30px" /></a></li>
                    <li><a href="https://dev.to/josiasaurel"><Image src="/icons/dev.svg" width="30px" height="30px" /></a></li>
                    <li><a href="https://www.youtube.com/channel/UCLyEFauz2k4mnJYC5RxlDBQ"><Image src="/icons/yt.svg" width="30px" height="30px" /></a></li>
                   <li><a href="https://josiasaurel.itch.io"><Image src="/itchio.png" width="30px" height="30px" /></a></li>
                   <li><a href="https://hashnode.com/@JosiasAurel"><Image src="https://cdn.hashnode.com/res/hashnode/image/upload/v1592752137870/scHk9tTaA.png?auto=compress" width="30px" height="30px" /></a></li>
                </ul>

                <footer className={styles.footer}>
                    <p>&copy; {new Date().getFullYear()} Josias Aurel. Made with &#x1f497;</p>
                </footer>
            </div>
        </div>
    )
}

export default Index
