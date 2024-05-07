import React, {FunctionComponent} from "react"

import Image from "next/image"
import Head from "next/head"

// import custom styles
import styles from "../styles/index.module.css"

// import custom components
import Header from "../components/header"

const Index: FunctionComponent = (): JSX.Element => {
    const iconNames: Array<{ icon: string, name: string }> = [
        {
            icon: "/icons/html.svg",
            name: "HTML"
        },
{
            icon: "/icons/css.svg",
            name: "CSS"
        },
{
            icon: "/icons/js.svg",
            name: "JavaScript"
        },
        {
            icon: "/icons/ts.svg",
            name: "TypeScript"
        },
        {
            icon: "/icons/python.svg",
            name: "Python"
        },
{
            icon: "/icons/node.svg",
            name: "NodeJS"
        },
{
            icon: "/icons/gql.svg",
            name: "GraphQL"
        },
{
            icon: "/icons/mongo.svg",
            name: "MongoDB"
        },
{
            icon: "/icons/git.svg",
            name: "Git"
        },
{
            icon: "/icons/apollo.svg",
            name: "Apollo"
        },
{
            icon: "/icons/do.svg",
            name: "DigitalOcean"
        },
{
            icon: "/icons/vercel.svg",
            name: "Vercel"
        },
{
            icon: "/icons/heroku.svg",
            name: "Heroku"
        },
{
            icon: "/icons/flask.svg",
            name: "Flask"
        },
{
            icon: "/icons/django.svg",
            name: "Django"
        },
{
            icon: "/icons/godot.svg",
            name: "Godot"
        },
{
            icon: "/icons/next.svg",
            name: "NextJS"
        },
{
            icon: "/icons/react.svg",
            name: "React"
        }
    ];
    return (
        <>
            <Head>
<title>Josias Aurel ▪</title>
<meta name="title" content="Josias Aurel ▪" />
<meta name="description" content="Self-Taught Hobbyist Developer from Cameroon" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://josiasaurel.tech/" />
<meta property="og:title" content="Josias Aurel ▪" />
<meta property="og:description" content="I am full stack software developer" />
<meta property="og:image" content="https://raw.githubusercontent.com/JosiasAurel/JosiasAurel/master/Screenshot_2021-02-15-19-00-14-0757216092.png" />


<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://josiasaurel.tech/" />
<meta property="twitter:title" content="Josias Aurel ▪" />
<meta property="twitter:description" content="Developer" />
<meta property="twitter:image" content="https://raw.githubusercontent.com/JosiasAurel/JosiasAurel/master/Screenshot_2021-02-15-19-00-14-0757216092.png" />
            </Head>
            <nav><Header /></nav>
            <div className={styles.page}>
                
                <main>
                    <div className={styles.user}>
                    <h1 className={styles.name}>Josias Aurel ▪ </h1>
                    <Image width={200} height={200} className={styles.profile} src="/josias.jpg" alt="josias" />
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
                   {iconNames.map(({ icon, name}) => (
                    <li>
                        <Image src={icon} alt={name} width={40} height={40} />
                        <p>{name}</p>
                    </li>
                   ))} 
                </ul>
                </div>
                </section>
                    <hr className={styles.separator} />

                <section>
                    <div>
                    <p style={{fontSize:"20px", textAlign: "center"}}>Interested to work with me ? Send me an email at <a style={{color:"grey"}} href="mailto:ndjosiasaurel@gmail.com">ndjosiasaurel@gmail.com</a></p>
                </div>

                <ul className={styles.socials}>
                    <li><a href="https://twitter.com/JosiasWing?s=09"><Image src="/icons/twitterlogo.svg" width={30} height={30} alt="twitter" /></a></li>
                    <li><a href="https://www.linkedin.com/in/josias-aurel-dev-io/"><Image src="/icons/In.svg" width={30} height={30} alt="linkedin" /></a></li>
                    <li><a href="https://github.com/JosiasAurel"><Image src="/icons/github.svg" width={30} height={30} alt="github" /></a></li>
                    <li><a href="https://dev.to/josiasaurel"><Image src="/icons/dev.svg" width={30} height={30} alt="dev.to" /></a></li>
                    <li><a href="https://www.youtube.com/channel/UCLyEFauz2k4mnJYC5RxlDBQ"><Image src="/icons/yt.svg" width={30} height={30} alt="youtube" /></a></li>
                   <li><a href="https://josiasaurel.itch.io"><Image src="/itchio.png" width={30} height={30} alt="itchio" /></a></li>
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
