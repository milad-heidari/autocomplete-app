import React from 'react'
function Div({children,className}) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Div