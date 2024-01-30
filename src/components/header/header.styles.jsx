import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 30px;
  z-index: 1;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 100px;

  svg {
    transition: all 0.5s ease;
    height: 60px;
    width: 60px;
  }

  &:hover {
    svg {
      transform: scale(1.11);
    }
  }
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 5px;
  }
`;