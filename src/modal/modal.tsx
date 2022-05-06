import { Box, TextField } from '@mui/material'
import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import { TodoContextType } from '../@types/TodoContextType'
import { TodoContext } from '../context/TodoContext'
import './modal.css'

export default function Modal(): React.ReactPortal {
    const { openModal } = React.useContext(TodoContext) as TodoContextType
    return ReactDOM.createPortal(
        openModal &&
        <Box className ='modal-Background'
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField label="Task Name" variant="standard" color="primary" />
            </div>
        </Box>,
        document.getElementById('modal') as HTMLElement
    )
}