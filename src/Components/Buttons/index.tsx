import { AddButtonCustom, DeleteButtonCustom } from "./styles";
import { FaPlus, FaTrash } from "react-icons/fa";

export const AddButton = () => {
  return (
    <AddButtonCustom>
      <FaPlus color="black" size={20} />
    </AddButtonCustom>
  );
};

export const DeleteButton = () => {
  return (
    <DeleteButtonCustom>
      <FaTrash color="white" size={20} />
    </DeleteButtonCustom>
  );
};
