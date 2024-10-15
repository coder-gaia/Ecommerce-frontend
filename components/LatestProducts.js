import styled from "styled-components";
import Center from "./Center";
import ProductsGrid from "./ProductsGrid";

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 30px 0 20px;
`;

const LatestProducts = ({ latestProducts }) => {
  return (
    <Center>
      <Title>Latest Products</Title>
      <ProductsGrid products={latestProducts} />
    </Center>
  );
};

export default LatestProducts;
