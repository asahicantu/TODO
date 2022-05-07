import React, { Component } from 'react'
import { Todo } from '../@types/TodoTypes'
import { TodoContextType } from '../@types/TodoContextType'
import moment from 'moment'
import { TodoContext } from '../context/TodoContext'
import './TodoItem.css'

import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Checkbox, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'


export default function TodoItem(props: { todoItem: Todo }) {
    const { completeTodo, deleteTodo } = React.useContext(TodoContext) as TodoContextType
    return (
        <ListItem>
            <ListItemButton
                role={undefined}
                dense
                onClick={() => { completeTodo(props.todoItem.id, !props.todoItem.completed) }}
            >
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={props.todoItem.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': props.todoItem.text }}
                    />
                </ListItemIcon>
                <ListItemText primary={
                    <Typography className={`TodoItem-text ${props.todoItem.completed && 'TodoItem-text--complete'}`}>
                        {`${props.todoItem.text} ${props.todoItem.dueDate && moment(props.todoItem.dueDate).format('dd.MM.yyyy')}`}
                    </Typography>
                }
                />
                <ListItemIcon>
                    <IconButton aria-label="delete" size="large" color="error" onClick={() => deleteTodo(props.todoItem.id)}>
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                </ListItemIcon>
            </ListItemButton>
        </ListItem >
    )
}