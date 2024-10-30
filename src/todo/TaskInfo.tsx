

const TaskInfo = () => {
    return (
        <div className="mb-5 text-2xl">
            <p className="mr-4">
                Total - <span id="tasks-total">3</span>
            </p>
            <p className="mr-4">
                Done - <span id="tasks-done">2</span>
            </p>
            <p className="mr-4">
                Remain - <span id="tasks-remain">1</span>
            </p>
        </div>
    )
}

export default TaskInfo