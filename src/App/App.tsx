import React from 'react'
import { TodoProvider } from '../context/TodoContext'
import TodoHeader from '../components/TodoHeader'
import TodoCounter from '../components/TodoCounter'
import TodoSearch from '../components/TodoSearch'
import TodoList from '../components/TodoList'
import CreateTodoButton from '../components/CreateTodoButton'
export default function App() {
    return (
        <TodoProvider>
            <TodoHeader />
            <TodoCounter />
            <TodoSearch />
            <TodoList/>
            <CreateTodoButton />
        </TodoProvider>
    )
}
