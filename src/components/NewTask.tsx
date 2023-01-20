import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

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
    <>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />
      <button onClick={handleCreateTask}>
        Criar <AiOutlinePlusCircle />
      </button>
    </>
  );
}
