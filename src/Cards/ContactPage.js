import React from "react";
import Footer from "../HtmlCards/Footer";
import Header from "../HtmlCards/Header";
import "../CardsCss/ContactPage.css";

export default function ContactPage({
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
          Contact Me
        </h1>
        <form
          action="https://app.form2chat.io/f/17133913"
          id="contact-form"
          method="POST"
          accept-charset="UTF-8"
          className="formContact"
        >
          <input
            className="inputContact"
            type="text"
            name="name"
            placeholder="Type Your Name"
          />
          <br />
          <input
            className="inputContact"
            type="email"
            name="email"
            placeholder="Type Your Email"
          />
          <br />
          <textarea
            className="textAreaContect"
            cols="30"
            rows="10"
            placeholder="Some Text"
            name="text"
          ></textarea>
          <br />
          <button className="buttonContact" type="submit">
            Send
          </button>
          <div id="submit-result"></div>
        </form>
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
