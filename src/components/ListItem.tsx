import {
  faCheckCircle,
  faCircle,
  faClock,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodoStatus } from "../store/slices/todoSlice";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import TodoForm from "./TodoForm";

interface ListItemProps {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
}

const ListItem: FC<ListItemProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const toggleTodoStatusHandler = () => {
    // Update todo status first, then show toast
    dispatch(toggleTodoStatus(todo.id));
    // toast incomplete & complete for any task
    const message = todo.completed
      ? "Task marked as incomplete"
      : "Task marked as complete";
    toast.success(message);
  };

  const deleteTodoHandler = () => {
    const element = document.getElementById(`todo-${todo.id}`);

    // Add fade-out animation, then delete todo and show success toast
    element?.classList.add("animate-fade-out");
    setTimeout(() => {
      dispatch(deleteTodo(todo.id));
      toast.success("Task deleted successfully");
    }, 300);

    // Close delete confirmation modal
    setShowDeleteModal(false);
  };

  return (
    <>
      <div
        className={`bg-theme-surface border-2 rounded-xl shadow-lg 
                    transition-all duration-300 animate-bounce-in
                    hover:shadow-2xl hover:border-nord-10
                    group flex flex-col opacity-100 backdrop-blur-sm
                    hover:scale-[1.02] active:scale-[0.98]
                    ${
                      todo.completed
                        ? "border-nord-14/100"
                        : "border-nord-13/70"
                    }`}
      >
        <div className="p-5 flex flex-col h-full relative overflow-hidden">
          <div className="flex items-start space-x-4 mb-4 relative">
            <div className="mt-1 shrink-0 transform transition-transform duration-200 hover:scale-125">
              <FontAwesomeIcon
                icon={todo.completed ? faCheckCircle : faCircle}
                className={`text-xl transition-all duration-300 
                        ${
                          todo.completed
                            ? "text-nord-14 rotate-0"
                            : "text-nord-13 hover:rotate-180 hover:text-nord-10"
                        }`}
                onClick={toggleTodoStatusHandler}
              />
            </div>
            <div className="flex-1 space-y-2 group min-w-0">
              <h3
                className={`font-semibold text-lg text-theme-text transition-all duration-300
                        group-hover:translate-x-1 break-words whitespace-pre-wrap
                        ${todo.completed ? "line-through opacity-60" : ""}`}
              >
                {todo.title}
              </h3>
            </div>
          </div>

          <div className="flex justify-between items-center space-x-1 mt-auto pt-4 border-t border-nord-4/20">
            <span
              className={`text-sm px-4 py-1.5 rounded-full inline-block font-medium
                        transition-all duration-300
                        ${
                          todo.completed
                            ? "bg-nord-14/10 text-nord-14 dark:bg-nord-14/20"
                            : "bg-nord-10/10 text-nord-10 dark:bg-nord-10/20"
                        }`}
            >
              {todo.completed ? "Completed" : "In Progress"}
            </span>
            <div className="flex gap-4 transition-transform duration-200">
              {!todo.completed && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="p-2.5 hover:bg-nord-5/50 dark:hover:bg-nord-2/50 rounded-lg 
                              transition-all duration-200 hover:scale-110"
                >
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="text-nord-9 text-lg"
                  />
                </button>
              )}
              <button
                onClick={toggleTodoStatusHandler}
                className="p-2.5 hover:bg-nord-5/50 dark:hover:bg-nord-2/50 rounded-lg 
                          transition-all duration-200 hover:scale-110"
              >
                <FontAwesomeIcon
                  icon={todo.completed ? faCheckCircle : faClock}
                  className={`text-lg transition-colors duration-200
                          ${todo.completed ? "text-nord-14" : "text-nord-13"}`}
                />
              </button>

              <button
                onClick={() => setShowDeleteModal(true)}
                className="p-2.5 hover:bg-nord-11/10 rounded-lg 
                          transition-all duration-200 hover:scale-110"
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-nord-11 text-lg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isEditing && (
        <TodoForm
          todo={todo}
          isOpen={isEditing}
          closeForm={() => setIsEditing(false)}
        />
      )}

      <DeleteConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={deleteTodoHandler}
      />
    </>
  );
};

export default ListItem;
