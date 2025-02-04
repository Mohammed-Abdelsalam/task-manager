import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { FC } from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

ChartJS.register(ArcElement, Tooltip, Legend);

const TaskChart: FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  const completedTasks = todos.filter((todo) => todo.completed).length;
  const pendingTasks = todos.filter((todo) => !todo.completed).length;

  const data = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [completedTasks, pendingTasks],
        backgroundColor: ["#A3BE8C", "#81A1C1"],
        borderColor: ["#8FBCBB", "#88C0D0"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          color: "var(--theme-text)",
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="max-w-full px-4 py-6">
      <h3 className="text-2xl font-bold text-theme-text mb-4 text-center">
        Task Progress
      </h3>
      <div className="p-4 flex justify-center">
        <Doughnut data={data} options={options} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-center">
        <div className="p-2 rounded-lg bg-nord-14/20">
          <p className="text-theme-text-light">Completed</p>
          <p className="text-2xl font-bold text-nord-14">{completedTasks}</p>
        </div>
        <div className="p-2 rounded-lg bg-nord-9/20">
          <p className="text-theme-text-light">Pending</p>
          <p className="text-2xl font-bold text-nord-9">{pendingTasks}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskChart;
