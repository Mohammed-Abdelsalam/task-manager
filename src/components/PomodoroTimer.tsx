import { FC, useEffect, useState } from "react";

const PomodoroTimer: FC = () => {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="bg-gradient-to-br from-theme-surface to-theme-surface-light p-4 sm:p-6 rounded-xl border-2 border-nord-4/50 dark:border-nord-2/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
      <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-nord-7 to-nord-10 bg-clip-text text-transparent mb-2 sm:mb-4">
        Pomodoro Timer
      </h3>
      <div className="bg-gradient-to-br from-theme-surface-light to-transparent dark:from-nord-1 dark:to-nord-2/50 rounded-lg p-4 sm:p-6 mb-2 sm:mb-4 relative overflow-hidden">
        {isRunning && (
          <div className="absolute inset-0 animate-ripple bg-nord-8/10 rounded-lg"></div>
        )}
        <p className="text-4xl sm:text-6xl font-mono text-theme-text font-bold tracking-wider text-center">
          {formatTime(time)}
        </p>
      </div>
      <div className="flex gap-2 sm:gap-4 justify-center">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`flex-1 py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 
                     ${
                       isRunning
                         ? "bg-gradient-to-r from-nord-11 to-nord-11/90"
                         : "bg-gradient-to-r from-nord-14 to-nord-14/90"
                     } text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => {
            setTime(25 * 60);
            setIsRunning(false);
          }}
          className="flex-1 py-2 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-nord-3 to-nord-3/90 text-white rounded-lg text-sm sm:text-base font-medium 
                     hover:from-nord-2 hover:to-nord-2/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
