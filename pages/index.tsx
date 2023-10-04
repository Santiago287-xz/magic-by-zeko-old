import DefaultLayout from "@/layouts/default";
import ProductCatalog from "@/components/product-catalog";
import GaleryPics from "@/components/galery-section";
import { loadFullData } from "@/pages/api/loadProduct/route";
import { type Product } from "@/pages/types.d";

export async function getStaticProps() {
  const posts = await loadFullData();
  return { props: { posts } };
}

export default function IndexPage({ posts }: { posts: Array<Product> }) {
  return (
    <DefaultLayout>      
      <ProductCatalog posts={posts} />
      <GaleryPics/>
    </DefaultLayout>
  );
}
