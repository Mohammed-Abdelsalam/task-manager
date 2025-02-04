import {
  faArrowLeft,
  faCheck,
  faEdit,
  faGripVertical,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import { useDrag } from "react-dnd";
import useTodoActions from "../hooks/useTodoActions";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import TodoForm from "./TodoForm";

interface TodoCardProps {
  todo: { id: number; title: string; completed: boolean };
}

const TodoCard: FC<TodoCardProps> = ({ todo }) => {
  const { toggleStatus, deleteTodoAction } = useTodoActions();
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [{ isDragging }, drag] = useDrag({
    type: "TODO",
    item: { id: todo.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  // handle delete function
  const handleDelete = () => {
    deleteTodoAction(todo.id);
    setShowDeleteModal(false);
  };

  return (
    <>
      <div
        ref={drag}
        className={`p-4 bg-theme-surface rounded-xl 
          border-2 border-nord-4 dark:border-nord-2
          hover:border-nord-10 dark:hover:border-nord-10
          transition-all duration-200
          flex items-start gap-3 mb-3
          cursor-grab active:cursor-grabbing
          ${isDragging ? "opacity-50" : ""}`}
      >
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <FontAwesomeIcon
            icon={faGripVertical}
            className="text-nord-9 cursor-grab active:cursor-grabbing mt-1"
          />
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-theme-text font-medium break-words whitespace-pre-wrap overflow-hidden">
              {todo.title}
            </span>
            <span className="text-sm text-theme-text-light">
              {todo.completed ? "Completed" : "In Progress"}
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            className="p-2 text-nord-11 hover:bg-nord-11/10 rounded-lg transition-colors"
            onClick={() => setShowDeleteModal(true)}
            title="Delete task"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
          {!todo.completed && (
            <button
              className="p-2 text-nord-9 hover:bg-nord-9/10 rounded-lg transition-colors"
              onClick={() => setIsEditing(true)}
              title="Edit task"
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
          )}
          <button
            className={`p-2 rounded-lg transition-colors
              ${
                todo.completed
                  ? "text-nord-14 hover:bg-nord-14/10"
                  : "text-nord-10 hover:bg-nord-10/10"
              }`}
            onClick={() => toggleStatus(todo.id)} // Using the custom hook action for toggling status
            title={todo.completed ? "Mark as incomplete" : "Mark as complete"}
          >
            <FontAwesomeIcon icon={todo.completed ? faArrowLeft : faCheck} />
          </button>
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
        onConfirm={handleDelete}
      />
    </>
  );
};

export default TodoCard;
