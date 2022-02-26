import { List, ListItem, ListItemText } from "@mui/material";
import React, { useState } from "react";
import "../messageList/MessageList.css";

import "./chatStyle.css";

const ChatList = () => {
  const [chats] = useState([
    { id: 668, title: "Room1" },
    { id: 48, title: "Room2" },
    { id: 447, title: "Room3" },
  ]);

  return (
    <>
      <List
        className="box"
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        <ListItem className="room">
          {chats.map((item) => {
            return <ListItemText key={item.id}>{item.title}</ListItemText>;
          })}
        </ListItem>
      </List>
    </>
  );
};

export default ChatList;
