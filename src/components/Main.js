import React, { useState, useEffect } from 'react';

function Main() {

    const [userState, setUserState] = useState(undefined)
    const [name, setName] = useState("")

    useEffect(() => {
        setUserState({ user: user })
        console.log(userState)
    }, [])

    let user;

    const handleUser = event => {
        event.preventDefault();
        alert(`Submitting Name ${name}`)
    };
    console.log(handleUser)
    return (
        <div>
            <h3>search user</h3>
            <form onSubmit={handleUser}>
                <input
                    type='text'
                    value={name}
                    onChange={e =>setName(e.target.value)}
                    ></input>
            </form>
        </div>
    )
}

export default Main;