import matter from 'gray-matter'
import React, {useState} from 'react'
import CodeBlock from '../../components/mdHandler'
import ReactMarkdown from 'react-markdown'
import PostTitle from '../../components/postTitle'
import styles from '../../styles/postPage.module.css'
import Link from 'next/link'
import Post from '../../components/post'
import ColorMode from '../../components/ColorMode'

export default function PostTemplate({content, data}) {

    const frontmatter = data // Make frontmatter the data

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
