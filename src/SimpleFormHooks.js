import React from 'react'
import useFormState from './hooks/useFormState'

function SimpleFormHooks() {

    const [email, updateEmail, resetEmail] = useFormState("")

    return (
        <div>
            <h1>The Value is...{email}</h1>
            <input type='text' value={email} onChange={updateEmail} />
            <button onClick={resetEmail}>Submit</button>
        </div>
    )
}

export default SimpleFormHooks  