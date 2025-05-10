export type TasksList = {
    id:number,
    tasks:string,
    desc: string,
    status:boolean
}

export type TaskProps = {
    tasks: Array<TasksList>,
    handleComplete: Function,
    handleDelete: Function
}