

const TaskForm = () => {
    return (
        <>
            <p className="title-red">Add task</p>
            <form className="" autoComplete="off">
                <div className="mb-3 flex">
                    <input
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