import {
  Logo,
  NavButton,
  NavLinks,
  StyledHeader,
  StyledNav,
  Wrapper,
} from "./HeaderStyles";
import Center from "./Center";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import MenuIcon from "./icons/MenuIcon";

const Header = () => {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>
            <b>Ecommerce</b>
          </Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLinks href={"/"}>Home</NavLinks>
            <NavLinks href={"/products"}>All Products</NavLinks>
            <NavLinks href={"/account"}>Account</NavLinks>
            <NavLinks href={"/cart"}>
              Cart ({cartProducts && cartProducts.length})
            </NavLinks>
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
            <MenuIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
};

export default Header;
