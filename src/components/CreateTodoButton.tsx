import React from 'react'
import './CreateTodoButton.css'
import { TodoContext } from '../context/TodoContext'
import { TodoContextType } from '../@types/TodoContextType'
import { Box, IconButton } from '@mui/material'
import Add from '@mui/icons-material/Add'

export default function CreateTodoButton(): JSX.Element {
    const { setOpenModal } = React.useContext(TodoContext) as TodoContextType
    return (
        <Box className="CreateTodoButton">
            <IconButton  aria-label="create todo item" onClick={() => setOpenModal(true)}>
                <Add />
            </IconButton>
        </Box>

    )
}