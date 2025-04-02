import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsAppButton.scss"; 

const WhatsAppButton = () => {
  const phoneNumber = "9573773418"; 
  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className="whatsapp-button" onClick={openWhatsApp}>
        
      <FaWhatsapp size={30} />
    </div>
  );
};

export default WhatsAppButton;
