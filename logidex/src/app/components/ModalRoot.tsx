'use client';

import NewDecisionModal from '../components/new_decision_modal';
import { useModal } from '../context/ModalContext';

const ModalRoot = () => {
  const { isModalOpen, setModalOpen } = useModal();

  return (
    <NewDecisionModal
      isOpen={isModalOpen}
      onClose={() => setModalOpen(false)}
    />
  );
};

export default ModalRoot;
