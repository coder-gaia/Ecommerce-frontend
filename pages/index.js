import Featured from "@/components/Featured";
import Header from "@/components/Header";
import LatestProducts from "@/components/LatestProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function Home({ featuredProduct, latestProducts }) {
  return (
    <div>
      <Header />
      <Featured featuredProduct={featuredProduct} />
      <LatestProducts latestProducts={latestProducts} />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "6709ab6e293c68eec1ba2c05";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const latestProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });

  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      latestProducts: JSON.parse(JSON.stringify(latestProducts)),
    },
  };
}
