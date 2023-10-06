import { loadProductId, loadFullData } from "@/pages/api/loadProduct/route";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import ProductAllData from "@/components/product-all-data";
import IconsSection from "@/components/icons-section";
import SizeSection from "@/components/size-section";
import VideoSection from "@/components/video-section";
import { Divider } from "@nextui-org/react";
import { type Product } from "@/pages/types.d";

export async function getStaticPaths() {
  const posts = await loadProductId();

  const paths = posts.map((post) => ({
    params: { id: post },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const productId = params.id;
  const products = await loadFullData();

  const others_products = [];
  let selected_product;

  for (const item of products) {
    if (item.id === productId) {
      selected_product = item;
    } else {
      others_products.push(item);
    }
  }

  return { props: { selected_product, others_products } };
}
export default function Page({
  selected_product,
  others_products,
}: {
  selected_product: Product;
  others_products: Array<Product>;
}) {
  return (
    <>
      <Navbar />
      <main className="relative ">
        <ProductAllData
          selected_product={selected_product}
          others_products={others_products}
        />
        <Divider />
        <IconsSection />
        <Divider />
        <SizeSection image={selected_product.metadata.image_3} />
        <Divider />
        <VideoSection/>
      </main>
      <Footer />
    </>
  );
}
