import React from 'react'
import styles from '../styles/prepostcard.module.css'

const PostTitle = (props) => {
	return (
		<div className={styles.card}>
		  <h2 className={styles.title}>
		    {props.title}
		  </h2>

		  <span className={styles.about}>
		    <span className={styles.him}>
		     <img src="/josias-logo.png" className={styles.profile} alt="profile" />
		   </span>
		     <h4>{props.date} </h4>
		  </span>
		</div>
	)
}

export default PostTitle
