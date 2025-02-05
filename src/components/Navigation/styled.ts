import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #3e50b5;
  padding: 10px 20px;
  color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  line-height: 52.02px;
`;

export const NavLinksDesktop = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 450px) {
    display: none;
  }
`;

export const NavLinksMobile = styled.div<{ open: boolean }>`
  display: none;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-height: ${({ open }) => (open ? '200px' : '0')};
    transition:
      max-height 0.3s ease-in-out,
      padding 0.3s ease-in-out;
    background-color: #3e50b5;
    width: 100%;
    padding: ${({ open }) => (open ? '10px 0' : '0 10px')};
    align-items: center;
  }
`;

export const BurgerContainer = styled.div`
  display: none;
  @media (max-width: 450px) {
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
    width: 100%;
    background: white;
    border-radius: 2px;
    transition: 0.3s ease-in-out;
  }

  span:nth-child(1) {
    top: 0;
    transform: ${({ open }) => (open ? 'rotate(45deg) translate(7px, 7px)' : 'rotate(0)')};
  }

  span:nth-child(2) {
    top: 10px;
    opacity: ${({ open }) => (open ? 0 : 1)};
  }

  span:nth-child(3) {
    top: 20px;
    transform: ${({ open }) => (open ? 'rotate(-45deg) translate(7px, -7px)' : 'rotate(0)')};
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 36px;
  line-height: 52.02px;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: white;
    position: absolute;
    bottom: -2px;
    left: 0;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 450px) {
    font-size: 24px;
    line-height: 32px;
  }
`;
