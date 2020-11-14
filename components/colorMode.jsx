import React from 'react'
import styles from "../styles/colortoggle.module.css"

const ColorMode = ({value, onClick}) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {value}
        </button>
    )
}

export default ColorMode