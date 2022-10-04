import React from "react";
import Footer from "../HtmlCards/Footer";
import Header from "../HtmlCards/Header";
import "../CardsCss/AboutPage.css";
import img from "../img/myPhoto.jpg";

export default function AboutPage({
  getFromLocalStorage,
  theme,
  switcherBlack,
  switcherLight,
}) {
  return (
    <>
      <Header getFromLocalStorage={getFromLocalStorage} />
      <section>
        <h1
          className={
            getFromLocalStorage("theme").includes("light")
              ? "titleSkills"
              : "titleSkills_Another"
          }
        >
          About
        </h1>
        <div className="aboutBlockMain">
          <div>
            <img className="imgAbout" src={img} alt="" />
          </div>
          <div>
            <div
              className={
                getFromLocalStorage("theme").includes("light")
                  ? "aboutBlockInfo"
                  : "aboutBlockInfo_Another"
              }
            >
              Hello, my name is Andrey Mechtanov and I am a beginner front-end
              react developer. I studied to be an electrician but decided to
              retrain as a programmer. I have no work experience yet, but I have
              a desire to develop in this area and learn quickly. When I moved
              to Kyiv, I worked at a construction site and at the same time
              studied all the subtleties of programming. In addition to React, I
              study English diligently and try to reach B1 level. For all
              studies The front-end created projects such as: 1.Online store,
              2.Air tickets website, 3.Movies website, and many other small
              projects. I worked with api requests, understood Sass and studied
              React. Already in childhood, I was closely connected with
              computers, so I already knew that I wanted to be a programmer. In
              a nutshell, I am ready to try in all aspects of this area
            </div>
            <div className="resumeButton">
              <a href="https://drive.google.com/file/d/1oLeh2VHAYRDdTGsLicY-Ha10fN5F7fCn/view?usp=sharing">
                Check Resume
              </a>
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
