import Link from "next/link";
import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #222;
`;

export const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

export const NavLinks = styled(Link)`
  color: #aaa;
  text-decoration: none;
  transition: 0.5s all;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
`;
