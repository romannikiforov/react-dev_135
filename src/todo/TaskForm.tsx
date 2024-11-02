import { useRef } from 'react'
import { toast } from 'react-toastify'
import { v4 } from 'uuid'
import { TaskItemType } from '@/types'

type TaskFormProps = {
    addTask: (task: TaskItemType) => Promise<void>
}

const TaskForm = ({ addTask }: TaskFormProps) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        const inputEl = inputRef.current;

        if (!inputEl?.value.trim()) {
            toast.warn("Input tasks's title is empty")
            return;
        }
        const task = { id: v4(), title: inputEl.value, done: false }
        addTask(task).then(() => {
            toast.success('Task has been added successfully')
            inputEl.value = '';
        })

    }


    return (
        <>
            <p className="title-red">Add task</p>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="mb-3 flex">
                    <input
                        ref={inputRef}
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Add task"
                        className="form-control-add"
                    />
                    <button type="submit" className="btn">
                        Add Task
                    </button>
                </div>
            </form>
        </>
    )
}

export default TaskForm