import { useState } from "react";
import { NewTask } from "./NewTask";
import { Tasks } from "./Tasks";

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
        <div>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}
    </>
  );
}
