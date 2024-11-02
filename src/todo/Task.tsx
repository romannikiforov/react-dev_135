import { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify'
import { FaTrash, FaCheck, FaSave } from "react-icons/fa";
import { TaskItemType } from '@/types'

type TaskProps = {
    task: TaskItemType,
    toggleTask: (id: string) => void,
    removeTask: (id: string) => Promise<void>,
    updateTask: (id: string, title: string) => Promise<void>,
    handleIsUpdated: (id: string | null) => void,
    isUpdating: boolean
}

const Task = ({ task, toggleTask, removeTask, updateTask, handleIsUpdated, isUpdating }: TaskProps) => {
    const [updateVal, setUpdateVal] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const currentRefValue = inputRef.current
        if (isUpdating && currentRefValue) {
            currentRefValue.focus();
        }
    }, [isUpdating])

    let spanCls = "";
    if (task.done) {
        spanCls += "text-red-800 line-through"
    }

    const removeTaskHandle = () => {
        removeTask(task.id).then(() => toast.success("Task has been removed"))
    }

    const handleTaskUpdating = () => {
        handleIsUpdated(task.id)
        setUpdateVal(task.title)
    }
    const handleUpdateVal: React.ChangeEventHandler<HTMLInputElement> = e => setUpdateVal(e.target.value)

    const handleSaveUpdate = () => {
        updateTask(task.id, updateVal)
        handleIsUpdated(null)

    }

    const handleEnterSave: React.KeyboardEventHandler<HTMLInputElement> = e => {
        if (e.key === "Enter") {
            handleSaveUpdate()
        }
    }
    return (

        <li className="item-list">
            <span onDoubleClick={handleTaskUpdating}
                className={spanCls}>
                {isUpdating ? <input ref={inputRef} value={updateVal}
                    onChange={handleUpdateVal}
                    onKeyDown={handleEnterSave}
                    className="custom-input" /> : task.title}
            </span>


            <div className="ml-auto flex">
                <div onClick={handleSaveUpdate} className='mr-3'>
                    <FaSave />
                </div>
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