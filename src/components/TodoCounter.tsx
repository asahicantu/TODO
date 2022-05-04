import React, { ReactElement } from 'react'
import './TodoCounter.css'
import {TodoContext} from '../context/TodoContext'
import { TodoContextType } from '../@types/TodoContextType'

export default function TodoCounter():ReactElement {
    const { todos } = React.useContext(TodoContext) as TodoContextType
    const completedTodos :number = todos.filter(t=>t.completed??false).length

    return (
        <h2 className='TodoCounter'>
            You have completed {completedTodos} of {todos.length} todos
        </h2>
    )
}
