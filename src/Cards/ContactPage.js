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
      <section></section>
      <Footer
        getFromLocalStorage={getFromLocalStorage}
        theme={theme}
        switcherBlack={switcherBlack}
        switcherLight={switcherLight}
      />
    </>
  );
}
