import React from "react";

// components
import Channel from "../Channel/Channel";

// js render css
import { ChannelsCollectionContainer } from "./styles";

const ChannelsCollection = ({ channels }) => {
  return (
    <ChannelsCollectionContainer>
      {channels.map((channel, i) => {
        const { name } = channel;
        return <Channel key={name + i} channel={channel} />;
      })}
    </ChannelsCollectionContainer>
  );
};

export default ChannelsCollection;
