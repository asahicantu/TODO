import React, { Fragment, Dispatch, SetStateAction } from 'react'
import './App.css'
import { Todo } from '../Types/TodoTypes'
import TodoHeader from '../TodoHeader'
import TodoCounter from '../TodoCounter'
import TodoSearch from '../TodoSearch'
import TodoList from '../TodoList'
import TodoItem from '../TodoItem'
import CreateTodoButton from '../CreateTodoButton'

export default function AppUI(props: {
    todoValues: Array<Todo>,
    completeTodo: (id: string) => void,
    deleteTodo: (id: string) => void,
    createTodo: (item: Todo) => void,
}) {
    const [searchText, setSearchText] = React.useState('')
    const searchTodo = (text: string | undefined): Array<Todo> => {
        if (text && text.length > 0) {
            text = text.toLocaleLowerCase().replace(/\s/g, '')
            const filteredTodos = props.todoValues.filter(t => t.text.toLocaleLowerCase().replace(/\s/g, '').includes(text ?? ''.toLowerCase()))
            return filteredTodos
        }
        else {
            return props.todoValues
        }
    }
    return (
        <Fragment>
            <TodoHeader />
            <TodoCounter
                completed={props.todoValues.filter(t => t.completed).length}
                count={props.todoValues.length} />
            <TodoSearch searchText={searchText} setSearchText={setSearchText} />
            <TodoList>
                {searchTodo(searchText).map(t => (
                    <TodoItem key={t.id.toString()}
                        todoItem={t}
                        onCompleteTodo={props.completeTodo}
                        onDeleteTodo={props.deleteTodo}
                    />
                ))}
            </TodoList>
            <CreateTodoButton onCreateTodo={props.createTodo} />
        </Fragment>
    )
}