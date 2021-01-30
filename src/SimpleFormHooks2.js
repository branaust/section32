import React from 'react'
import useFormState from './hooks/useFormState'

function SimpleFormHooks2() {

    const [name, updateName, resetName] = useFormState('')

    return (
        <div>
            <h1>Your Name is: {name}</h1>
            <input type='text' value={name} onChange={updateName} />
            <button onClick={resetName}>RESET</button>
        </div>
    )
}

export default SimpleFormHooks2
