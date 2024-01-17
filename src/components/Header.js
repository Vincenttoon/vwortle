import React from "react";
import { GiChest } from "react-icons/gi";
import { FaGithubAlt } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-div">
      <div className="header-left">
        <a className="header-a" href="/">
          <GiChest className="header-icon left-icon" />
        </a>

        <a className="header-a" href="https://github.com/Vincenttoon/vwortle">
          <FaGithubAlt className="header-icon left-icon" />
        </a>
      </div>
      <div className="header-center">
        <a className="header-a" href="/">
          <nav>
            <h1>Vwortle</h1>
          </nav>
        </a>
      </div>
      <div className="header-right">
        <a className="header-a" href="/stats">
          <IoIosStats className="header-icon right-icon" />
        </a>

        <a className="header-a" href="https://vincent-toon-portfolio.vercel.app/">
          <FaUserTie className="header-icon right-icon" />
        </a>
      </div>
    </div>
  );
};

export default Header;
