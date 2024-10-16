import ButtonLink from "./ButtonLink";
import Center from "./Center";
import {
  Background,
  Columns,
  Description,
  Title,
  ColumnsWrapper,
  ButtonsWrapper,
} from "./FeaturedStyles";
import ButtonElement from "./Button";
import Cart from "./icons/Cart";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { signIn, useSession } from "next-auth/react";

const Featured = ({ featuredProduct }) => {
  const { addProduct } = useContext(CartContext);
  const { data: session } = useSession();

  const addProductToCart = () => {
    addProduct(featuredProduct._id);
  };

  return (
    <Background>
      <Center>
        <ColumnsWrapper>
          <Columns>
            <div>
              <Title>{featuredProduct.title}</Title>
              <Description>{featuredProduct.description}</Description>
              <ButtonsWrapper>
                <ButtonLink
                  white={1}
                  outline={1}
                  href={"/product/" + featuredProduct._id}
                >
                  Read More
                </ButtonLink>
                {!session ? (
                  <ButtonElement white={1} onClick={signIn}>
                    Sign in to add
                  </ButtonElement>
                ) : (
                  <ButtonElement white={1} onClick={addProductToCart}>
                    <Cart />
                    Add to Cart
                  </ButtonElement>
                )}
              </ButtonsWrapper>
            </div>
          </Columns>
          <Columns>
            <img
              src="https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png"
              alt="test"
            />
          </Columns>
        </ColumnsWrapper>
      </Center>
    </Background>
  );
};

export default Featured;
