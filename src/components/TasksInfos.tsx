interface Task {
  id: string;
  label: string;
  checked: boolean;
}

interface TaskProps {
  task: Task[];
  checkedTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function TasksInfos(props: TaskProps) {
  const taskCreated = props.task.length;

  const taskCompleted = props.task.reduce((acc, task) => {
    if (task.checked) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <>
      <p>
        Tarefas criadas <span>{taskCreated}</span>
      </p>

      <p>
        Concluídas <span>{taskCompleted}</span>
      </p>
    </>
  );
}
