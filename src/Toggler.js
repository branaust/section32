import React from 'react'
import useToggle from './hooks/useToggle'

function Toggler() {
    const [isTomato, toggleIsTomato] = useToggle(true)
    const [isGreen, toggleIsGreen] = useToggle(true)
    const [isSunny, toggleIsSunny] = useToggle(false)
    return (
        <div>
            <h1 onClick={toggleIsTomato}>{isTomato ? "🍅" : "🥨"}</h1>
            <h1 onClick={toggleIsGreen}>{isGreen ? "🥦" : "🔥"}</h1>
            <h1 onClick={toggleIsSunny}>{isSunny ? "☀️" : "🌚"}</h1>
        </div>
    )
}



export default Toggler