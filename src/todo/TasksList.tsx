import TaskFilter from '@/todo/TaskFilter'
import Task from '@/todo/Task'

const TasksList = () => {
    return (
        <>
            <TaskFilter />
            <ul className="mb-5">
                <Task />
                <Task />
                <Task />

            </ul>
        </>
    )
}

export default TasksList