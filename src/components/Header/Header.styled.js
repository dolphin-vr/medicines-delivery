import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "../Icon/Icon";

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1100;
  width: 1440px;
  height: 48px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing(10)};
  display: flex;
  gap: ${({ theme }) => theme.spacing(46)};
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.normalBtn};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SvgIcon = styled(Icon)`
  width: 48px;
  height: 48px;
  /* outline: 1px solid orange; */
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  padding: 0 ${({ theme }) => theme.spacing(4)};
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  fill: ${({ theme }) => theme.colors.normalBtn};
  transition: color ${({ theme }) => theme.effect.cubic}, background-color ${({ theme }) => theme.effect.cubic};
  &:hover {
    color: ${({ theme }) => theme.colors.activeBtn};
    background-color: ${({ theme }) => theme.colors.scrollgray};
    fill: ${({ theme }) => theme.colors.activeBtn};
  }
`;

export const MainNav = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(8)};
  font-size: 18px;
`;

export const NavItem = styled.li``;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(2)};
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.lightblack};
  transition: color ${({ theme }) => theme.effect.cubic}, background-color ${({ theme }) => theme.effect.cubic};
  &:hover {
    color: ${({ theme }) => theme.colors.activeBtn};
    background-color: ${({ theme }) => theme.colors.hoverBgr};
  }
  &.active {
    color: ${({ theme }) => theme.colors.normalBtn};
  }
`;
