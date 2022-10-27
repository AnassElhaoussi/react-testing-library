import React from 'react'
import { useState, useEffect } from 'react'
import { Avatar } from '@chakra-ui/react';

const url = 'https://randomuser.me/api/?results=8'

const generateFullName = (name) => {
    const {title, first, last} = name
    return `${title} ${first} ${last}`
}

const Followers = () => {
    const [randomFollowers, setRandomFollowers] = useState([])
    const fetchFollowers = () => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setRandomFollowers(data.results)
            console.log(data.results)
        })
    }
    useEffect(() => {
        fetchFollowers()
    }, [])

    return (
        <div className='followers-container'>
            <div className='followers'>
                {randomFollowers.map(({name, picture}) => {
                    return (
                        <div className='follower'>
                            <Avatar src={picture.medium} />
                            <p>{generateFullName(name)} </p>
                        </div>
                    )
                })}
            </div>
            <div className='followers__buttons'>
                <button 
                onClick={() => window.location.href = '/'}
                >
                Go back</button>
                <button
                onClick={fetchFollowers}
                >Get another list</button>
            </div>
        </div>
    )
}

export default Followers