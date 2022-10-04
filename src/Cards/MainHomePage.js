import React from "react";
import "../CardsCss/MainHomePage.css";
import img from "../img/myPhoto.jpg";
import Header from "../HtmlCards/Header";
import Footer from "../HtmlCards/Footer";

export default function HomePage({
  getFromLocalStorage,
  theme,
  switcherBlack,
  switcherLight,
}) {
  return (
    <>
      <Header getFromLocalStorage={getFromLocalStorage} />
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
      <Footer
        getFromLocalStorage={getFromLocalStorage}
        theme={theme}
        switcherBlack={switcherBlack}
        switcherLight={switcherLight}
      />
    </>
  );
}
