import { Guid } from 'guid-typescript'
import React from 'react'
import { DefaultDeserializer } from 'v8'
import { Todo } from '../Types/TodoTypes'
import AppUI from './AppUI'
const appName = 'TODOAPP_V1'


function useLocalStorage<Type>(appName: string, intialValue: Type): [Type, (v: Type) => void] {
    const readData= (initialValue:Type):Type=>{
        const dataText = localStorage.getItem(appName) as string ?? ''
        if (dataText && dataText.length > 0) {
            const data = JSON.parse(dataText) as Type
            return data
        }
        return initialValue
    }
    intialValue = readData(intialValue)
    const [item, setItem] = React.useState<Type>(intialValue)

    const saveData = (value: Type) => {
        localStorage.setItem(appName, JSON.stringify(value))
        setItem(value)
    }
    return [item, saveData]
}

export default function App() {
    const [todos, saveTodos] = useLocalStorage<Array<Todo>>(appName, [])
    const completeTodo = (id: string) => {
        const idx = todos.findIndex(t => t.id == id)
        todos[idx].completed = true
        saveTodos([...todos])
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
            todoValues={todos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            createTodo={createTodo}
        />
    )
}
