import React from "react";

// components
import Channels from "../../components/Channels/Channels";

// js render css
import { ChannelsPageContainer } from "./styles";

const ChannelsPage = () => {
  return (
    <ChannelsPageContainer>
      <Channels />
    </ChannelsPageContainer>
  );
};

export default ChannelsPage;
