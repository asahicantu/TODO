import React, { ReactElement, ReactNode } from 'react'
import { TodoContextType } from '../@types/TodoContextType'
import { Todo } from '../@types/TodoTypes'
import useLocalStorage from '../hooks/UseLocalStorage'

const TodoContext = React.createContext<TodoContextType | null>(null)
function TodoProvider(props: { children: ReactNode }): ReactElement {
    const [searchText, setSearchText] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)
    const appName = 'TODO_APP'
    const
        {
            item: todos,
            saveData: saveTodos,
            loading,
            error
        } = useLocalStorage<Array<Todo>>(appName, [])

    const completeTodo = (id: string,completed:boolean) => {
        const idx = todos.findIndex(t => t.id == id)
        todos[idx].completed = completed
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

    const oncreateItem = () => {
        setOpenModal(true)
        return
        // const text = prompt('Todo text:')?.toString()
        // createTodo(new Todo{})
    }

    return (
        <TodoContext.Provider value={
            {
                appName,
                todos,
                loading,
                error,
                saveTodos,
                completeTodo,
                deleteTodo,
                createTodo,
                searchText,
                setSearchText,
                openModal,
                setOpenModal,
                oncreateItem
            }}>
            {props.children}
        </TodoContext.Provider>

    )
}

export { TodoProvider, TodoContext }