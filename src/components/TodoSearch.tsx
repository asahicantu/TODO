import React, { Fragment, ReactElement, Dispatch, SetStateAction } from 'react'
import { Input } from '@mui/material'
import './TodoSearch.css'
import { TodoContext } from '../context/TodoContext'
import { TodoContextType } from '../@types/TodoContextType'
export default function TodoSearch(): ReactElement {
    const {setSearchText} = React.useContext(TodoContext) as TodoContextType
    return (
        <Fragment>
            <Input
                className='TodoSearch'
                placeholder="Search an item here"
                onChange={(e) => setSearchText(e.target.value)}
            />
        </Fragment>

    )
}  
