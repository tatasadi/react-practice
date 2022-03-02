import { useState } from "react";

const Checkliste = (props) => {
  const [isCitizen, setIsCitizen] = useState(false);
  const [isOver21, setIsOver21] = useState(false);

  return (
    <>
      <div className="header">{props.title}</div>
      <div style={{ textAlign: "center" }}>
        {/* <Form.Check type="checkbox">
          <Form.Check.Input
            type="checkbox"
            onChange={(event) => setIsCitizen(event.target.checked)}
          />
          <Form.Check.Label>{`I'm a citizen.`}</Form.Check.Label>
        </Form.Check>
        <Form.Check type="checkbox">
          <Form.Check.Input
            type="checkbox"
            onChange={(event) => setIsOver21(event.target.checked)}
          />
          <Form.Check.Label>{`I'm over 21.`}</Form.Check.Label>
        </Form.Check> */}
        <div>Are you a citizen? {isCitizen ? "Yes" : "No"}</div>
        <div>Are you a over 21? {isOver21 ? "Yes" : "No"}</div>
      </div>
      <hr />
    </>
  );
};

export default Checkliste;
