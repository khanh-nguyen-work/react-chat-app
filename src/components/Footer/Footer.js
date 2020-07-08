import React from "react";
import { withRouter } from "react-router-dom";

// js render css
import {
  FooterContainer,
  FooterNavHomeIcon,
  FooterNavChannelsIcon,
  FooterNavChatIcon,
  FooterNavigation,
  FooterNavAction
} from "./styles";

const Footer = ({ location, history }) => {
  const path = location.pathname.slice(1);
  return (
    <FooterContainer>
      <FooterNavigation>
        <FooterNavAction
          label="Home"
          value="home"
          onClick={() => {
            history.push("/");
          }}
          icon={<FooterNavHomeIcon path={path} />}
        />
        <FooterNavAction
          label="Channels"
          value="channels"
          onClick={() => {
            history.push("/channels");
          }}
          icon={<FooterNavChannelsIcon path={path} />}
        />

        <FooterNavAction
          label="Chat"
          value="chat"
          onClick={() => {
            history.push("/chat");
          }}
          icon={<FooterNavChatIcon path={path} />}
        />
      </FooterNavigation>
    </FooterContainer>
  );
};

export default withRouter(Footer);
