import React from 'react'
import { Todo } from '../Types/TodoTypes'
import './TodoItem.css'
export default function TodoItem(props: {
    todoItem: Todo,
    onCompleteTodo: (id: string) => void,
    onDeleteTodo: (id: string) => void
}) {
    return (
        <li className={`TodoItem ${props.todoItem.completed && 'TodoItem--complete'}`}>
            <button
                className={`Icon Icon-check ${!props.todoItem.completed && 'Icon-check--active'}`}
                onClick={() => props.onCompleteTodo(props.todoItem.id)}
            >√</button>
            <p className={`TodoItem-p ${props.todoItem.completed && 'TodoItem-p--complete'}`}>
                {props.todoItem.text + props.todoItem.id}
            </p>
            <button
                className='Icon Icon-delete'
                onClick={() => props.onDeleteTodo(props.todoItem.id)}
            >x</button>
        </li>
    )
}