import React, { useEffect } from 'react'

export default function TodosCounter({leftTodos}){
    return <p
    > {leftTodos.current || "No todos left"}
    </p>
}