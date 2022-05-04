import { Guid } from 'guid-typescript'
import React from 'react'
import { DefaultDeserializer } from 'v8'
import { Todo } from '../Types/TodoTypes'
import AppUI from './AppUI'
const appName = 'TODOAPP_V1'


function useLocalStorage<Type>(appName: string, initialValue: Type): {
    item: Type,
    saveData: (v: Type) => void,
    loading: boolean,
    error: string

} {
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState('')
    const [item, setItem] = React.useState<Type>(initialValue)
    const saveData = (value: Type) => {
        try {
            localStorage.setItem(appName, JSON.stringify(value))
            setItem(value)
            throw('Shit Happened!!')
        }
        catch(error) {
            setError(error as string)
        }
    }
    const readData = (value: Type): Type => {
        try {
            const dataText = localStorage.getItem(appName) as string ?? ''
            if (dataText && dataText.length > 0) {
                value = JSON.parse(dataText) as Type
            }
            setItem(value)
            throw('Shet reading!')
        }
        catch(error) {
            setError(error as string)
        }
        return value
    }
    React.useEffect(() => {
        setTimeout(() => {
            readData(initialValue)
            setLoading(false)
        }, 1000)
    })
    return { item, saveData, loading, error }
}

export default function App() {
    const
        {
            item: todos,
            saveData: saveTodos,
            loading,
            error
        } = useLocalStorage<Array<Todo>>(appName, [])
    const completeTodo = (id: string) => {
        const idx = todos.findIndex(t => t.id == id)
        if (!todos[idx].completed) {
            todos[idx].completed = true
            saveTodos([...todos])
        }
    }

    const deleteTodo = (id: string) => {
        const idx = todos.findIndex(t => t.id == id)
        todos.splice(idx, 1)
        saveTodos([...todos])
    }

    const createTodo = (item: Todo) => {
        todos.push(item)
        saveTodos([...todos])
    }

    return (
        <AppUI
            loading={loading}
            error={error}
            todoValues={todos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            createTodo={createTodo}
        />
    )
}
