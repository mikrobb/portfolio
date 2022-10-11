import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import HomePage from "./Cards/MainHomePage";
import SkillsPage from "./Cards/SkillsPage";
import { useState } from "react";
import AboutPage from "./Cards/AboutPage";
import ContactPage from "./Cards/ContactPage";

function setToLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

if (!getFromLocalStorage("theme")) {
  setToLocalStorage("theme", "light");
}

function App() {
  const [theme, setTheme] = useState(getFromLocalStorage("theme") || "light");

  if (getFromLocalStorage("theme").includes("light")) {
    document.getElementById("bodyMain").style.backgroundColor = "white";
  } else {
    document.getElementById("bodyMain").style.backgroundColor = "#2a2a2a";
  }

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
      <HashRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomePage
                setToLocalStorage={setToLocalStorage}
                getFromLocalStorage={getFromLocalStorage}
                theme={theme}
                setTheme={setTheme}
                switcherBlack={switcherBlack}
                switcherLight={switcherLight}
              />
            }
          />
          <Route
            path="/skillPage"
            element={
              <SkillsPage
                setToLocalStorage={setToLocalStorage}
                getFromLocalStorage={getFromLocalStorage}
                theme={theme}
                setTheme={setTheme}
                switcherBlack={switcherBlack}
                switcherLight={switcherLight}
              />
            }
          />
          <Route
            path="/aboutPage"
            element={
              <AboutPage
                setToLocalStorage={setToLocalStorage}
                getFromLocalStorage={getFromLocalStorage}
                theme={theme}
                setTheme={setTheme}
                switcherBlack={switcherBlack}
                switcherLight={switcherLight}
              />
            }
          />
          <Route
            path="/contactPage"
            element={
              <ContactPage
                setToLocalStorage={setToLocalStorage}
                getFromLocalStorage={getFromLocalStorage}
                theme={theme}
                setTheme={setTheme}
                switcherBlack={switcherBlack}
                switcherLight={switcherLight}
              />
            }
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
