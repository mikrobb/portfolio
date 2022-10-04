import React from "react";
import Footer from "../HtmlCards/Footer";
import Header from "../HtmlCards/Header";
import "../CardsCss/SkillsPage.css";
import html from "../img/html.png";
import css from "../img/css.png";
import js from "../img/js.png";
import react from "../img/react.png";
import redux from "../img/redux.png";
import git from "../img/git.png";

export default function SkillsPage({
  getFromLocalStorage,
  theme,
  switcherBlack,
  switcherLight,
}) {
  return (
    <>
      <Header getFromLocalStorage={getFromLocalStorage} />
      <section className="skillsSection">
        <h1
          className={
            getFromLocalStorage("theme").includes("light")
              ? "titleSkills"
              : "titleSkills_Another"
          }
        >
          Proffesional Skills
        </h1>
        <div className="skillsBlock">
          <div className="skillLeftBlock">
            <div>
              <img className="pngSkillLeft" src={html} alt="" />
            </div>
            <div
              className={
                getFromLocalStorage("theme").includes("light")
                  ? "infoSkill"
                  : "infoSkill_Another"
              }
            >
              I started teaching at school. Then I went to annual courses and,
              as it seems, I learned it worthily. For a very long time I was
              engaged in layout (Over a year of study).
            </div>
          </div>
          <div className="skillRightBlock">
            <div
              className={
                getFromLocalStorage("theme").includes("light")
                  ? "infoSkill"
                  : "infoSkill_Another"
              }
            >
              With css things are the same as with html. Learned Sass but often
              use standard css. Designing websites has always been fun and
              interesting (Over a year of study).
            </div>
            <div>
              <img className="pngSkillRight" src={css} alt="" />
            </div>
          </div>
          <div className="skillLeftBlock">
            <div>
              <img className="pngSkillLeft" src={js} alt="" />
            </div>
            <div
              className={
                getFromLocalStorage("theme").includes("light")
                  ? "infoSkill"
                  : "infoSkill_Another"
              }
            >
              Js was very difficult at first, but after learning it became an
              integral part of my development. On pure Js, I made many small
              projects, but the main one was the online store (Over a year of
              study).
            </div>
          </div>
          <div className="skillRightBlock">
            <div
              className={
                getFromLocalStorage("theme").includes("light")
                  ? "infoSkill"
                  : "infoSkill_Another"
              }
            >
              I got acquainted with react not so long ago, but when studying, I
              tried 100%. Learned all the hooks and implemented the standard
              MovieDB movie catalog. When creating, I additionally used Redux.
              <a href="https://mikrobb.github.io/movie-project/#/">
                Click here to view
              </a>{" "}
              (without style) (Less than a year of study).
            </div>
            <div>
              <img className="pngSkillRight" src={react} alt="" />
            </div>
          </div>
          <div className="skillLeftBlock">
            <div>
              <img className="pngSkillLeft" src={redux} alt="" />
            </div>
            <div
              className={
                getFromLocalStorage("theme").includes("light")
                  ? "infoSkill"
                  : "infoSkill_Another"
              }
            >
              Immediately after React learned but not completely. With his help,
              I implemented MovieDB which you can see in the React section.
              Under full study.
            </div>
          </div>
          <div className="skillRightBlock">
            <div
              className={
                getFromLocalStorage("theme").includes("light")
                  ? "infoSkill"
                  : "infoSkill_Another"
              }
            >
              <a href="https://github.com/mikrobb">Click to check my GitHub</a>
            </div>
            <div>
              <img className="pngSkillRight" src={git} alt="" />
            </div>
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
