import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';

const SPAN_BURGER_HEIGHT = '4px';
const AFTER_BURGER_HEIGHT = '2px';

export const NavBar = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
    box-shadow: ${theme.boxShadow.xss} ${theme.boxShadow.xs} ${theme.boxShadow.s}
      ${theme.colors.black};
    position: sticky;
    z-index: 1001;
  `}
`;

export const Logo = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.xl};
    font-weight: bold;
    margin: ${theme.margins.xsss};
    margin-left: ${theme.margins.m};
    line-height: ${theme.lineHeight.m};
  `}
`;

export const NavLinksDesktop = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.gap.s};

    @media (${theme.media.medium}) {
      display: none;
      font-size: ${theme.fontSize.s};
    }
  `}
`;

export const NavLinksMobile = styled.div<{ open: boolean }>`
  ${({ theme, open }) => css`
    display: none;

    @media (${theme.media.medium}) {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: ${theme.colors.secondary};
      width: 100%;
      padding: ${theme.margins.s};

      position: fixed;
      top: ${theme.margins.xxl};
      left: 0;
      right: 0;
      z-index: 1000;

      box-shadow: ${theme.boxShadow.s} ${theme.colors.black};
      transition: transform 0.3s ease-in-out;
      transform: ${open ? 'translateY(0)' : 'translateY(-100%)'};
    }
  `}
`;

export const BurgerContainer = styled.div`
  ${({ theme }) => css`
    display: none;
    @media (${theme.media.medium}) {
      display: block;
      cursor: pointer;
    }
  `}
`;

export const Burger = styled.div<{ open: boolean }>`
  ${({ theme, open }) => css`
    width: ${theme.sizeOfElement.xs};
    height: ${theme.sizeOfElement.xss};
    position: relative;

    span {
      display: block;
      position: absolute;
      height: ${SPAN_BURGER_HEIGHT};
      width: ${theme.width.max};
      background: ${theme.colors.primary};
      border-radius: ${theme.borderRadius.xss};
      transition: 0.3s ease-in-out;
    }

    span:nth-child(1) {
      top: ${theme.margins.xsss};
      transform: ${open ? 'rotate(45deg) translate(7px, 7px)' : 'rotate(0)'};
    }

    span:nth-child(2) {
      top: ${theme.margins.s};
      opacity: ${open ? 0 : 1};
    }

    span:nth-child(3) {
      top: ${theme.margins.l};
      transform: ${open ? 'rotate(-45deg) translate(7px, -7px)' : 'rotate(0)'};
    }
  `}
`;

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-decoration: none;
    font-size: ${theme.fontSize.xl};
    line-height: ${theme.lineHeight.m};
    position: relative;
    margin-right: ${theme.margins.m};

    &::after {
      content: '';
      display: block;
      width: ${theme.width.max};
      height: ${AFTER_BURGER_HEIGHT};
      background-color: white;
      position: absolute;
      bottom: -2px;
      left: ${theme.margins.xsss};
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    &:hover::after {
      transform: scaleX(1);
    }

    @media (${theme.media.medium}) {
      font-size: ${theme.fontSize.m};
      line-height: ${theme.lineHeight.xs};
    }
  `}
`;
