import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  moveTodo,
  toggleTodoStatus,
} from "../store/slices/todoSlice";

const useTodoActions = () => {
  const dispatch = useDispatch();

  const toggleStatus = (id: number) => {
    dispatch(toggleTodoStatus(id));
    toast.success("Task status updated successfully!");
  };

  const deleteTodoAction = (id: number) => {
    dispatch(deleteTodo(id));
    toast.success("Task deleted successfully!");
  };

  const moveTodoAction = (id: number, completed: boolean) => {
    dispatch(moveTodo({ id, completed }));
    toast.success(
      `Task moved to ${completed ? "Completed" : "In Progress"} column!`
    );
  };

  return { toggleStatus, deleteTodoAction, moveTodoAction };
};

export default useTodoActions;
