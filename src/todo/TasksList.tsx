import TaskFilter from '@/todo/TaskFilter'
import Task from '@/todo/Task'
import { TaskItemType } from '@/types'


type TasksListProps = {
    tasks: TaskItemType[],
    toggleTask: (id: string) => void,
    removeTask: (id: string) => Promise<void>,
}


const TasksList = ({ tasks, toggleTask, removeTask }: TasksListProps) => {
    return (
        <>
            <TaskFilter />
            <ul className="mb-5">
                {tasks.map(task => <Task key={task.id} task={task}
                    toggleTask={toggleTask}
                    removeTask={removeTask}

                />)}

            </ul>
        </>
    )
}

export default TasksList