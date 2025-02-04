import { FC } from "react";

// Store
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const DailyProgress: FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const completedTasks = todos.filter((todo) => todo.completed).length;
  const totalTasks = todos.length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="bg-theme-surface mb-4 p-4 sm:p-6 rounded-xl border-2 border-nord-4 dark:border-nord-2 shadow-lg transition-all duration-300 hover:shadow-xl">
      <h3 className="text-xl sm:text-2xl font-bold text-theme-text mb-2 sm:mb-4">
        Daily Progress
      </h3>
      <div className="relative pt-1">
        <div className="overflow-hidden h-4 sm:h-6 bg-theme-surface-light dark:bg-nord-1 rounded-full">
          <div
            className="h-full bg-gradient-to-r from-nord-7 to-nord-8 rounded-full transition-all duration-500 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-shimmer" />
          </div>
        </div>
        <div className="mt-2 flex flex-col sm:flex-row sm:justify-between items-center sm:items-start gap-1 sm:gap-0">
          <span className="text-theme-text font-semibold text-sm sm:text-base">
            {Math.round(progress)}% Complete
          </span>
          <span className="text-theme-text-light text-sm sm:text-base">
            ({completedTasks}/{totalTasks} tasks)
          </span>
        </div>
      </div>
    </div>
  );
};

export default DailyProgress;
