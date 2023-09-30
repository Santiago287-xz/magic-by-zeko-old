import ProductCard from "@/components/product-card";
import { Divider } from "@nextui-org/react";

export default function ProductCatalog({ posts }) {
  return (
    <div className="flex flex-wrap flex-row content-center justify-center w-11/12">
      <h2 className="w-full text-3xl md:text-4xl lg:text-6xl mb-4 flex justify-center">
        Products
      </h2>
      <Divider className="my-4" />
      {posts.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
}
