import { FC, useCallback, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import useTodoFormActions from "../hooks/useTodoFormActions";
import { RootState } from "../store/store";
import Button from "./Button";
import Modal from "./Modal";

interface TodoFormProps {
  todo?: { id: number; title: string };
  isOpen: boolean;
  closeForm: () => void;
}

const TodoForm: FC<TodoFormProps> = ({ todo, isOpen, closeForm }) => {
  const { handleAddTodo, handleEditTodo } = useTodoFormActions();
  const todos = useSelector(
    (state: RootState) => state.todos.todos,
    (prev, next) => prev.length === next.length
  );

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    setError,
    formState: { errors },
  } = useForm<{ title: string }>({
    defaultValues: { title: "" },
  });

  // Memoize existing todos titles for comparison
  const existingTodoTitles = useMemo(
    () => todos.map((t) => t.title.toLowerCase()),
    [todos]
  );

  // Memoize onSubmit handler
  const onSubmit = useCallback(
    (data: { title: string }) => {
      if (todo) {
        handleEditTodo(todo.id, data.title);
      } else {
        if (existingTodoTitles.includes(data.title.toLowerCase())) {
          setError("title", {
            type: "manual",
            message: "This task already exists!",
          });
          toast.error("Task already exists!");
          return;
        }
        handleAddTodo(data.title);
      }
      closeForm();
    },
    [
      todo,
      handleAddTodo,
      handleEditTodo,
      existingTodoTitles,
      setError,
      closeForm,
    ]
  );

  useEffect(() => {
    if (isOpen) {
      if (todo) {
        setValue("title", todo.title);
      } else {
        reset();
      }
    }
  }, [isOpen, todo, setValue, reset]);

  const modalTitle = useMemo(
    () => (todo ? "Edit Task" : "Add New Task"),
    [todo]
  );

  const submitButtonText = useMemo(
    () => (todo ? "Save Changes" : "Add Task"),
    [todo]
  );

  return (
    <Modal isOpen={isOpen} closeModal={closeForm}>
      <h2 className="text-2xl font-semibold text-theme-text mb-6">
        {modalTitle}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="text"
          className="w-full p-3 rounded-lg bg-theme-surface-light border-2 border-theme-secondary/20 
                     focus:border-theme-primary focus:outline-none transition-colors
                     text-theme-text placeholder-theme-text-light"
          placeholder="What needs to be done?"
          {...register("title", { required: "Task title is required" })}
        />
        {errors.title && (
          <p className="text-nord-11 text-sm font-medium">
            {errors.title.message}
          </p>
        )}
        <div className="flex justify-end gap-3 mt-6">
          <Button
            type="button"
            onClick={closeForm}
            className="px-4 py-2 rounded-lg bg-theme-surface-light text-theme-text-light
                       hover:bg-theme-surface hover:text-theme-text transition-colors"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="px-4 py-2 rounded-lg bg-theme-primary text-theme-surface
                       hover:bg-theme-accent transition-colors font-medium"
          >
            {submitButtonText}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default TodoForm;
