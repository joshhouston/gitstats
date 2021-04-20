import React, {useState} from 'react';


function Charts({repos}) {

    console.log(repos)
    return (
        <div>
            {repos.map((repo, index) => (

                <div key={index}>
                    {repo.name}
                </div>
            ))}
        </div>
    )
}

export default Charts;