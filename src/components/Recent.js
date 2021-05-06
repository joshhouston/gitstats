import React from 'react';

function Recent({repos}) {

    const sliced = repos.slice(0, 9)
    return (
        <div>
            {sliced.map((repo, index) => (
                <div key={index}>
                    <h1>{repo.name}</h1>
                    <p>{repo.description}</p>
                    <p>{repo.language}</p>
                    <p>{repo.size}KB</p>
                </div>
            ))}
        </div>
    )
}

export default Recent;