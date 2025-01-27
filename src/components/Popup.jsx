import React from "react";
import "../styles/Popup.scss";

const Popup = ({ message, type, onClose }) => {
    return (
        <div className={`popup-container ${type}`}>
            <div className="popup">
                <p>{message}</p>
                <button onClick={onClose} className="close-button">
                    Close
                </button>
            </div>
        </div>
    );
};

export default Popup;
