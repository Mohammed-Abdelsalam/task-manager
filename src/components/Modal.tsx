import { FC, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  // handle Escape button
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 flex items-center justify-center bg-theme-text/20 backdrop-blur-sm
                  transition-all duration-300 z-50"
    >
      <div
        className="bg-theme-surface p-6 rounded-xl shadow-lg w-full max-w-md m-4
                   border border-theme-surface-light animate-[fadeIn_0.2s_ease-in-out]"
      >
        {children}
        <div className="flex justify-end mt-4"></div>
      </div>
    </div>
  );
};

export default Modal;
