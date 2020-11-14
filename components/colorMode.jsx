import React, {useState} from 'react'
import styles from "../styles/colortoggle.module.css"

const ColorMode = () => {
    const [color, setColor] = useState("Light");

    function toggleColor() {
        if (color === "Light") {
            setColor("Dark")
        } else {
            setColor("Light")
        }
    }
    return (
        <button onClick={() => toggleColor()} className={styles.button}>
            {color}
        </button>
    )
}

export default ColorMode