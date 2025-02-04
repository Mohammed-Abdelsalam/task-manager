import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FC, useState } from "react";

// components
import Button from "./Button";
import TodoForm from "./TodoForm";

const AddTodoButton: FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => setIsFormOpen((prev) => !prev);

  return (
    <div>
      <Button onClick={toggleForm} icon={faAdd} variant="primary">
        Add New Task
      </Button>

      {isFormOpen && <TodoForm isOpen={isFormOpen} closeForm={toggleForm} />}
    </div>
  );
};

export default AddTodoButton;
