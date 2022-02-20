import logo from "../logo.svg";
import "../App.css";
import "./messageList/MessageList.css";
import MessageList from "./messageList/MessageList";
import ChatList from "./chatList/ChatList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="item">
          <ChatList />
          <MessageList />
        </div>
      </header>
    </div>
  );
}

export default App;
