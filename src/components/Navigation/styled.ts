import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SPAN_BURGER_HEIGHT = '4px';
const AFTER_BURGER_HEIGHT = '2px';

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => `${theme.margins.s} ${theme.margins.l}`};
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => `${theme.boxShadow.xss} ${theme.boxShadow.xs} ${theme.boxShadow.s} `}
    ${({ theme }) => theme.colors.black};
  position: relative;
  z-index: 1001;
`;

export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
  margin: ${({ theme }) => theme.margins.xsss};
  line-height: ${({ theme }) => theme.lineHeight.m};
`;

export const NavLinksDesktop = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap.s};

  @media (${({ theme }) => theme.media.medium}) {
    display: none;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const NavLinksMobile = styled.div<{ open: boolean }>`
  display: none;

  @media (${({ theme }) => theme.media.medium}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 100%;
    padding: ${({ theme }) => theme.margins.s};

    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    z-index: 1000;

    box-shadow: ${({ theme }) => theme.boxShadow.s} ${({ theme }) => theme.colors.black};
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
  }
`;

export const BurgerContainer = styled.div`
  display: none;
  @media (${({ theme }) => theme.media.medium}) {
    display: block;
    cursor: pointer;
  }
`;

export const Burger = styled.div<{ open: boolean }>`
  width: ${({ theme }) => theme.sizeOfElement.xs};
  height: ${({ theme }) => theme.sizeOfElement.xss};
  position: relative;

  span {
    display: block;
    position: absolute;
    height: ${SPAN_BURGER_HEIGHT};
    width: ${({ theme }) => theme.width.max};
    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.xss};
    transition: 0.3s ease-in-out;
  }

  span:nth-child(1) {
    top: ${({ theme }) => theme.margins.xsss};
    transform: ${({ open }) => (open ? 'rotate(45deg) translate(7px, 7px)' : 'rotate(0)')};
  }

  span:nth-child(2) {
    top: ${({ theme }) => theme.margins.s};
    opacity: ${({ open }) => (open ? 0 : 1)};
  }

  span:nth-child(3) {
    top: ${({ theme }) => theme.margins.l};
    transform: ${({ open }) => (open ? 'rotate(-45deg) translate(7px, -7px)' : 'rotate(0)')};
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.xl};
  line-height: ${({ theme }) => theme.lineHeight.m};
  position: relative;

  &::after {
    content: '';
    display: block;
    width: ${({ theme }) => theme.width.max};
    height: ${AFTER_BURGER_HEIGHT};
    background-color: white;
    position: absolute;
    bottom: -2px;
    left: ${({ theme }) => theme.margins.xsss};
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media (${({ theme }) => theme.media.medium}) {
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: ${({ theme }) => theme.lineHeight.xs};
  }
`;
