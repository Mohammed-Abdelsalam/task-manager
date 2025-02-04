import { FC } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Layout from "./components/Layout";

const App: FC = () => {
  return (
    <div className="App min-h-screen bg-[var(--theme-surface)] ">
      <Layout />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2000,
          style: {
            background: "var(--theme-surface)",
            color: "var(--theme-text)",
          },
        }}
      />
    </div>
  );
};

export default App;
