import { Tasks } from "./Tasks";
import { TasksInfos } from "./TasksInfos";
import { HiOutlineClipboardList } from "react-icons/hi";

import styles from "./TasksContainer.module.css";

interface Task {
  id: string;
  label: string;
  checked: boolean;
}

interface TaskProps {
  tasks: Task[];
  checkedTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function TasksContainer({ tasks, checkedTask, deleteTask }: TaskProps) {
  const taskCreated = tasks.length;

  return (
    <>
      <TasksInfos
        task={tasks}
        checkedTask={checkedTask}
        deleteTask={deleteTask}
      />
      {taskCreated ? (
        tasks.map((tasks) => (
          <Tasks
            key={tasks.id}
            task={tasks}
            checkedTask={checkedTask}
            deleteTask={deleteTask}
          />
        ))
      ) : (
        <div className={styles.emptySchedule}>
          <HiOutlineClipboardList />

          <div className={styles.text}>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      )}
    </>
  );
}
