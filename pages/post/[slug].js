import matter from 'gray-matter'
import React from 'react'
import CodeBlock from '../../components/mdHandler'
import ReactMarkdown from 'react-markdown'
import PostTitle from '../../components/postTitle'
import styles from '../../styles/postPage.module.css'
import Link from 'next/link'
import Post from '../../components/post'

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

          <Post>
         <ReactMarkdown
            source={content}
            renderers={{code: CodeBlock}}
          />

          </Post>

	 <div className={styles.footer}>
			<a href="https://github.com/JosiasAurel"><img src="/github.png" alt="github" className={styles.social} /></a>		 
			<a href="mailto:%20ndjosiasaurel@gmail.com"><img src="/gmail.png" alt="github" className={styles.social} /></a>		 
			<a href="https://twitter.com/JosiasWing?s=09"><img src="/twitter.png" alt="github" className={styles.social} /></a>		 
			<a href="https://josiasaurel.itch.io/"><img src="/itchio.png" alt="github" className={styles.social} /></a>		 
			</div>

          <h2 className={styles.c}> © 2020 Josias Aurel </h2>
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
