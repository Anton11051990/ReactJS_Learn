import logo from "./logo.svg";
import "./App.css";
import Message from "./Message";
import Forma from "./Forma";

const myName = "Anton";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message name={myName} />
        <Forma />
      </header>
    </div>
  );
};

export default App;
