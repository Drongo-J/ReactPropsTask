import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="logo-container">
        <img onClick={() => {window.location.reload()}}
          src="https://media.aykhan.net/assets/icons/cpluslogo.svg"
          alt="Cinema Logo"
        />
      </div>

      <div className="row-container">
        <div className="row">
          <ul>
            <li>Platinum</li>
            <li>Dolby Atmos</li>
            <li>Services</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="row">
        <ul>
            <li className="second-row-item">Home</li>
            <li className="second-row-item">Campaigns</li>
            <li className="second-row-item">Tariffs</li>
            <li className="second-row-item">Cine Bonus Loyalty</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
