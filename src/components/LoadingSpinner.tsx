import { FC } from "react";

const LoadingSpinner: FC = () => {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-[var(--theme-primary)] border-t-transparent"></div>
    </div>
  );
};

export default LoadingSpinner;
