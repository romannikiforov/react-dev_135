import { useState, useRef } from 'react'
import TaskFilter from '@/todo/TaskFilter'
import Task from '@/todo/Task'
import { useOutside } from '@/hooks/useOutside'

import { TaskItemType } from '@/types'


type TasksListProps = {
    tasks: TaskItemType[],
    toggleTask: (id: string) => void,
    removeTask: (id: string) => Promise<void>,
    updateTask: (id: string, title: string) => Promise<void>
}

function filterTasks(tasks: TaskItemType[], selectFilter: number, textFilter: string) {

    if (textFilter) {
        tasks = tasks.filter(t => t.title.toLowerCase().includes(textFilter.toLowerCase()))
    }
    if (selectFilter === 2) {
        tasks = tasks.filter(t => t.done)
    }
    if (selectFilter === 3) {
        tasks = tasks.filter(t => !t.done)
    }

    return tasks;
}


const TasksList = ({ tasks, toggleTask, removeTask, updateTask }: TasksListProps) => {
    const [selectFilter, setSelectFilter] = useState(0);
    const [textFilter, setTextFilter] = useState('');
    const [isUpdated, setIsUpdated] = useState<string | null>(null)

    const ref = useRef<HTMLUListElement>(null)
    useOutside(ref, () => setIsUpdated(null))

    const handleIsUpdated = (id: string | null) => setIsUpdated(x => x === id ? null : id)

    const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        setSelectFilter(+e.target.value)
    }

    const handleTextChange = (val: string) => setTextFilter(val)

    const filteredTasks = filterTasks(tasks, selectFilter, textFilter)

    return (
        <>
            <TaskFilter handleSelectChange={handleSelectChange} handleTextChange={handleTextChange} />
            <ul ref={ref} className="mb-5">
                {filteredTasks.map(task => <Task key={task.id} task={task}
                    toggleTask={toggleTask}
                    removeTask={removeTask}
                    updateTask={updateTask}
                    handleIsUpdated={handleIsUpdated}
                    isUpdating={isUpdated === task.id}
                />)}

            </ul>
        </>
    )
}

export default TasksList