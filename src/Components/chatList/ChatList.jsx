import { List, ListItem, ListItemText } from "@mui/material";
import React, { useState } from "react";
import "./chatStyle.css";

const ChatList = () => {
  const [chats] = useState([
    { id: 668, title: "Room1" },
    { id: 48, title: "Room2" },
    { id: 447, title: "Room3" },
  ]);

  const airyChatsList = chats.map((item) => {
    return (
      <ListItem key={item.id}>
        <div>
          <ListItemText primary={item.title} />
        </div>
      </ListItem>
    );

  });

  return <List className="box">{airyChatsList}</List>;
};

export default ChatList;
