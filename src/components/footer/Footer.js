import React from "react";
import "./style.css";
import { FaRobot } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <FaRobot className="icon" />
      <p className="created">
        Created by <span className="signature">SashkaChi.</span> &copy;{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
