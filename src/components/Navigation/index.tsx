import React, { FC, useState } from 'react';

import { ROUTERS } from '@/constants';
import * as S from './styled';

export const Navigation: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <S.NavBar>
        <S.Logo>Modsen Todo list</S.Logo>
        <S.BurgerContainer onClick={() => setMenuOpen((prev) => !prev)}>
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
        <S.StyledLink to={ROUTERS.home} onClick={() => setMenuOpen(false)}>
          Home
        </S.StyledLink>
        <S.StyledLink to={ROUTERS.settings} onClick={() => setMenuOpen(false)}>
          Settings
        </S.StyledLink>
      </S.NavLinksMobile>
    </>
  );
};
