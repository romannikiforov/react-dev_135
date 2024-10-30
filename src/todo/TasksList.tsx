import TaskFilter from '@/todo/TaskFilter'
import Task from '@/todo/Task'
import { TasksType } from '@/types'



const TasksList = ({ tasks }: TasksType) => {
    return (
        <>
            <TaskFilter />
            <ul className="mb-5">
                {tasks.map(task => <Task key={task.id} task={task} />)}

            </ul>
        </>
    )
}

export default TasksList