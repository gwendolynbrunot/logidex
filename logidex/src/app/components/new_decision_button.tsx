'use client';

import { useModal } from '../context/ModalContext';

const NewDecisionButton = () => {
  const { setModalOpen } = useModal();

  return (
    <button
      className="btn btn-primary-on-light new-decision-btn"
      onClick={() => setModalOpen(true)}
      title="New Decision"
      aria-label="New Decision"
    >
      <i className="bi bi-plus-lg new-icon"></i>
      New Decision
    </button>
  );
};

export default NewDecisionButton;
