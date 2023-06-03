import "./accordion.css";
import "../table/table.css";
import AccordionTable from "./accordionTable/accordionTable";

const Accordion = ({ setAccordionOpened, accordionOpened, title }) => {
  const isOpened = title === accordionOpened;

  return (
    <div className="accordion">
      <div className="container__naming">
        <p className="container__text">{title}</p>
        <button  className="container__button" onClick={() => setAccordionOpened(title)}>
          {isOpened ? "∧" : "∨"}
        </button>
      </div>

      <div className={isOpened ? "show" : "accordian__content"}>
        <div className="container">
          <AccordionTable />
          <AccordionTable />
          <AccordionTable />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
