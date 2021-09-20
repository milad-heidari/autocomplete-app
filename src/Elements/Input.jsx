import React from 'react'

function Input({className,type,id,placeholder}) {
    return (
        <input
            className={className}
            type={type}
            id={id}
            placeholder={placeholder}
        />
    )
}
export default Input
