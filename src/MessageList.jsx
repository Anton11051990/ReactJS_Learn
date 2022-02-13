import { useState } from "react";
import "./App.css";

const MessageList = () => {
  const [messages, setMessages] = useState([
    { _id: 1, text: "Hi", aftor: "bot" },
    { _id: 2, text: "React", aftor: "bot" },
    { _id: 3, text: "What is your name", aftor: "bot" },
    { _id: 4, text: "How are you", aftor: "bot" },
  ]);

  const arryMapItem = messages.map((item) => {
    return (
      <div className="text" key={item._id}>
        {item.aftor}: {item.text}
      </div>
    );
  });

  return <div className="box">{<>{arryMapItem}</>}</div>;
};

export default MessageList;
