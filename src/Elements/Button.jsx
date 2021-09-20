import React from 'react'
function Button({type,className,title}) {
    return (
        <button type={type} className={className}>
            {title}
        </button>
    )
}
export default Button