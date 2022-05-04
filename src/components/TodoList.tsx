import React, { ReactNode } from 'react'
import { TodoContextType } from '../@types/TodoContextType'
import { TodoContext } from '../context/TodoContext'
import TodoItem from './TodoItem'
export default function TodoList() {
    const { todos, searchText } = React.useContext(TodoContext) as TodoContextType
    const filteredTodos = searchText && searchText.length ?
        todos.filter(t => t.text.toLocaleLowerCase().replace(/\s/g, '').includes(searchText.toLowerCase())) :
        todos
    return (
        <section>
            <ul>
                {
                    filteredTodos.map(t => (
                        <TodoItem key={t.id} todoItem={t} />
                    ))
                }
            </ul>
        </section>
    )
}