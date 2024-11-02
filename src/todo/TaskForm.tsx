import { useRef } from 'react'
import { v4 } from 'uuid'
import { TaskItemType } from '@/types'

type TaskFormProps = {
    addTask: (task: TaskItemType) => void
}

const TaskForm = ({ addTask }: TaskFormProps) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const inputEl = inputRef.current;

        if (!inputEl?.value) {
            alert("Enter task");
            return;
        }
        const task = { id: v4(), title: inputEl.value, done: false }
        addTask(task)
        inputEl.value = '';

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