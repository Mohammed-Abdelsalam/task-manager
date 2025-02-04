import { FC, Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import LoadingSpinner from "./LoadingSpinner";
import Navbar from "./Navbar";

const Home = lazy(() => import("../pages/Home"));
const KanbanView = lazy(() => import("../pages/KanbanView"));
const ListView = lazy(() => import("../pages/ListView"));
const Productivity = lazy(() => import("../pages/Productivity"));
const Error = lazy(() => import("../pages/Error"));

const Layout: FC = () => {
  return (
    <Router>
      <Navbar />
      <main className="pt-20 px-4 min-h-screen bg-[var(--theme-surface)]">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kanban" element={<KanbanView />} />
            <Route path="/productivity" element={<Productivity />} />
            <Route path="/list" element={<ListView />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
};

export default Layout;
