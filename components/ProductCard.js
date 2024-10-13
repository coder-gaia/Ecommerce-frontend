import styled from "styled-components";
import ButtonElement from "./Button";
import Cart from "./icons/Cart";
import Link from "next/link";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const CardWrapper = styled.div``;

const WhiteCard = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  img {
    max-width: 100%;
    max-height: 80px;
  }
`;

const ProductInfo = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ProductTitle = styled(Link)`
  color: inherit;
  font-weight: normal;
  font-size: 0.9rem;
  margin: 0;
  text-decoration: none;
`;

const ProductCard = ({ _id, title, description, price, images }) => {
  const { addProduct } = useContext(CartContext);

  const url = `/product/` + _id;

  return (
    <CardWrapper>
      <WhiteCard href={url}>
        <div>
          <img src={images[0]} />
        </div>
      </WhiteCard>
      <ProductInfo>
        <ProductTitle href={url}>{title}</ProductTitle>
        <PriceRow>
          <Price>${price}</Price>
          <ButtonElement primary outline onClick={() => addProduct(_id)}>
            <Cart />
            <b>Add to cart</b>
          </ButtonElement>
        </PriceRow>
      </ProductInfo>
    </CardWrapper>
  );
};

export default ProductCard;
