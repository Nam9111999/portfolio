import "./App.css";
import logo from '@img/orange-logo.png'; 
import Home from "@pages/home";
import Test from "./pages/test";


function App() {
  return (
    <div className="app">
      <header className="app__header">
        <div className="header__container">
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
        </div>
      </header>
      <Test />
    </div>
  );
}

export default App;
