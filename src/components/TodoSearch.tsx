import React, {  ReactElement } from 'react'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { TodoContext } from '../context/TodoContext'
import { TodoContextType } from '../@types/TodoContextType'
import { IconButton } from '@mui/material'

export default function TodoSearch(): ReactElement {
    const {setSearchText} = React.useContext(TodoContext) as TodoContextType
    return (
        <div>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search a task..."
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => {setSearchText(e.target.value)}}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </div>
    )
}  
