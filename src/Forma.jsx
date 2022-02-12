import "./App.css";
import React, { useState } from "react";

const Forma = () => {
  const [value, setValue] = useState("");
  console.log(value);
  const updeteValue = (e) => {
    setValue(e.target.value);
    console.log();
  };

  return (
    <div>
      <input type="text" value={value} onChange={updeteValue} />
      <button className="counter-button">Отправить</button>
    </div>
  );
};

export default Forma;
