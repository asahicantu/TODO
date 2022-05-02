import React from 'react'
import './CreateTodoButton.css'
import { Todo } from '../Types/TodoTypes'
import { Guid } from 'guid-typescript'
export default function CreateTodoButton(props: { onCreateTodo: (item: Todo) => void }): JSX.Element {
    const oncreateItem = () => {
        const text = prompt('Todo text:')?.toString()
        const todo: Todo = {
            id: Guid.create().toString(),
            text: text ?? '',
            dueDate: new Date(),
            completed: false
        }
        props.onCreateTodo(todo)
    }
    return (
        <button
            className='CreateTodoButton'
            onClick={() => oncreateItem()}
        >+</button>
    )
}