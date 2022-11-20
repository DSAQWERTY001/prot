import React, { memo } from "react";
import "../styles/footer.scss";
import { IoArrowUpCircle } from "react-icons/io5";

import { Github ,Facebook} from "@icons-pack/react-simple-icons";
const Footer = memo(({ handleScroll }) => {
  return (
    <footer className="footer-section">
      <div className="footer-contents"> 
        <a href="https://github.com/" style={{"margin":"10px"}}>
          <Github color="#000" size={30} />
        </a>
        <a href="https://www.facebook.com/teerapong.tuem/" style={{"margin":"10px"}}>
          <Facebook color="#000" size={30} />
        </a>
      </div>
    </footer>
  );
});

export default Footer;
