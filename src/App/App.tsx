import React from 'react'
import { TodoProvider } from '../context/TodoContext'
import TodoHeader from '../components/TodoHeader'
import TodoCounter from '../components/TodoCounter'
import TodoSearch from '../components/TodoSearch'
import TodoList from '../components/TodoList'
import CreateTodoButton from '../components/CreateTodoButton'
import Modal from '../components/CreateTodoItemModal'
import { themeOptions } from '../theme'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/material'
import Loader from '../components/Loader'
//Date handling
export default function App() {
    const theme = createTheme(themeOptions)
    return (
        <ThemeProvider theme={theme}>
            <TodoProvider>
                <Box sx={{ flexGrow: 1 }}>
                    <Loader/>
                    <TodoHeader />
                    <TodoList/>
                    <Modal/>
                    <CreateTodoButton />
                </Box>
            </TodoProvider>
        </ThemeProvider>
    )
}
