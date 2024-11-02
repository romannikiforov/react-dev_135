
type TaskFilterProps = {
    handleSelectChange: React.ChangeEventHandler<HTMLSelectElement>,
    handleTextChange: (val: string) => void
}

const TaskFilter = ({ handleSelectChange, handleTextChange }: TaskFilterProps) => {
    return (
        <div className="flex mb-2">
            <select onChange={handleSelectChange} className="filter-select">
                <option value="1">Show all tasks</option>
                <option value="2">Show Done</option>
                <option value="3">Show Remain</option>
            </select>

            <input onChange={e => handleTextChange(e.target.value)} type="text" className="form-control" name="search-tasks" />
        </div>
    )
}

export default TaskFilter