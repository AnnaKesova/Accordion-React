import React, { useState } from "react";
import logo from "./images/Logo Placeholder.svg";
import bell from "./images/Notification.svg";
import Dashboard from "./images/Icon.svg";
import "./App.css";
import Accordion from "./components/accordion/accordion";
import Table from "./components/table/table";

function App() {
  const [accordionOpened, setAccordionOpened] = useState(null);

  const toggleAccordionOpened = (title) => {
    if (accordionOpened === title) {
      console.log(title);
      setAccordionOpened(null);
    } else {
      setAccordionOpened(title);
    }
  };

  return (
    <div className="App">
      <header className="App-header header">
        <div className="header__naming">
          <img src={logo} className="header-logo" alt="logo" />
          <h1 className="header__title">Проект</h1>
        </div>
        <div className="header__about">
          <div className="header__bell"></div>
          <div className="header__ring"></div>
          <div className="header__description">
            <p className="header__username">Иванов В.А.</p>
            <p className="header__job">Должность</p>
          </div>
        </div>
      </header>
      <main className="content">
        <div className="content__image">
          <img src={Dashboard} className="content__photo" />
        </div>
        <div className="content__container container">
          <h2 className="container__title">Задачи</h2>
          <div className="container__tests tests">
            <Table />

            <Accordion
              title="Выполненные задачи"
              accordionOpened={accordionOpened}
              setAccordionOpened={toggleAccordionOpened}
            />
            <Accordion
              title="Задачи на сегодня"
              accordionOpened={accordionOpened}
              setAccordionOpened={toggleAccordionOpened}
            />
            <Accordion
              title="Предстоящие задачи"
              accordionOpened={accordionOpened}
              setAccordionOpened={toggleAccordionOpened}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
