import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from "./NewTask.module.css";

interface NewTaskProps {
  createTask: (text: string) => void;
}

export function NewTask(props: NewTaskProps) {
  const [label, setLabel] = useState("");

  const handleCreateTask = () => {
    props.createTask(label);
    setLabel("");
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />
      <button className={styles.button} onClick={handleCreateTask}>
        Criar <AiOutlinePlusCircle />
      </button>
    </div>
  );
}
