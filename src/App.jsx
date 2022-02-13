import logo from "./logo.svg";
import "./App.css";
import MessageList from "./MessageList";

const App = () => {
  // const [state, setState] = useState([]);
  // function handleClick() {
  //   setState([...state, input]);
  // }
  // function handleInput(e) {
  //   setInput(e.target.value);
  // }
  // const [input, setInput] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MessageList />
      </header>
      {/* <div>
        <input value={input} onChange={handleInput} />
        <button onClick={handleClick}>Click</button>
        <h1>
          {state.map(function (el) {
            return <div>{el}</div>;
          })}
        </h1>
      </div> */}
    </div>
  );
};

export default App;
