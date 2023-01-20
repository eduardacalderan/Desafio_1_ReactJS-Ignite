import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsCheckCircle, BsCircle } from "react-icons/bs";
import styles from "./Tasks.module.css";

interface Task {
  id: string;
  label: string;
  checked: boolean;
}

interface TaskProps {
  task: Task;
  checkedTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function Tasks(props: TaskProps) {
  const [check, setCheck] = useState(false);

  const handleCheckTask = () => {
    props.checkedTask(props.task.id);

    setCheck(!check);
  };

  const handleDeleteTask = () => {
    props.deleteTask(props.task.id);
  };

  return (
    <div
      className={`${styles.task} ${
        props.task.checked ? styles.taskChecked : styles.task_unchecked
      }`}
    >
      <button onClick={handleCheckTask}>
        {!check ? <BsCircle /> : <BsCheckCircle />}
      </button>

      <p>{props.task.label}</p>

      <button onClick={handleDeleteTask}>
        <AiFillDelete />
      </button>
    </div>
  );
}
