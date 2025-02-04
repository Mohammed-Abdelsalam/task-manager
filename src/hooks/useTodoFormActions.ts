import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../store/slices/todoSlice";

const useTodoFormActions = () => {
  const dispatch = useDispatch();

  const handleAddTodo = (title: string) => {
    dispatch(addTodo({ title }));
    toast.success("Task added successfully!");
  };

  const handleEditTodo = (id: number, title: string) => {
    dispatch(editTodo({ id, title }));
    toast.success("Task updated successfully!");
  };

  return { handleAddTodo, handleEditTodo };
};

export default useTodoFormActions;
