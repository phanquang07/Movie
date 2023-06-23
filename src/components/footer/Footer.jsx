import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className="socialIcons">
          <Link to="https:fb.com" target="_blank" className="icon">
            <FaFacebookF />
          </Link>
          <Link to="https:instagram.com" target="_blank" className="icon">
            <FaInstagram />
          </Link>
          <Link to="https:twitter.com" target="_blank" className="icon">
            <FaTwitter />
          </Link>
          <Link to="https:linkedin.com" target="_blank" className="icon">
            <FaLinkedin />
          </Link>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
