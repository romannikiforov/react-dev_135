import TasksList from "@/todo/TasksList";
import TaskInfo from "@/todo/TaskInfo";
import TaskForm from "@/todo/TaskForm";
import tasks from '@/data'


function App() {
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
          <TaskForm />
        </div>
      </div>
    </section>
  );
}

export default App;
