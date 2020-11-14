import React from 'react'
import PostCard from '../components/postCard'
import styles from '../styles/posts.module.css'
const Posts = () => {
    return (
    <>
    		<h1 className={styles.name}> JA </h1>
        <h2>
            Welcome to the posts page
        </h2>

        <div>
            <PostCard postName="Hello World in Brainf****" />
        </div>
			 <div className={styles.footer}>
			<a href="https://github.com/JosiasAurel"><img src="/github.png" alt="github" className={styles.social} /></a>		 
			<a href="mailto:%20ndjosiasaurel@gmail.com"><img src="/gmail.png" alt="github" className={styles.social} /></a>		 
			<a href="https://twitter.com/JosiasWing?s=09"><img src="/twitter.png" alt="github" className={styles.social} /></a>		 
			<a href="https://josiasaurel.itch.io/"><img src="/itchio.png" alt="github" className={styles.social} /></a>		 
			</div>

			<h2 className={styles.c}> © 2020 Josias Aurel </h2>
    </>)
}

export default Posts