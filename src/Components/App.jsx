import logo from "../logo.svg";
import "../App.css";
import "./messageList/MessageList.css";
import ChatList from "./chatList/ChatList";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { List, ListItem } from "@mui/material";
import theme from "../theme/theme";
import { ThemeProvider } from "@mui/private-theming";
import Client from "./pages/Client";
import MessageList from "./messageList/MessageList";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ThemeProvider theme={theme}>
        <div className="box-container">
          <div>
            <List className="box-list">
              <ListItem>
                <Link to="/">Home</Link>
              </ListItem>
              <ListItem>
                <Link to="chats">Chats</Link>
              </ListItem>
              <ListItem>
                <Link to="client">Client</Link>
              </ListItem>
            </List>
          </div>

          <div className="box-list">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="chats" element={<MessageList />} />
              <Route path="client" element={<Client />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
