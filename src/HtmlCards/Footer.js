import React from "react";
import "../CardsCss/MainHomePage.css";

export default function Footer({
  theme,
  switcherBlack,
  switcherLight,
  getFromLocalStorage,
}) {
  return (
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
  );
}
