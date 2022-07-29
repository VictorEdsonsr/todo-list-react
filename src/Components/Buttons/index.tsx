import { AddButtonCustom, DeleteButtonCustom } from "./styles";
import { FaPlus, FaTrash } from "react-icons/fa";
import { Tasks } from "../../types/Tasks";

type Props = {
  click: (taskName: Tasks) => void;
  taskName: Tasks;
};

export const AddButton = () => {
  return (
    <AddButtonCustom>
      <FaPlus color="black" size={20} />
    </AddButtonCustom>
  );
};

export const DeleteButton = ({ click, taskName }: Props) => {
  const buttonDelete = () => {
    click(taskName);
  };

  return (
    <DeleteButtonCustom onClick={(e) => buttonDelete()}>
      <FaTrash color="white" size={20} />
    </DeleteButtonCustom>
  );
};
