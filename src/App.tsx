import { useState } from "react";
import { Header } from "./components/Header";
import { TasksContainer } from "./components/TasksContainer";
import { NewTask } from "./components/NewTask";

import "./App.css";
import "./global.css";

interface Task {
  id: string;
  label: string;
  checked: boolean;
}

function App() {
  const [task, setTask] = useState<Task[]>([]);

  const checkedTask = (id: string) => {
    const updatedTask = task.map((task) => {
      if (task.id === id) {
        return {
          id: task.id,
          label: task.label,
          checked: !task.checked,
        };
      } else {
        return task;
      }
    });

    setTask(updatedTask);
  };

  const deleteTask = (id: string) => {
    const updatedTasks = task.filter((task) => {
      return task.id !== id;
    });

    setTask(updatedTasks);
  };

  const createTask = (label: string) => {
    const newTask = {
      id: Date.now().toString(),
      label,
      checked: false,
    };

    setTask((state) => [...state, newTask]);
  };
  return (
    <div className="App">
      <Header />
      <NewTask createTask={createTask} />
      <TasksContainer
        tasks={task}
        checkedTask={checkedTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
