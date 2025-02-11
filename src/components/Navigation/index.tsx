import React, { FC, useState } from 'react';
import { ROUTERS } from '@/public/constants';

import * as S from './styled';

const toggleMenu = (setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>) => () =>
  setMenuOpen((prev) => !prev);

const closeMenu = (setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>) => () =>
  setMenuOpen(false);

export const Navigation: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <S.NavBar>
        <S.Logo>Modsen Todo list</S.Logo>
        <S.BurgerContainer onClick={toggleMenu(setMenuOpen)}>
          <S.Burger open={menuOpen}>
            <span />
            <span />
            <span />
          </S.Burger>
        </S.BurgerContainer>
        <S.NavLinksDesktop>
          <S.StyledLink to={ROUTERS.home}>Home</S.StyledLink>
          <S.StyledLink to={ROUTERS.settings}>Settings</S.StyledLink>
        </S.NavLinksDesktop>
      </S.NavBar>
      <S.NavLinksMobile open={menuOpen}>
        <S.StyledLink to={ROUTERS.home} onClick={closeMenu(setMenuOpen)}>
          Home
        </S.StyledLink>
        <S.StyledLink to={ROUTERS.settings} onClick={closeMenu(setMenuOpen)}>
          Settings
        </S.StyledLink>
      </S.NavLinksMobile>
    </>
  );
};
