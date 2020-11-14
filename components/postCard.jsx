import React from 'react'
import styles from '../styles/postcard.module.css'

const PostCard = ({postName}) => {
    return (
        <React.Fragment>
            <div className={styles.card}>
            <h2 className={styles.postname}>{postName}</h2>
            </div>
        </React.Fragment>
    )
}

export default PostCard