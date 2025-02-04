import { FC } from "react";
import "./App.css";
import ThemeToggle from "./components/ThemeToggle";

const App: FC = () => {
  return (
    <div className="App h-screen w-screen text-[var(--theme-text)] bg-[var(--theme-surface)] flex justify-center items-center flex-col text-4xl gap-5">
      <h1>Hello Task Manager</h1>
      <ThemeToggle />
    </div>
  );
};

export default App;
