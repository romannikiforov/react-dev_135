import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import TasksList from "@/todo/TasksList";
import TaskInfo from "@/todo/TaskInfo";
import TaskForm from "@/todo/TaskForm";
import { TaskItemType } from '@/types'


function App() {
  const [tasks, setTasks] = useState<TaskItemType[]>([])

  const addTask = async (task: TaskItemType) => setTasks(x => [...x, task])

  const toggleTask = (id: string) => setTasks(tasks => tasks.map(t => t.id === id ? { ...t, done: !t.done } : t))

  const removeTask = async (id: string) => {
    if (!confirm("Are you sure ? ")) {
      return;
    }
    setTasks(tasks => tasks.filter(t => t.id !== id))
  }

  return (
    <section className="w-[1200px] mx-auto">
      <h3 className="title">List of tasks</h3>
      <hr />

      <div className="todo-grid">
        <div className="p-2">
          <TasksList tasks={tasks}
            toggleTask={toggleTask}
            removeTask={removeTask}
          />
        </div>
        <div className="p-2">
          <TaskInfo tasks={tasks} />

          <hr className="hr-block" />
          <TaskForm addTask={addTask} />
        </div>
      </div>


      <ToastContainer autoClose={2000} />
    </section>
  );
}

export default App;
