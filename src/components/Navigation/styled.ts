import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => `${theme.margins.s} ${theme.margins.l}`};
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 2px 4px ${({ theme }) => theme.colors.black};
`;

export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: bold;
  margin: ${({ theme }) => theme.margins.xsss};
  line-height: ${({ theme }) => theme.lineHeight.m};
`;

export const NavLinksDesktop = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap.s};

  @media (${({ theme }) => theme.media.medium}) {
    display: none;
  }
`;

export const NavLinksMobile = styled.div<{ open: boolean }>`
  display: none;

  @media (${({ theme }) => theme.media.medium}) {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-height: ${({ open }) => (open ? '200px' : '0')};
    transition:
      max-height 0.3s ease-in-out,
      padding 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors.secondary};
    width: ${({ theme }) => theme.width.max};
    padding: ${({ open, theme }) =>
      open
        ? `${theme.margins.s} ${theme.margins.xsss}`
        : `${theme.margins.s} ${theme.margins.xsss}`};
    align-items: center;
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
  width: 30px;
  height: 24px;
  position: relative;

  span {
    display: block;
    position: absolute;
    height: 4px;
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
  font-size: ${({ theme }) => theme.fontSize.xxl};
  line-height: ${({ theme }) => theme.lineHeight.m};
  position: relative;

  &::after {
    content: '';
    display: block;
    width: ${({ theme }) => theme.width.max};
    height: 2px;
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
    font-size: ${({ theme }) => theme.fontSize.l};
    line-height: ${({ theme }) => theme.lineHeight.xs};
  }
`;
