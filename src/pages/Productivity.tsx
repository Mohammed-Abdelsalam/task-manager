import DailyProgress from "../components/DailyProgress";
import PomodoroTimer from "../components/PomodoroTimer";
import TaskChart from "../components/TaskChart";

const Productivity = () => {
  return (
    <div className="min-h-[calc(100dvh-80px)] bg-gradient-to-br from-theme-surface to-theme-surface-light dark:from-nord-0 dark:to-nord-1">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2">
            <span className="text-theme-text">Productivity</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nord-7 to-nord-10 animate-gradient-move bg-gradient-move">
              Dashboard
            </span>
          </h1>
          <p className="text-theme-text-light text-base sm:text-lg">
            Track your progress and stay focused
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 sm:gap-6">
          {/* Task Chart Section */}
          <div className="xl:col-span-5 animate-fade-in-up [animation-delay:200ms]">
            <div className="">
              <TaskChart />
            </div>
          </div>

          {/* Right Side Section */}
          <div className="xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Daily Progress Card */}
            <div className="animate-fade-in-up [animation-delay:400ms]">
              <div className="h-full bg-gradient-to-br from-theme-surface to-theme-surface-light p-4 sm:p-6 rounded-xl border-2 border-nord-4/20 dark:border-nord-2/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <DailyProgress />
                <DailyProgress />
              </div>
            </div>

            {/* Pomodoro Timer Card */}
            <div className="animate-fade-in-up [animation-delay:600ms]">
              <div className="h-full bg-gradient-to-br from-theme-surface to-theme-surface-light p-4 sm:p-6 rounded-xl border-2 border-nord-4/20 dark:border-nord-2/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <PomodoroTimer />
              </div>
            </div>

            {/* Stats Overview Section */}
            <div className="sm:col-span-2 animate-fade-in-up [animation-delay:800ms]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 bg-gradient-to-br from-theme-surface to-theme-surface-light p-4 sm:p-6 rounded-xl border-2 border-nord-4/20 dark:border-nord-2/20 shadow-lg hover:shadow-xl transition-all duration-300">
                {["Focus Time", "Tasks Done", "Productivity", "Streak"].map(
                  (title, index) => (
                    <div
                      key={title}
                      className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-nord-7/10 to-nord-10/10 text-center hover:from-nord-7/20 hover:to-nord-10/20 transition-all duration-300"
                    >
                      <h4 className="text-theme-text-light text-xs sm:text-sm font-medium mb-1">
                        {title}
                      </h4>
                      <p className="text-xl sm:text-2xl font-bold text-theme-text">
                        {index === 0 && "2h 30m"}
                        {index === 1 && "12"}
                        {index === 2 && "85%"}
                        {index === 3 && "5"}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productivity;
