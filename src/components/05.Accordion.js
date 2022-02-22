import { useState } from "react";

const AccorionElement = (props) => {
  const [active, setActive] = useState(false);
  const accordionClass = active ? "accordion active" : "accordion";
  return (
    <div>
      <div className={accordionClass} onClick={(event) => setActive(!active)}>
        {props.title}
      </div>
      <div
        className="accordion-body"
        style={{ display: active ? "block" : "none" }}
      >
        {props.body}
      </div>
    </div>
  );
};

const Accordion = (props) => {
  return (
    <>
      <div className="header">{props.title}</div>
      <div style={{ textAlign: "center" }}>
        <AccorionElement
          title="First Accordion"
          body="Here is some text for the first accordion."
        />
        <AccorionElement
          title="Secont Accordion"
          body="Here is some text for the second accordion."
        />
      </div>
      <hr />
    </>
  );
};

export default Accordion;
