import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'

export default function TodosCounter({incompleteTodos}){
    return <div>
        <p
        > {incompleteTodos.current}
          {incompleteTodos.current === 1 ? " todo left" : " todos left"}
        </p>
        <Link to='followers'>
            <button>
                Go to followers
            </button>
        </Link>
    </div>
    
}