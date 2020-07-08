import React from "react";

// components
import Message from "../Message/Message";

// js render css
import { MessagesCollectionContainer } from "./styles";

export const MessagesCollection = ({ messages, userId }) => {
  return (
    <MessagesCollectionContainer>
      {messages.map((message, i) => (
        <Message {...message} userId={userId} key={message.user.uid + i} />
      ))}
    </MessagesCollectionContainer>
  );
};

export default MessagesCollection;
