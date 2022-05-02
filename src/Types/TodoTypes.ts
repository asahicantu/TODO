import { Guid } from 'guid-typescript'
type Todo = {
    id:string,
    text: string,
    dueDate?: Date,
    completed?: boolean
}


export type { Todo }    