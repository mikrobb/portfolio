import React from "react";
import { Link } from "react-router-dom";
import "../CardsCss/MainHomePage.css";

export default function Header({ getFromLocalStorage }) {
  return (
    <header className="header">
      <div className="divHeader">
        <div>
          <Link
            className={
              getFromLocalStorage("theme").includes("light")
                ? "divHeader_blocks"
                : "divHeader_blocksAnother"
            }
            to="/"
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            className={
              getFromLocalStorage("theme").includes("light")
                ? "divHeader_blocks"
                : "divHeader_blocksAnother"
            }
            to="/skillPage"
          >
            Skills
          </Link>
        </div>
        <div>
          <Link
            className={
              getFromLocalStorage("theme").includes("light")
                ? "divHeader_blocks"
                : "divHeader_blocksAnother"
            }
            to="/aboutPage"
          >
            About
          </Link>
        </div>
        <div>
          <Link
            className={
              getFromLocalStorage("theme").includes("light")
                ? "divHeader_blocks"
                : "divHeader_blocksAnother"
            }
            to="/contactPage"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
