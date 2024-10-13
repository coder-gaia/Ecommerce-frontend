import ButtonElement from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Table from "@/components/Table";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  margin-top: 20px;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
  margin-top: 8px;
`;

const ProductImgCard = styled.div`
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 80px;
    max-height: 80px;
  }
`;

const QuantityLabel = styled.label`
  padding: 0 3px;
`;

const CartPage = () => {
  const { cartProducts, addProduct, removeProduct } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios
        .post("/api/cart", {
          ids: cartProducts,
        })
        .then((response) => {
          setProducts(response.data);
        });
    }
  }, [cartProducts]);

  const moreOfThisProduct = (productId) => {
    addProduct(productId);
  };

  const lessOfThisProduct = (productId) => {
    removeProduct(productId);
  };

  let total = 0;

  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  return (
    <div>
      <Header />
      <Center>
        <ColumnsWrapper>
          <Box>
            <h2>Cart</h2>
            {!cartProducts?.length && <h2>Your cart is empty.</h2>}
            {products?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <ProductInfoCell>
                        <ProductImgCard>
                          <img src={product.images[0]} />
                        </ProductImgCard>
                        {product.title}
                      </ProductInfoCell>
                      <td>
                        <ButtonElement
                          onClick={() => lessOfThisProduct(product._id)}
                        >
                          -
                        </ButtonElement>
                        <QuantityLabel>
                          {
                            cartProducts.filter((id) => id === product._id)
                              .length
                          }
                        </QuantityLabel>
                        <ButtonElement
                          onClick={() => moreOfThisProduct(product._id)}
                        >
                          +
                        </ButtonElement>
                      </td>
                      <td>
                        $
                        {cartProducts.filter((id) => id === product._id)
                          .length * product.price}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td>Total:</td>
                    <td></td>
                    <td>${total}</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </Box>

          {!!cartProducts.length && (
            <Box>
              <h2>Checkout</h2>
              <input type="text" placeholder="Address" />
              <ButtonElement black block size={"l"}>
                Continue to payment
              </ButtonElement>
            </Box>
          )}
        </ColumnsWrapper>
      </Center>
    </div>
  );
};

export default CartPage;
