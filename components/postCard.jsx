import React from 'react'
import Link from "next/link"
import styles from '../styles/postcard.module.css'

const PostCard = ({postName, link}) => {
    return (
        <React.Fragment>
            <div className={styles.card}>
            <Link href={link}>
            <a><h2 className={styles.postname}>{postName}</h2></a>
            </Link>
            </div>
        </React.Fragment>
    )
}

export default PostCard