import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import TodoSearch from './TodoSearch'
import './TodoHeader.css'
import TodoCounter from './TodoCounter'
export default function TodoHeader() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography 
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                    className='Item-AppName'
                >TASKY</Typography>
                <TodoSearch/>
                <TodoCounter />
            </Toolbar>
        </AppBar >
    )
}