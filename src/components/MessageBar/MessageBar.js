import React from "react";

// components
import MessageForm from "../MessageForm/MessageForm";

// js render css
import { MessageBarContainer } from "./styles";

const MessageBar = () => {
  return (
    <MessageBarContainer>
      <MessageForm />
    </MessageBarContainer>
  );
};

export default MessageBar;
