import React, { Fragment, ReactElement, Dispatch, SetStateAction } from 'react'
import { Input } from '@mui/material'
import './TodoSearch.css'
export default function TodoSearch (props:{
    searchText:string, setSearchText:Dispatch<SetStateAction<string>>
}):ReactElement{
    return (
        <Fragment>
            <Input
                value={props.searchText}
                className='TodoSearch' 
                placeholder="Search an item here"
                onChange={(e) => props.setSearchText(e.target.value)}
            />
        </Fragment>

    )
}  
