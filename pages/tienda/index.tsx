import { loadFullData } from "@/pages/api/loadProduct/route"
import { type Product } from "@/pages/types.d";
import ProductCatalog from "@/components/product-catalog";

export async function getStaticProps() {
  const posts = await loadFullData();
  return { props: { posts } };
}

export default function Products({ posts }: { posts: Array<Product> }) {
  return (
    <main className="flex flex-wrap content-center justify-center h-screen gap-4">
      <ProductCatalog posts={posts} />
    </main>
  );
}