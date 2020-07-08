import React from "react";

// redux
import { connect } from "react-redux";
import { toggleSidenav } from "../../redux/sidenav/sidenav.actions";

// js render css
import {
  HeaderContainer,
  HeaderContent,
  HeaderNavButton,
  HeaderMenuIcon
} from "./styles";

const Header = ({ toggleSidenav }) => {
  return (
    <HeaderContainer position="static">
      <HeaderContent>
        <HeaderNavButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => toggleSidenav()}
        >
          <HeaderMenuIcon />
        </HeaderNavButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default connect(null, { toggleSidenav })(Header);
