import Center from "@/components/Center";
import Header from "@/components/Header";
import PageTitle from "@/components/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";
import { Box } from "../cart";
import ProductImages from "@/components/ProductImages";
import ButtonElement from "@/components/Button";
import Cart from "@/components/icons/Cart";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import { signIn, useSession } from "next-auth/react";
import { AccountBox } from "../account";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px 0;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.7fr;
    gap: 40px;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Price = styled.span`
  font-size: 1.4rem;
`;

const ProductPage = ({ product }) => {
  const { addProduct } = useContext(CartContext);
  const { data: session, status } = useSession();

  const addProductToCart = () => {
    addProduct(product._id);
  };

  return (
    <>
      <>
        <Header />
        <Center>
          <ColWrapper>
            <Box>
              <ProductImages images={product.images} />
            </Box>
            <div>
              <PageTitle>{product?.title}</PageTitle>
              <p>{product.description}</p>
              <PriceWrapper>
                <Price>${product.price}</Price>
                <div>
                  {!session ? (
                    <>
                      <ButtonElement
                        white={1}
                        primary={1}
                        onClick={() => signIn()}
                      >
                        Sign in to add
                      </ButtonElement>
                    </>
                  ) : (
                    <>
                      <ButtonElement
                        white={1}
                        primary={1}
                        onClick={addProductToCart}
                      >
                        <Cart />
                        Add to cart
                      </ButtonElement>
                    </>
                  )}
                </div>
              </PriceWrapper>
            </div>
          </ColWrapper>
        </Center>
      </>
    </>
  );
};

export const getServerSideProps = async (context) => {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
};

export default ProductPage;
