import { useState } from 'react'
import TasksList from "@/todo/TasksList";
import TaskInfo from "@/todo/TaskInfo";
import TaskForm from "@/todo/TaskForm";
import { TaskItemType } from '@/types'


function App() {
  const [tasks, setTasks] = useState<TaskItemType[]>([])

  const addTask = (task: TaskItemType) => setTasks(x => [...x, task])

  return (
    <section className="w-[1200px] mx-auto">
      <h3 className="title">List of tasks</h3>
      <hr />

      <div className="todo-grid">
        <div className="p-2">
          <TasksList tasks={tasks} />
        </div>
        <div className="p-2">
          <TaskInfo tasks={tasks} />

          <hr className="hr-block" />
          <TaskForm addTask={addTask} />
        </div>
      </div>
    </section>
  );
}

export default App;
