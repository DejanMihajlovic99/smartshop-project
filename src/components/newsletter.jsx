import { Send } from "@mui/icons-material";
import React from "react";
import "./newsletter.css";

function Newsletter() {
  return (
    <div className="newsletter">
      <h1 className="newsletter-h1">Obavještenja</h1>
      <div className="desc-p">
      <p>   Dobijajte obavještenja o vašim omiljenim proizvodima. </p>
      </div>
      <div className="input-container">
        <input placeholder="Vaš email" />
        <button className="btn-send">
          <Send />
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
