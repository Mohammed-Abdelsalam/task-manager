import { FC, useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import AddTodoButton from "../components/AddTodoButton";
import Button from "../components/Button";
import ListItem from "../components/ListItem";
import SearchBar from "../components/SearchBar";
import { RootState } from "../store/store";

const filterOptions = [
  { value: "all", label: "All" },
  { value: "inProgress", label: "In Progress" },
  { value: "completed", label: "Completed" },
] as const;

const ListView: FC = () => {
  const { todos, searchQuery } = useSelector((state: RootState) => state.todos);
  const [filter, setFilter] = useState<"all" | "inProgress" | "completed">(
    "all"
  );

  // handle filter
  const counts = useMemo(
    () => ({
      all: todos.length,
      completed: todos.filter((todo) => todo.completed).length,
      inProgress: todos.filter((todo) => !todo.completed).length,
    }),
    [todos]
  );

  const filteredTodos = useMemo(
    () =>
      todos
        .filter((todo) =>
          todo.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .filter((todo) => {
          if (filter === "completed") return todo.completed;
          if (filter === "inProgress") return !todo.completed;
          return true;
        })
        .sort((a, b) => Number(a.completed) - Number(b.completed)),
    [todos, searchQuery, filter]
  );

  const handleFilterChange = useCallback((value: typeof filter) => {
    setFilter(value);
  }, []);

  return (
    <div className="container mx-auto max-w-7xl sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-theme-text mb-2">
          Task List
        </h1>
        <p className="text-theme-text-light">
          Manage and track your tasks efficiently
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <SearchBar />
        </div>
        <div className="sm:w-auto">
          <AddTodoButton />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        {filterOptions.map((option) => (
          <Button
            key={option.value}
            onClick={() => handleFilterChange(option.value)}
            className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
              filter === option.value
                ? "bg-theme-primary text-white"
                : "bg-theme-surface-light text-theme-text-light hover:bg-theme-surface"
            }`}
          >
            <span>{option.label}</span>
            <span
              className={`px-2 py-0.5 rounded-full text-sm ${
                filter === option.value ? "bg-white/20" : "bg-theme-primary/10"
              }`}
            >
              {counts[option.value]}
            </span>
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => <ListItem key={todo.id} todo={todo} />)
        ) : (
          <div className="col-span-full text-center py-8 bg-theme-surface rounded-lg border border-theme-surface-light">
            <p className="text-theme-text-light">
              {searchQuery
                ? "No tasks found matching your search"
                : filter === "all"
                ? "No tasks yet"
                : `No ${filter} tasks found`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListView;
