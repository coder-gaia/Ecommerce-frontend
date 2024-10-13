import {
  Logo,
  NavLinks,
  StyledHeader,
  StyledNav,
  Wrapper,
} from "./HeaderStyles";
import Center from "./Center";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Header = () => {
  const { cartProducts } = useContext(CartContext);

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>
            <b>Ecommerce</b>
          </Logo>
          <StyledNav>
            <NavLinks href={"/"}>Home</NavLinks>
            <NavLinks href={"/products"}>All Products</NavLinks>
            <NavLinks href={"/categories"}>Categories</NavLinks>
            <NavLinks href={"/account"}>Account</NavLinks>
            <NavLinks href={"/cart"}>
              Cart ({cartProducts && cartProducts.length})
            </NavLinks>
          </StyledNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
};

export default Header;
