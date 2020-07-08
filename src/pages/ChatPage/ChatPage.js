import React from "react";

// components
import MessageBar from "../../components/MessageBar/MessageBar";
import Messages from "../../components/Messages/Messages";

// js rendering css
import { ChatPageContainer } from "./styles";

const ChatPage = () => {
  return (
    <ChatPageContainer>
      <Messages />
      <MessageBar />
    </ChatPageContainer>
  );
};

export default ChatPage;
