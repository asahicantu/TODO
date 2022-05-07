import React, { ReactElement } from 'react'
import './TodoCounter.css'
import Slider from '@mui/material/Slider'
import { TodoContext } from '../context/TodoContext'
import { TodoContextType } from '../@types/TodoContextType'
import { Box, Chip, Stack } from '@mui/material'

export default function TodoCounter(): ReactElement {
    const { todos } = React.useContext(TodoContext) as TodoContextType
    const todoCount = todos.length
    const completedTodos: number = todos.filter(t => t.completed ?? false).length
    return (
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <Box>
                <Chip label={`${completedTodos} of ${todoCount} completed `} />
            </Box>
        </Stack>
    )
}
