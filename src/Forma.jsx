import "./App.css";
import React, { useState } from "react";

const Forma = () => {
  const [messagelist, setMessageList] = useState([
    {
      text: "Hi",
      autor: "bot",
    },
    {
      text: "Как дела",
      autor: "I am",
    },
    {
      text: "Хорошо",
      autor: "bot",
    },
  ]);
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="counter-button">Отправить</button>
    </div>
  );
};

export default Forma;
