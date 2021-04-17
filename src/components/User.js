import React, { useState, useEffect } from 'react';
import {format, parseISO} from 'date-fns';
import Github from 'github-api';


const gh = new Github();

function User({username}) {
    const [isLoading, setLoading] = useState(true)
    const [repo, setRepo] = useState([])
    const [profile, setProfile] = useState({})
    const [date, setDate] = useState('')
    
    let user = gh.getUser(`${username}`)
    
    
    useEffect( () => {
        async function fetchData() {
            const result = await user.listStarredRepos()
            setRepo([...result.data])
            
        }

        async function getProfile() {
            const result = await user.getProfile()
            
            let date = format(parseISO(result.data.created_at), "MMMM d, yyyy") 

            setDate(date)
            setProfile({...result.data})
            setLoading(false)
        }

        fetchData();
        getProfile();

        
      
  }, [])

    
    return (
        <div>
            { isLoading ? (
                <div>
                    loading
                </div>

            )
             : (
                <div>
                    <img src={profile.avatar_url} alt=""/>
                    <p>Joined {date} </p>
                </div>
             )
            }
        </div>
    )
}

export default User;