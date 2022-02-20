import { useEffect, useState } from "react";
import { Fab, TextField } from "@mui/material";
import { Message } from "./message/message";
import Send from "@mui/icons-material/Send";

const MessageList = () => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, value: "Hi", author: "User" },
    { id: 2, value: "React", author: "bot" },
  ]);
  const handleClickMessag = () => {
    if (value) {
      setMessages((state) => [...state, { value, author: "User" }]);
      setValue("");
    }
  };
  useEffect(() => {
    const lastMessag = messages[messages.length - 1];
    let timer = null;
    if (lastMessag?.author === "User") {
      timer = setTimeout(() => {
        setMessages((state) => [
          ...state,
          { value: "Hello i am bot", author: "bot" },
        ]);
      }, 500);
    }
    return () => clearInterval(timer);
  }, [messages]);

  return (
    <>
      <div className="box-chat">
        <div className="item-Box">
          {messages.map((message, id) => (
            <Message key={id} message={message} />
          ))}
        </div>
        <div className="input-box">
          <TextField
            style={{ margin: "20px" }}
            value={value}
            id="outlined-basic"
            label="Введите сообщение ..."
            variant="outlined"
            onChange={(e) => setValue(e.target.value)}
          />
          <Fab color="primary" onClick={handleClickMessag}>
            <Send />
          </Fab>
        </div>
      </div>
    </>
  );
};

export default MessageList;
