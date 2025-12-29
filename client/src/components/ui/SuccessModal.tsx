import React from "react";
import "./SuccessModal.css";

type SuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="success-overlay">
      <div className="success-container">
        <button className="success-close" onClick={onClose}>✕</button>

        <div className="success-header">
          <div className="check-circle">✓</div>
          <h2>We Got Your Repair Request</h2>
        </div>

        <div className="success-body">
          <p>Thank You For Showing Interest In Our Services,</p>
          <p>
            Our Technician Will Contact You As Soon As Possible !!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
