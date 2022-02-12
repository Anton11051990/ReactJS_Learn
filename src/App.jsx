import logo from "./logo.svg";
import "./App.css";
import Message from "./Message";
import { useState } from "react";

const App = () => {
  // const [messageList, setMessageList] = useState([
  //   { text: "Hi", aftor: "bot" },
  // ]);
  // const [count, setCount] = useState([]);

  const [state, setState] = useState([]);
  function handleClick() {
    setState([...state, input]);
  }
  function handleInput(e) {
    setInput(e.target.value);
  }
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span></span>
        <Message />
      </header>
      <div>
        <input value={input} onChange={handleInput} />
        <button onClick={handleClick}>Click</button>
        <h1>
          {state.map(function (el) {
            return <div>{el}</div>;
          })}
        </h1>
      </div>
    </div>
  );
};

export default App;
