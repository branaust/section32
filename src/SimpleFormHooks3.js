import React from 'react'
import useFormState from './hooks/useFormState'

function SimpleFormHooks3() {

    const [color, updateColor, resetColor] = useFormState()

    return (
        <div>
            <h1>Your Color is: {color}</h1>
            <input type='text' value={color} onChange={updateColor} />
            <button onClick={resetColor}>Reset</button>
        </div>
    )
}

export default SimpleFormHooks3