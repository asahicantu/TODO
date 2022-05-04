import React from 'react'
import './CreateTodoButton.css'
import { Todo } from '../@types/TodoTypes'
import { Guid } from 'guid-typescript'
import { TodoContext } from '../context/TodoContext'
import { TodoContextType } from '../@types/TodoContextType'

export default function CreateTodoButton(): JSX.Element {
    const { createTodo } = React.useContext(TodoContext) as TodoContextType
    const oncreateItem = () => {
        const text = prompt('Todo text:')?.toString()
        const todo: Todo = {
            id: Guid.create().toString(),
            text: text ?? '',
            dueDate: new Date(),
            completed: false
        }
        createTodo(todo)
    }
    return (
        <button
            className='CreateTodoButton'
            onClick={() => oncreateItem()}
        >+</button>
    )
}