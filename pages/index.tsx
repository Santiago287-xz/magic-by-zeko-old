import DefaultLayout from "@/layouts/default";
import ProductCatalog from "@/components/product-catalog";
import { loadFullData } from "@/pages/api/loadProduct/route";
import { type Product } from "@/pages/types.d";

export async function getStaticProps() {
  const posts = await loadFullData();
  return { props: { posts } };
}

export default function IndexPage({ posts }: { posts: Array<Product> }) {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 md:py-10">
        <ProductCatalog posts={posts} />
      </section>
    </DefaultLayout>
  );
}
