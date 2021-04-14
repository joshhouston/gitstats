import React, { useState } from 'react';
import { useHistory } from 'react-router';

function Main({setUsername}) {

    const [name, setName] = useState("")

    let history = useHistory();
    
    const handleUser = event => {
        event.preventDefault();
        setUsername(name)
        history.push("/user")
    };
    
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