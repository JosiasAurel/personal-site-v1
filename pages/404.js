import styles from '../styles/error404.module.css'

export default function Error404() {
	return (
		<div className={styles.div}>
		<img
		className={styles.img} src="/error-404-glitch.png" alt="Error 404" />
		</div>
	)
}
