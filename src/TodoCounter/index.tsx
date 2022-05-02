import React, { ReactElement } from 'react'
import './TodoCounter.css'

export default function TodoCounter(props:{completed:number, count:number}):ReactElement {
    return (
        <h2 className='TodoCounter'>
            You have completed {props.completed} of {props.count} todos
        </h2>
    )
}
