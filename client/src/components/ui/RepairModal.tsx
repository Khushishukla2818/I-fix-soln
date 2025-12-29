import React, { useState } from "react";
import "./RepairModal.css";
import SuccessModal from "./SuccessModal";

type RepairModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const RepairModal: React.FC<RepairModalProps> = ({ isOpen, onClose }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [cityPincode, setCityPincode] = useState("");
  const [device, setDevice] = useState("");
  const [modelNumber, setModelNumber] = useState("");

  const isFormValid =
    fullName.trim() !== "" &&
    mobileNumber.trim() !== "" &&
    cityPincode.trim() !== "" &&
    device.trim() !== "" &&
    modelNumber.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setShowSuccess(true);
    }
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
            <input
              type="text"
              placeholder="Enter your name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <label>Mobile Number</label>
            <input
              type="tel"
              placeholder="Enter mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />

            <label>City Pincode</label>
            <input
              type="text"
              placeholder="Enter pincode"
              value={cityPincode}
              onChange={(e) => setCityPincode(e.target.value)}
            />

            <label>Select Your Device</label>
            <select value={device} onChange={(e) => setDevice(e.target.value)}>
              <option value="">Select device</option>
              <option value="Mobile">Mobile</option>
              <option value="Laptop">Laptop</option>
              <option value="Tablet">Tablet</option>
              <option value="Other">Other</option>
            </select>

            <label>Model Name / Model Number</label>
            <input
              type="text"
              placeholder="Enter model details"
              value={modelNumber}
              onChange={(e) => setModelNumber(e.target.value)}
            />

            <button
              type="submit"
              className={`submit-btn ${isFormValid ? "" : "submit-btn-disabled"}`}
              disabled={!isFormValid}
            >
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
