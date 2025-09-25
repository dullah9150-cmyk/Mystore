import React from "react";
import "./Whatsapp.css";

const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/9150917667?text=Hello%20I%20am%20interested%20in%20your%20services!"
      className="whatsapp-alert-bubble"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp-bubble-icon"
      />
      <span className="whatsapp-bubble-text">
        💬 Chat with us on WhatsApp!
      </span>
    </a>
  );
};

export default Whatsapp;
