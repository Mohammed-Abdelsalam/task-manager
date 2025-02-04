import { FC } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import Error from "../pages/Error";
import Home from "../pages/Home";
import KanbanView from "../pages/KanbanView";
import ListView from "../pages/ListView";
import Productivity from "../pages/Productivity";
import Navbar from "./Navbar";

const Layout: FC = () => {
  return (
    <Router>
      <Navbar />
      <main className="pt-20 px-4 min-h-screen bg-[var(--theme-surface)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kanban" element={<KanbanView />} />
          <Route path="/productivity" element={<Productivity />} />
          <Route path="/list" element={<ListView />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </Router>
  );
};

export default Layout;
