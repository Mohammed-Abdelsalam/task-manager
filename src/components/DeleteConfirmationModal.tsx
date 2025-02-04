import { FC } from "react";

// components
import Button from "./Button";
import Modal from "./Modal";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationModal: FC<DeleteConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal isOpen={isOpen} closeModal={onClose}>
      <h2 className="text-2xl font-semibold text-theme-text mb-6">
        Delete Task
      </h2>
      <p className="text-theme-text-light mb-6">
        Are you sure you want to delete this task? This action cannot be undone.
      </p>
      <div className="flex justify-end gap-3">
        <Button onClick={onClose} variant="secondary">
          Cancel
        </Button>
        <Button onClick={onConfirm} variant="danger">
          Delete
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteConfirmationModal;
