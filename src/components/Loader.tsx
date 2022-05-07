import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { TodoContext } from '../context/TodoContext'
import { TodoContextType } from '../@types/TodoContextType'
import './loader.css'
export default function Loader() {
    const { loading } = React.useContext(TodoContext) as TodoContextType
    return (
        loading ?
            <Box className="loader" sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box> :
            <div/>
    )
}