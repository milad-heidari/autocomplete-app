import React from 'react'
function Form({children,onSubmit,className}) {
    return (
        <form className={className} onSubmit={onSubmit}>
            {children}
        </form>
    )
}

export default Form
