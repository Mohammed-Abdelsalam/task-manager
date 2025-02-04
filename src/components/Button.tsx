import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconDefinition;
  variant?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
  icon,
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseStyle =
    "px-6 py-3 rounded-lg transition-all duration-200 flex items-center gap-2 font-medium shadow-sm hover:shadow-md";
  const variants = {
    primary: "bg-theme-primary text-theme-surface hover:bg-theme-accent",
    secondary:
      "bg-theme-surface text-theme-primary border border-theme-primary hover:bg-theme-primary hover:text-theme-surface",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {children}
    </button>
  );
};

export default Button;
