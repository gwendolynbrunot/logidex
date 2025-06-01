'use client';

interface NewDecisionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewDecisionModal = ({ isOpen, onClose }: NewDecisionModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <div className="close-btn-wrapper">
          <button className="close-btn" type="button" onClick={onClose}>
            <i className="bi bi-x-lg close-icon"></i>
          </button>
        </div>
        <div className="dec-form-wrapper">
          <h2>New Decision</h2>
          <form className="dec-form" onSubmit={(e) => { e.preventDefault();}}>
            <input type="text" placeholder="Title" required />
            <textarea placeholder="Details" required></textarea>
            <button className="btn btn-primary-on-light " type="submit">Save Decision</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewDecisionModal;