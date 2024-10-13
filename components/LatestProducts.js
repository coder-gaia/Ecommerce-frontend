import styled from "styled-components";
import Center from "./Center";
import ProductCard from "./ProductCard";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  padding-top: 30px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 30px 0 20px;
`;

const LatestProducts = ({ latestProducts }) => {
  return (
    <Center>
      <Title>Latest Products</Title>
      <ProductsGrid>
        {latestProducts.length > 0 &&
          latestProducts.map((product) => (
            <div key={product._id}>
              <ProductCard {...product} />
            </div>
          ))}
      </ProductsGrid>
    </Center>
  );
};

export default LatestProducts;
