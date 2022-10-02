import React from "react";
import "../CardsCss/MainHomePage.css";
import img from "../img/myPhoto.jpg";
import { Link } from "react-router-dom";

export default function HomePage({
  getFromLocalStorage,
  theme,
  switcherBlack,
  switcherLight,
}) {
  return (
    <>
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
              to="skillPage"
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
      <section className="sectionMain">
        <div className="sectionMain_Block">
          <div className="sectionBlock">
            <div className="sectionBlock_message">Hello! I am</div>
            <div
              className={
                getFromLocalStorage("theme").includes("light")
                  ? "sectionBlock_Name"
                  : "sectionBlock_Name_Another"
              }
            >
              Andrey Mechtanov
            </div>
            <div className="sectionBlock_Dev">Front-end developer</div>
            <div className="sectionBlock_Links">
              <div className="sectionBlock_Links_Link">
                <a href="https://www.linkedin.com/in/andrey-mechtanov-1b21bb22b/">
                  LinkedIn
                </a>
              </div>
              <div className="sectionBlock_Links_Link">
                <a href="https://github.com/mikrobb">GitHub</a>
              </div>
              <div className="sectionBlock_Links_Link">
                <a href="https://t.me/Mikrob_b">Telegram</a>
              </div>
              <div className="sectionBlock_Links_Link">
                <a href="https://www.instagram.com/andrysha_666_/">Instagram</a>
              </div>
            </div>
          </div>
          <div className="sectionImg">
            <img className="sectionImg_Photo" src={img} alt="" />
          </div>
        </div>
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
