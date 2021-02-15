import React, {FunctionComponent} from "react"

import Image from "next/image"
import Head from "next/head"

// import custom styles
import styles from "../styles/index.module.css"

// import custom components
import Header from "../components/header"

const Index: FunctionComponent = (): JSX.Element => {
    return (
        <>
            <Head>
<title>Josias Aurel ▪</title>
<meta name="title" content="Josias Aurel ▪">
<meta name="description" content="Self-Taught Hobbyist Developer from Cameroon">
<meta property="og:type" content="website">
<meta property="og:url" content="https://josiasaurel.tech/">
<meta property="og:title" content="Josias Aurel ▪">
<meta property="og:description" content="I am full stack software developer">
<meta property="og:image" content="https://raw.githubusercontent.com/JosiasAurel/JosiasAurel/master/Screenshot_2021-02-15-19-00-14-0757216092.png">


<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://josiasaurel.tech/">
<meta property="twitter:title" content="Josias Aurel ▪">
<meta property="twitter:description" content="Developer">
<meta property="twitter:image" content="https://raw.githubusercontent.com/JosiasAurel/JosiasAurel/master/Screenshot_2021-02-15-19-00-14-0757216092.png">
            </Head>
            <nav><Header /></nav>
            <div className={styles.page}>
                
                <main>
                    <div className={styles.user}>
                    <h1 className={styles.name}>Josias Aurel ▪ </h1>
                    <Image width="200px" height="200px" className={styles.profile} src="/josias.jpg" />
                </div>

                
                    <p className={styles.present}>
                    I am a self-taught full-stack developer also in Game, Machine Learning and Mobile development from cameroon. <br/>
                    I love to code for fun and experiment. <br/>
                    I love to learn new things and build projects with my knowledge. <br/>
                </p>
                </main>
              

                    <hr className={styles.separator} />

                    <h2 style={{textAlign: "center", fontFamily: "arial", fontWeight: "lighter"}}>Technologies I work with</h2>
                
                <section>
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
                    <li>
                        <Image src="/icons/react.svg" width="40px" height="40px" />
                        <p>React</p>
                    </li>
                </ul>
                </div>
                </section>
                    <hr className={styles.separator} />

                <section>
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
                </ul>
                </section>

                <footer className={styles.footer}>
                    <p>&copy; {new Date().getFullYear()} Josias Aurel. Made with &#x1f497;</p>
                </footer>
            </div>
        </>
    )
}

export default Index
