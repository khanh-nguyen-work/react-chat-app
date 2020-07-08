import styled, { css } from "styled-components";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";

const getHomeColor = ({ path }) => {
  if (path === "") {
    return `fill: var(--cl-primary) !important;`;
  }
  return ``;
};

const getChannelsColor = ({ path }) => {
  if (path === "channels") {
    return `fill: var(--cl-primary) !important;`;
  }
  return ``;
};

const getChatColor = ({ path }) => {
  if (path === "chat") {
    return `fill: var(--cl-primary) !important;`;
  }
  return ``;
};

const sharedIconStyles = css`
  padding-top: 0.2rem;
  font-size: 4rem !important;
  transition: color 0.3s !important;

  @media only screen and (max-width: 360px) {
    font-size: 3rem !important;
  }

  &:hover {
    color: var(--cl-primary);
  }
`;

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0rem;
  width: 100vw;
  grid-column: full-start / full-end;
  height: 6rem;
  box-shadow: 0rem 0rem 0.4rem var(--cl-shadow);

  & > div {
    height: 100%;
    align-content: center;
    display: flex;
    justify-content: center;
    background-color: var(--cl-white);
  }
`;

export const FooterNavHomeIcon = styled(HomeRoundedIcon)`
  ${sharedIconStyles}
  ${getHomeColor}
`;

export const FooterNavChannelsIcon = styled(AppsRoundedIcon)`
  ${sharedIconStyles}
  ${getChannelsColor}
`;

export const FooterNavChatIcon = styled(ChatBubbleOutlineRoundedIcon)`
  ${sharedIconStyles}
  ${getChatColor}
`;

export const FooterNavigation = styled(BottomNavigation)``;

export const FooterNavAction = styled(BottomNavigationAction)`
  padding: 0 !important;

  &:hover
    ${FooterNavHomeIcon},
    &:hover
    ${FooterNavChannelsIcon},
    &:hover
    ${FooterNavChatIcon} {
    color: var(--cl-primary);
  }
`;
