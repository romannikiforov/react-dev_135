import { FaTrash, FaCheck, FaSave } from "react-icons/fa";

const Task = () => {
    return (

        <li className="item-list">
            <span>Task one</span>
            <div className="ml-auto flex">
                <div className="mr-4">
                    <FaCheck className="cursor-pointer" />
                </div>
                <div>
                    <FaTrash className="cursor-pointer" />
                </div>
            </div>
        </li>
    )
}

export default Task