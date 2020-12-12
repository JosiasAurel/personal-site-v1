import matter from 'gray-matter'
import CodeBlock from "../../components/CodeBlock"
import { Code } from "@chakra-ui/react"
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import styles from "../../styles/post.module.css"


export default function PostTemplate({content, data}) {

    const frontmatter = data // Make frontmatter the data
	

    return (
         <div>
         
         
        <div>
	        <h2>{frontmatter.title}</h2>
		 </div>
              
         
        <div>
            <ReactMarkdown
                source={content}
                renderers={{code: CodeBlock}} />
       
         </div>

        

	 

          <h2 > © 2020 Josias Aurel </h2>
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
