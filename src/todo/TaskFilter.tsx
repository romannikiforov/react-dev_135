

const TaskFilter = () => {
    return (
        <div className="flex mb-2">
            <select className="filter-select">
                <option value="1">Show all tasks</option>
                <option value="2">Show Done</option>
                <option value="3">Show Remain</option>
            </select>

            <input type="text" className="form-control" name="search-tasks" />
        </div>
    )
}

export default TaskFilter