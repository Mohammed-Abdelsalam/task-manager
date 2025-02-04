import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTodoButton from "../components/AddTodoButton";
import KanbanColumn from "../components/KanbanColumn";
import { fetchTodos } from "../store/slices/todoSlice";
import { AppDispatch, RootState } from "../store/store";

const KanbanView: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { todos, loading } = useSelector((state: RootState) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const inProgressTodos = useMemo(
    () => todos.filter((t) => !t.completed),
    [todos]
  );

  const completedTodos = useMemo(
    () => todos.filter((t) => t.completed),
    [todos]
  );

  return (
    <div className="container max-w-7xl mx-auto h-[calc(100vh-5rem)] px-2 sm:px-4 py-6 flex flex-col">
      <div className="mb-6 flex justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold text-theme-text">
          Kanban
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-nord-7 to-nord-10">
            Board
          </span>
        </h1>

        <AddTodoButton />
      </div>

      {loading ? (
        <div className="flex items-center justify-center flex-grow">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-nord-10 border-t-transparent"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <KanbanColumn title="In Progress" todos={inProgressTodos} />
          <KanbanColumn title="Completed" todos={completedTodos} />
        </div>
      )}
    </div>
  );
};

export default KanbanView;
