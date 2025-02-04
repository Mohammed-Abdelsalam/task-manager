import {
  faColumns,
  faListCheck,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useState } from "react";
import { Link } from "react-router";
import Button from "../components/Button";
import Modal from "../components/Modal";
import TodoForm from "../components/TodoForm";

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = useCallback(() => setIsFormOpen(true), []);
  const handleCloseForm = useCallback(() => setIsFormOpen(false), []);

  return (
    <div className="container mx-auto px-4 py-12 h-[calc(100dvh-80px)] flex items-center flex-col justify-center">
      {/* Animated Logo Icon */}
      <div
        className="inline-flex p-3 sm:p-4 rounded-full mb-5
              bg-gradient-to-br from-nord-6 to-nord-5 dark:from-nord-1 dark:to-nord-0
              backdrop-blur-xl border border-nord-5 dark:border-nord-2
              shadow-xl shadow-nord-10/10 dark:shadow-nord-10/5
              animate-float"
      >
        <FontAwesomeIcon
          icon={faListCheck}
          className="text-4xl sm:text-5xl text-red-500 bg-clip-text bg-gradient-to-r from-nord-9 to-nord-10 dark:from-nord-8 dark:to-nord-9 dark:text-theme-accent animate-pulse"
        />
      </div>
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-theme-text mb-6">
          Welcome to
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-nord-7 to-nord-10">
            Task Manager
          </span>
        </h1>
        <p className="text-xl text-theme-text-light mb-8 max-w-2xl mx-auto">
          Streamline your tasks with our beautiful and intuitive todo
          application. Choose your preferred way to organize and manage your
          tasks.
        </p>
        <Button
          onClick={handleOpenForm}
          className="bg-nord-10 hover:bg-nord-9 text-nord-6 px-8 py-4 rounded-lg
            transition-all duration-200 transform hover:scale-105 inline-flex items-center"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Create New Task
        </Button>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <Link
          to="/list"
          className="p-6 rounded-xl border-2 border-nord-4 dark:border-nord-2
            hover:border-nord-10 dark:hover:border-nord-10 transition-all duration-200
            bg-theme-surface-light hover:bg-theme-surface group"
        >
          <FontAwesomeIcon
            icon={faListCheck}
            className="text-4xl mb-4 text-nord-10"
          />
          <h2 className="text-2xl font-bold text-theme-text mb-2">List View</h2>
          <p className="text-theme-text-light">
            Traditional list layout for simple and efficient task management
          </p>
        </Link>

        <Link
          to="/kanban"
          className="p-6 rounded-xl border-2 border-nord-4 dark:border-nord-2
            hover:border-nord-10 dark:hover:border-nord-10 transition-all duration-200
            bg-theme-surface-light hover:bg-theme-surface group"
        >
          <FontAwesomeIcon
            icon={faColumns}
            className="text-4xl mb-4 text-nord-10"
          />
          <h2 className="text-2xl font-bold text-theme-text mb-2">
            Kanban View
          </h2>
          <p className="text-theme-text-light">
            Visual board layout for drag-and-drop task organization
          </p>
        </Link>
      </section>

      {/* Todo Modal */}
      <Modal isOpen={isFormOpen} closeModal={handleCloseForm}>
        <TodoForm isOpen={isFormOpen} closeForm={handleCloseForm} />
      </Modal>
    </div>
  );
};

export default Home;
