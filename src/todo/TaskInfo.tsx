import { TasksType } from '@/types'

const TaskInfo = ({ tasks }: TasksType) => {

    const total = tasks.length;
    const done = tasks.filter(t => t.done).length
    const remain = total - done;

    return (
        <div className="mb-5 text-2xl">
            <p className="mr-4">
                Total - <span id="tasks-total">{total}</span>
            </p>
            <p className="mr-4">
                Done - <span id="tasks-done">{done}</span>
            </p>
            <p className="mr-4">
                Remain - <span id="tasks-remain">{remain}</span>
            </p>
        </div>
    )
}

export default TaskInfo