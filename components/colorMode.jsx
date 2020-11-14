import React, {useState} from 'react'
import styles from '../styles/colortoggle.module.css'

const colorMode = () => {
    const [Color, setColor] = useState("Light")

    return (
        <button onClick={Color === "Light" ? setColor("Dark") : setColor("Light")} className={styles.button}>
                {Color}
        </button>
    )
}

export default colorMode