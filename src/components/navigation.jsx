import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a href="#page-top">
            <img src = "img/icon.svg" alt="STANKIN Icon" style={{width: '100'}}/>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
              Возможности
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                О ВУЗе
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
              Наши События
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                 Мнения
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Преподаватели
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
