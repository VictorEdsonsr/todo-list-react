import { useState } from "react";
import { Tasks } from "../../types/Tasks";
import { Container, List } from "./styles";

type Props = {
  task: Tasks;
};

const Item = ({ task }: Props) => {
  const [check, isCheck] = useState(task.done);

  return (
    <Container>
      <List check={check}>
        <span>
          <input
            type="checkbox"
            checked={check}
            onChange={(e) => isCheck(e.target.checked)}
          />
          {task.name}
        </span>
      </List>
    </Container>
  );
};

export default Item;
