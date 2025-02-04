import { FC } from "react";
import "./App.css";
import Layout from "./components/Layout";

const App: FC = () => {
  return (
    <div className="App min-h-screen bg-[var(--theme-surface)] ">
      <Layout />
    </div>
  );
};

export default App;
