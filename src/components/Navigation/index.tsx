import React, { FC, useState } from "react";
import { NavBar, Logo, Burger, BurgerContainer, NavLinksDesktop, NavLinksMobile, StyledLink } from "./style";
import { ROUTERS } from "./../../constants";

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
