import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { useDrop } from "react-dnd";
import useTodoActions from "../hooks/useTodoActions";
import TodoCard from "./TodoCard";

interface KanbanColumnProps {
  title: string;
  todos: { id: number; title: string; completed: boolean }[];
}

const KanbanColumn: FC<KanbanColumnProps> = ({ title, todos }) => {
  const { moveTodoAction } = useTodoActions();

  const [{ isOver }, drop] = useDrop({
    accept: "TODO",
    drop: (item: { id: number }) => {
      // Using the custom hook's moveTodoAction to handle the logic of moving the todo
      moveTodoAction(item.id, title === "Completed");
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`flex flex-col mb-4 md:mb-0 bg-theme-surface rounded-sm border-theme-accent/80 shadow-lg
      h-[calc(50vh-8rem)] md:h-[calc(100vh-12rem)] transition-colors duration-200
      ${
        isOver
          ? "bg-theme-surface-light border-2 border-theme-primary"
          : "bg-theme-surface border border-theme-surface-light"
      }`}
    >
      <div className="flex items-center gap-2 p-4 sticky top-0 bg-theme-surface border-b border-nord-4/20">
        <FontAwesomeIcon
          icon={faClipboardList}
          className="text-xl text-theme-primary"
        />
        <h2 className="text-lg font-bold text-theme-text">
          {title.toUpperCase()}
        </h2>
        <span className="ml-auto text-lg font-bold text-theme-text-light">
          {todos.length}
        </span>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
        {todos.length === 0 && (
          <div className="text-center text-theme-text-light p-4">
            No tasks here yet
          </div>
        )}
      </div>
    </div>
  );
};

export default KanbanColumn;
