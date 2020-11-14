import React, {useState} from 'react'

const colorMode = () => {
    const [color, setColor] = useState("Light")

    return (
        <button onClick={color === "Light" ? setColor("Dark") : setColor("Light")}>
                {color}
        </button>
    )
}