import { useEffect, useState } from "react";
import { Tasks } from "./types/Tasks";
import { Container, List } from "./App.style";
import Item from "./Components/Task";
import AddTask from "./Components/AddTask";

const App = () => {
  const [list, setList] = useState<Tasks[]>([
    { id: 1, name: "fazer compras", done: false },
    { id: 2, name: "Estudar", done: false },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];

    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });

    setList(newList);
  };

  return (
    <Container>
      <h1> To-do list</h1>
      <AddTask onSub={handleAddTask} />
      <List>
        {list.map((Tasks, index) => (
          <Item key={index} task={Tasks} />
        ))}
      </List>
    </Container>
  );
};

export default App;
