import styles from '../styles/post.module.css'

const Post = (props) => {
	return (
		<div className={styles.con}>
		{props.children}
		</div>
	)
}

export default Post
