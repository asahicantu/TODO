import React from 'react'
import './CreateTodoButton.css'
import { TodoContext } from '../context/TodoContext'
import { TodoContextType } from '../@types/TodoContextType'

export default function CreateTodoButton(): JSX.Element {
    const { setOpenModal } = React.useContext(TodoContext) as TodoContextType
    return (
        <button
            className='CreateTodoButton'
            onClick={() => setOpenModal(true)}
        >+</button>
    )
}