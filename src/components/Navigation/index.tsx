import React, { FC, useState } from "react";

import { ROUTERS } from "./../../constants";
import { Burger, BurgerContainer, Logo, NavBar, NavLinksDesktop, NavLinksMobile, StyledLink } from "./style";

export const Navigation: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <NavBar>
        <Logo>Modsen Todo list</Logo>
        <BurgerContainer onClick={() => setMenuOpen((prev) => !prev)}>
          <Burger open={menuOpen}>
            <span />
            <span />
            <span />
          </Burger>
        </BurgerContainer>
        <NavLinksDesktop>
          <StyledLink to={ROUTERS.home}>Home</StyledLink>
          <StyledLink to={ROUTERS.settings}>Settings</StyledLink>
        </NavLinksDesktop>
      </NavBar>
      <NavLinksMobile open={menuOpen}>
        <StyledLink to={ROUTERS.home} onClick={() => setMenuOpen(false)}>
          Home
        </StyledLink>
        <StyledLink to={ROUTERS.settings} onClick={() => setMenuOpen(false)}>
          Settings
        </StyledLink>
      </NavLinksMobile>
    </>
  );
};
