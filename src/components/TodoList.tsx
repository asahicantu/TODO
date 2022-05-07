import React, { ReactNode } from 'react'
import { TodoContextType } from '../@types/TodoContextType'
import { TodoContext } from '../context/TodoContext'
import TodoItem from './TodoItem'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
export default function TodoList() {
    const { todos, searchText } = React.useContext(TodoContext) as TodoContextType
    const filteredTodos = searchText && searchText.length ?
        todos.filter(t => t.text.toLocaleLowerCase().replace(/\s/g, '').includes(searchText.toLowerCase())) :
        todos
    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
                <List>
                    {
                        filteredTodos.map(t => (
                            <TodoItem key={t.id} todoItem={t} />
                        ))
                    }
                </List>
            </nav>
        </Box>
    )
}