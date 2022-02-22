import React, { useState } from "react";

function SelfIncreaseButton() {
  const [counter, setCounter] = useState(1);
  const handleClick = () => setCounter(counter + 1);
  return <button onClick={handleClick}>{counter}</button>;
}

function LabelIncreaseButton(props) {
  const handleClick = () => props.onClick(props.increment);
  return <button onClick={handleClick}>+{props.increment}</button>;
}

function Display(props) {
  return <div>{props.message}</div>;
}

function Basics() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) =>
    setCounter(counter + incrementValue);
  return (
    <>
      <hr />
      <div className="header">Basics</div>
      <div>
        <SelfIncreaseButton />
      </div>
      <div>
        <LabelIncreaseButton onClick={incrementCounter} increment={1} />
        <LabelIncreaseButton onClick={incrementCounter} increment={5} />
        <LabelIncreaseButton onClick={incrementCounter} increment={10} />
        <LabelIncreaseButton onClick={incrementCounter} increment={100} />
        <Display message={counter} />
      </div>
      <hr />
    </>
  );
}

export default Basics;
