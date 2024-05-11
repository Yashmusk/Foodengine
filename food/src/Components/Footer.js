import { Typography, Grid, Container } from "@mui/material";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-grid">
      <div className="list-container">
        <ul className="list2">
          <li className="headings">FOODENGINE</li>
          <li>ABOUT US</li>
          <li>CAREERS</li>
          <li>TEAM</li>
          <li>FOODENGINE FAMILY</li>
        </ul>
      </div>
      <div className="list-container">
        <ul className="list3">
          <li className="headings">CONTACT</li>
          <li className="items1">HELP & SUPPORT</li>
          <li className="items1">PARTNER WITH US</li>
        </ul>
      </div>

      <div className="list-container">
        <ul className="list1">
          <li className="headings">LEGAL</li>
          <li>TERMS AND CONDITIONS</li>
          <li>COOKIE POLICY</li>
          <li>REFUND POLICY</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
