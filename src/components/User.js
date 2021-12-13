import React from 'react'

const User = (props) => {
    return (
        <div>
            <h1>User Component</h1>
            <h1>{props.name.name}</h1>
        </div>
    )
}

export default User
