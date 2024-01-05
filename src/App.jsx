import "./App.css";
import logo from '@img/orange-logo.png'; 
import Home from "@pages/home";
import NavBtn from "./components/navBtn";
import { useState } from "react";


function App() {
  const [scroll,setScroll] = useState(false);
  const changeColor = ()=> {
    if(window.scrollY >= 90) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  window.addEventListener('scroll',changeColor)

  return (
    <div className="app">
      <header className="app__header">
        <div className={scroll ? "header__container scrolled":"header__container"}>
          <div className="header__icon">
            <img src={logo} alt="logo"/>
          </div>
          <nav className="header__navigation">
          <a className="nostyle prevent-select" href="#home">
              Home
            </a>
            <a className="nostyle prevent-select" href="#about">
              About
            </a>
            <a className="nostyle prevent-select" href="#skill">
              Skill
            </a>
            <a className="nostyle prevent-select" href="#projects">
              Projects
            </a>
            <a className="nostyle prevent-select" href="#contact">
              Contact
            </a>
          </nav>
          <div>
            <NavBtn text="Dowload CV"/>
          </div>
        </div>
      </header>
      <Home />
    </div>
  );
}

export default App;
