import matter from 'gray-matter'
import React from 'react'
import CodeBlock from '../../components/mdHandler'
import ReactMarkdown from 'react-markdown'
import PostTitle from '../../components/postTitle'
import styles from '../../styles/postPage.module.css'
import Link from 'next/link'

export default function PostTemplate({content, data}) {
    const frontmatter = data
    return (
         <div>
         <div className={styles.header}>
         <Link href="/">
         <a className={styles.home}>JA</a>
         </Link>
         <h3 className={styles.item}> Hi </h3>
         </div>
         <PostTitle 
              title={frontmatter.title}
              date="@JosiasWing"
          />
         <ReactMarkdown
            source={content}
            renderers={{code: CodeBlock}}
          />
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
