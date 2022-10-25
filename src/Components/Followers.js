import React from 'react'
import { useState, useEffect } from 'react'

const Followers = ({setFollowersShown}) => {
    return (
        <div className='followers'>
            <h1 onClick={() => setFollowersShown(false)}>back to home</h1>
        </div>
    )
}

export default Followers