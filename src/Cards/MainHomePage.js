import React from "react";
import "../CardsCss/MainHomePage.css";
import img from "../img/myPhoto.jpg";
import { useState } from "react";

export default function HomePage() {
  function setToLocalStorage(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  if (getFromLocalStorage("theme").includes("light")) {
    document.getElementById("bodyMain").style.backgroundColor = "white";
  } else {
    document.getElementById("bodyMain").style.backgroundColor = "#2a2a2a";
  }

  const [theme, setTheme] = useState(getFromLocalStorage("theme") || "light");
  function switcherBlack() {
    setTheme("black");
    setToLocalStorage("theme", theme);
    console.log(theme);
    document.getElementById("bodyMain").style.backgroundColor = "#2a2a2a";
  }

  function switcherLight() {
    setTheme("light");
    setToLocalStorage("theme", theme);
    console.log(theme);
    document.getElementById("bodyMain").style.backgroundColor = "white";
  }

  return (
    <>
      <div className="background">
        <header>
          <div className="divHeader">
            <div
              className={
                getFromLocalStorage("theme").includes("light")
                  ? "divHeader_blocks"
                  : "divHeader_blocksAnother"
              }
            >
              Home
            </div>
            <div
              className={
                getFromLocalStorage("theme").includes("light")
                  ? "divHeader_blocks"
                  : "divHeader_blocksAnother"
              }
            >
              Skills
            </div>
            <div
              className={
                getFromLocalStorage("theme").includes("light")
                  ? "divHeader_blocks"
                  : "divHeader_blocksAnother"
              }
            >
              About
            </div>
            <div
              className={
                getFromLocalStorage("theme").includes("light")
                  ? "divHeader_blocks"
                  : "divHeader_blocksAnother"
              }
            >
              Contact
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
                  <a href="https://www.instagram.com/andrysha_666_/">
                    Instagram
                  </a>
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
      </div>
    </>
  );
}
