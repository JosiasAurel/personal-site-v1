import matter from 'gray-matter'
import CodeBlock from "../../components/CodeBlock"
import ReactMarkdown from 'react-markdown'
import styles from "../../styles/post.module.css"
import Head from "next/head"
import Header from "../../components/header"
import React, {useState, useEffect} from "react"
import { formatWithValidation } from 'next/dist/next-server/lib/utils'


export default function PostTemplate({content, data}) {
        let frontmatter = data
        let shower = frontmatter.og
        let tags = frontmatter.tags
    return (

         <div>
             <Header />
             <Head>
    <title>{frontmatter.title}</title>
    <meta name="og:image" content={shower} />
    <meta name="og:title" content={frontmatter.title} />
    <meta property="og:image" content={shower} />
    <meta property="og:title" content={frontmatter.title} />
    <meta name="twitter:title" content={frontmatter.title} />
    <meta name="twitter:site" content="@JosiasWing" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={shower} />
        </Head>
        <div className={styles.post}>
            <div>
	        <h1 className={styles.title}>{frontmatter.title}</h1>
			<p>{frontmatter.date}</p>
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
     <script type="text/javascript" data-cfasync="false" src="/ad.js" > </script>
     <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="rocketstellar" data-color="#FFDD00" data-emoji="☕"  data-font="Cookie" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>

       </div>
         <center><p>&copy; {new Date().getFullYear()} Josias Aurel. Made with &#x1f497;</p></center>
         </div> 
        )
}

PostTemplate.getInitialProps = async (ctx) => {
    const { slug } = ctx.query
    
    const content = await import(`../../content/${slug}.md`)
    
    const data = matter(content.default)
    //console.log(data)
    return { ...data }
}
