import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.scss";
const Navigation = () => (
  <nav>
    <NavLink className="link" to="/">
      Home
    </NavLink>
    <NavLink className="link" to="/MentalHealth">
      Mental Health
    </NavLink>
    <NavLink className="link" to="/Prescription">
      Prescription Medication
    </NavLink>
  </nav>
);

export default Navigation;
