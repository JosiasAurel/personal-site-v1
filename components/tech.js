import styles from '../styles/tech.module.css'

const Tech = (props) => {
	return (
		<div>
		<h2 className={styles.show}>
		{props.title}
		</h2>
		<div className={styles.techs}>
          <img className={styles.tech} src="/dev/html.png" alt="html" />
          <img className={styles.tech} src="/dev/js.png" alt="js" />
          <img className={styles.tech} src="/dev/css.png" alt="css" />
          <img className={styles.tech} src="/dev/python.png" alt="python" />
          <img className={styles.tech} src="/dev/next.png" alt="next" />
          <img className={styles.tech} src="/dev/node.png" alt="node" />
          <img className={styles.tech} src="/dev/django.png" alt="django" />
          <img className={styles.tech} src="/dev/react.png" alt="react" />
          <img className={styles.tech} src="/dev/flask.png" alt="flask" />
		</div>
		</div>
	)
}

export default Tech
