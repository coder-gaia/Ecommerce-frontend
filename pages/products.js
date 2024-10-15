import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import PageTitle from "@/components/Title";

import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

const ProductsPage = ({ products }) => {
  return (
    <>
      <Header />
      <Center>
        <PageTitle>All Products</PageTitle>
        <ProductsGrid products={products} />
      </Center>
    </>
  );
};

export const getServerSideProps = async () => {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
};

export default ProductsPage;
