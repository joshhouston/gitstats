import React, { useState, useEffect } from 'react';
import Github from 'github-api';


const gh = new Github({
  username: process.env.REACT_APP_USERNAME,
  password: process.env.REACT_APP_PASSWORD
});

function User({username}) {
    const [isLoading, setLoading] = useState(true)
    const [repo, setRepo] = useState([])
    
    let user = gh.getUser(`${username}`)
    
    useEffect( () => {

        async function fetchData() {
            const result = await user.listStarredRepos()
            setRepo([...result.data])
            setLoading(false)
            
        }

        fetchData();
       
      
  }, [user])

    
    return (
        <div>
            { isLoading ? (
                <div>
                    loading
                </div>

            )
             : (
                <div>
                    {repo.map((repos, id) => {
                        return (
                            <div key={id}>
                                <p>{repos.name}</p> 
                            </div>
                        )
                    }) }
                </div>
             )
            }
        </div>
    )
}

export default User;