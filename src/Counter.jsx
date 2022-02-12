import "./App.css";
import React, { useState } from "react";

const Counter = () => {
  //   const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const updeteValue = (event) => {
    setValue(event.target.value);
    console.log(event);
  };

  return <div></div>;
};

export default Counter;
