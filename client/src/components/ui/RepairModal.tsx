import React, { useState } from "react";
import "./RepairModal.css";
import SuccessModal from "./SuccessModal";

type RepairModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const RepairModal: React.FC<RepairModalProps> = ({ isOpen, onClose }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* REPAIR MODAL */}
      <div className="modal-overlay">
        <div className="modal-container">
          <button className="close-btn" onClick={onClose}>✕</button>

          <h2 className="logo">
            i-Fix <span>Solutions</span>
          </h2>

          <form className="modal-form" onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" />

            <label>Mobile Number</label>
            <input type="tel" placeholder="Enter mobile number" />

            <label>City Pincode</label>
            <input type="text" placeholder="Enter pincode" />

            <label>Select Your Device</label>
            <select>
              <option value="">Select device</option>
              <option>Mobile</option>
              <option>Laptop</option>
              <option>Tablet</option>
              <option>Other</option>
            </select>

            <label>Model Name / Model Number</label>
            <input type="text" placeholder="Enter model details" />

            <button type="submit" className="submit-btn">
              Repair Now
            </button>
          </form>
        </div>
      </div>

      {/* ✅ SUCCESS MODAL (ADD HERE) */}
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => {
          setShowSuccess(false);
          onClose(); // closes repair modal also
        }}
      />
    </>
  );
};

export default RepairModal;
