import styled from "styled-components";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

export const HeaderContainer = styled(AppBar)`
  grid-column: full-start / full-end !important;
  height: 6rem !important;
  box-shadow: 0rem 0rem 0.4rem var(--cl-shadow);

  & > div {
    height: 100%;
    align-content: center;
    display: flex;
    min-height: 0rem;
  }
`;

export const HeaderContent = styled(Toolbar)``;

export const HeaderNavButton = styled(IconButton)`
  margin-right: auto !important;
`;

export const HeaderMenuIcon = styled(MenuRoundedIcon)`
  font-size: 3rem !important;
`;
