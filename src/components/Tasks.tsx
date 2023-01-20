import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsCheckCircleFill, BsCircle } from "react-icons/bs";

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
        props.task.checked ? styles.taskChecked : styles.taskUnchecked
      }`}
    >
      <button className={styles.button} onClick={handleCheckTask}>
        {!check ? (
          <BsCircle className={styles.unchecked} />
        ) : (
          <BsCheckCircleFill className={styles.checked} />
        )}
      </button>

      <p>{props.task.label}</p>

      <button className={styles.buttonDelete} onClick={handleDeleteTask}>
        <RiDeleteBin6Line className={styles.delete} />
      </button>
    </div>
  );
}
