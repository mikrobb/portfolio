import React from "react";
import { Link } from "react-router-dom";
import "../CardsCss/SkillsPage.css";

export default function SkillsPage({
  getFromLocalStorage,
  theme,
  switcherBlack,
  switcherLight,
}) {
  return (
    <>
      <header>
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
              to="aboutPage"
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
              to="contactPage"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>
      <section className="skillsSection">
        <h1 className="titleSkills">Skills</h1>
      </section>
      <footer>
        <div>
          <div className="DevReact">@Developed in react</div>
          <div
            className="Switcher"
            onClick={theme.includes("light") ? switcherBlack : switcherLight}
          >
            {getFromLocalStorage("theme").includes("light")
              ? "Dark Theme"
              : "Light Theme"}
          </div>
        </div>
      </footer>
    </>
  );
}
