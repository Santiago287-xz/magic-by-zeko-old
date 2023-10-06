import ProductCard from "@/components/product-card";
import { Divider } from "@nextui-org/react";

export default function ProductCatalog({ posts }) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 md:pb-12">
      <div className="flex flex-wrap flex-row content-center justify-center w-11/12">
        <h2 className="w-full text-3xl md:text-4xl lg:text-6xl flex justify-center pb-12">
          Productos
        </h2>
        {posts.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </section>
  );
}
