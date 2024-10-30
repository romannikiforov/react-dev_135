import { FaTrash, FaCheck, FaSave } from "react-icons/fa";
import { TaskItemType } from '@/types'

type TaskProps = {
    task: TaskItemType
}

const Task = ({ task }: TaskProps) => {

    let spanCls = "";
    if (task.done) {
        spanCls += "text-red-800 line-through"
    }

    return (

        <li className="item-list">
            <span className={spanCls}> {task.title}</span>
            <div className="ml-auto flex">
                <div className="mr-4">
                    <FaCheck style={{ color: task.done ? "orange" : "green" }} className="cursor-pointer" />
                </div>
                <div>
                    <FaTrash className="cursor-pointer" />
                </div>
            </div>
        </li>
    )
}

export default Task