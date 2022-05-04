import React from 'react'
import { Todo } from '../@types/TodoTypes'
import { TodoContextType } from '../@types/TodoContextType'
import { TodoContext } from '../context/TodoContext'
import './TodoItem.css'

export default function TodoItem(props: { todoItem: Todo }) {
    const { completeTodo, deleteTodo } = React.useContext(TodoContext) as TodoContextType
    return (
        <li className={`TodoItem ${props.todoItem.completed && 'TodoItem--complete'}`}>
            <button
                className={`Icon Icon-check ${!props.todoItem.completed && 'Icon-check--active'}`}
                onClick={() => completeTodo(props.todoItem.id)}
            >√</button>
            <p className={`TodoItem-p ${props.todoItem.completed && 'TodoItem-p--complete'}`}>
                {props.todoItem.text}
            </p>
            <button
                className='Icon Icon-delete'
                onClick={() => deleteTodo(props.todoItem.id)}
            >x</button>
        </li>
    )
}