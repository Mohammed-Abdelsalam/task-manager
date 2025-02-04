import { faCircleExclamation, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { useNavigate } from "react-router";
import Button from "../components/Button";

const Error: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 py-12 h-[calc(100dvh-80px)] flex items-center flex-col justify-center">
      <div className="text-center space-y-6 max-w-md animate__animated animate__fadeIn">
        <div className="text-nord-11 mb-6 animate__animated animate__bounce animate__infinite">
          <FontAwesomeIcon icon={faCircleExclamation} className="text-6xl" />
        </div>

        <h1 className="text-5xl font-bold text-theme-text mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Oops!{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-nord-7 to-nord-10">
            404
          </span>
        </h1>

        <p className="text-xl text-theme-text-light mb-8 animate__animated animate__fadeIn animate__delay-2s">
          The page you are looking for does not exist.
        </p>

        <Button
          onClick={() => navigate("/")}
          className="bg-nord-10 hover:bg-nord-9 text-white px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center animate__animated animate__fadeIn animate__delay-3s"
        >
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          <span>Return Home</span>
        </Button>
      </div>
    </div>
  );
};

export default Error;
