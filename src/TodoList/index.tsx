import React, {ReactNode } from 'react'

export default function TodoList(props:{children:Array<ReactNode>}) {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}