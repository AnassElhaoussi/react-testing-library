import {useState, useEffect} from 'react'

export const useLocalStorage = (defaultValue ,key) => {
    const [value, setValue] = useState(() => {
        const savedTodos = window.localStorage.getItem(key)

        return savedTodos !== null
        ? JSON.parse(savedTodos)
        : defaultValue
    })

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}