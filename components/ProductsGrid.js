import styled from "styled-components";
import ProductCard from "./ProductCard";

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding-top: 30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ProductsGrid = ({ products }) => {
  return (
    <StyledProductsGrid>
      {products.length > 0 &&
        products.map((product) => (
          <div key={product._id}>
            <ProductCard {...product} />
          </div>
        ))}
    </StyledProductsGrid>
  );
};

export default ProductsGrid;
