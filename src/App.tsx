import { useEffect, useState } from "react";
import { Tasks } from "./types/Tasks";
import { Container, List } from "./App.style";
import Item from "./Components/Item";
import AddTask from "./Components/AddTask";
import { DeleteButton } from "./Components/Buttons";

const App = () => {
  const [list, setList] = useState<Tasks[]>([
    { id: 1, name: "Fazer compras", done: false },
    { id: 2, name: "Estudar", done: false },
  ]);

  useEffect(() => {
    const tarefasJSON = JSON.stringify(list);
    console.log(tarefasJSON);
    localStorage.setItem("@task", tarefasJSON);
  }, [list]);

  useEffect(() => {
    const taskStorage = localStorage.getItem("@task");
    if (taskStorage) {
      setList((task) => [...task, ...JSON.parse(taskStorage)]);
    }
  }, []);
  const handleAddTask = (taskName: string) => {
    setList([...list, { id: list.length + 1, name: taskName, done: false }]);
  };

  const handleDeleteTask = (taskName: Tasks) => {
    const find = list.filter((t) => {
      return t !== taskName;
    });
    console.log(find);
    setList(find);
  };

  return (
    <Container>
      <h1> To-do list</h1>
      <AddTask onSub={handleAddTask} />
      <List>
        {list.map((Tasks, index) => (
          <div>
            <Item key={index} task={Tasks} />
            <DeleteButton
              taskName={Tasks}
              click={() => handleDeleteTask(Tasks)}
            />
          </div>
        ))}
      </List>
    </Container>
  );
};

export default App;
