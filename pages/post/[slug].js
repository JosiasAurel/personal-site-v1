import matter from 'gray-matter'
import CodeBlock from "../../components/CodeBlock"
import ReactMarkdown from 'react-markdown'
import styles from "../../styles/post.module.css"
import Head from "next/head"
import Header from "../../components/header"
import React, {useState, useEffect} from "react"


export default function PostTemplate({content, data}) {

    const [colorMode, setColorMode] = useState("light")
    const [theme, setTheme] = useState("")
    const [icon, setIcon] = useState("/moon.svg")
    

    function toggleColorMode() {
        if (colorMode === "dark") {
            setTheme("")
            setColorMode("light")
        } else if  (theme === "") {
            setColorMode("dark")
            setTheme("{styles.dark}")
            setIcon("/sun.svg")
        }
        return
    }

    const frontmatter = data // Make frontmatter the data
    const tags = frontmatter.tags ?? [] // get the tags from blog post
    const shower = frontmatter.og // get the og image from the post


    return (

         <div className={(colorMode === "light") ? "" : (styles.dark) }>
             <Header color={colorMode} icon={icon} changeHandler={toggleColorMode} />
             <Head>
    <title>{frontmatter.title}</title>
    <meta name="og:image" content={shower} />
    <meta name="og:title" content={frontmatter.title} />
    <meta property="og:image" content={shower} />
    <meta property="og:title" content={frontmatter.title} />
        </Head>
        <div className={styles.post}>
            <div>
	        <h2 className={styles.title}>{frontmatter.title}</h2>
            <ul className={styles.tags}>
                {tags.map(tag => {
                    return (
                    <li>{tag}</li>
                    )
                })}
            </ul>
		 </div>
              
         
        <div>
            <ReactMarkdown className={styles.content}
                source={content}
                renderers={{code: CodeBlock}} />
       
         </div> 
        </div>
          <h2 > © 2020 Josias Aurel </h2>
         </div>
        )
}

PostTemplate.getInitialProps = async (ctx) => {
    const { slug } = ctx.query
    
    const content = await import(`../../content/${slug}.md`)
    
    const data = matter(content.default)
    console.log(data)
    return { ...data }
}
