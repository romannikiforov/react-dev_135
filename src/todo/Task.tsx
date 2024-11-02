import { toast } from 'react-toastify'
import { FaTrash, FaCheck, FaSave } from "react-icons/fa";
import { TaskItemType } from '@/types'

type TaskProps = {
    task: TaskItemType,
    toggleTask: (id: string) => void,
    removeTask: (id: string) => Promise<void>,
}

const Task = ({ task, toggleTask, removeTask }: TaskProps) => {

    let spanCls = "";
    if (task.done) {
        spanCls += "text-red-800 line-through"
    }

    const removeTaskHandle = () => {
        removeTask(task.id).then(() => toast.success("Task has been removed"))
    }

    return (

        <li className="item-list">
            <span className={spanCls}> {task.title}</span>
            <div className="ml-auto flex">
                <div onClick={() => toggleTask(task.id)} className="mr-4">
                    <FaCheck style={{ color: task.done ? "orange" : "green" }} className="cursor-pointer" />
                </div>
                <div onClick={removeTaskHandle}>
                    <FaTrash className="cursor-pointer" />
                </div>
            </div>
        </li>
    )
}

export default Task