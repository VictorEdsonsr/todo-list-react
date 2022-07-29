import { useState } from "react";
import { Form, InputCustom } from "./styles";
import { AddButton } from "../Buttons/index";

type Props = {
  onSub: (taskName: string) => void;
};

const AddTask = ({ onSub }: Props) => {
  const [addTask, setAddTask] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!addTask) {
      return;
    }
    onSub(addTask);
    setAddTask("");
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <InputCustom
        type="text"
        placeholder="Digite uma tarefa"
        value={addTask}
        onChange={(e) => setAddTask(e.target.value)}
      />
      <AddButton />
    </Form>
  );
};

export default AddTask;
