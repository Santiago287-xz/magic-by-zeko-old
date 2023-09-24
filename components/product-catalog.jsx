import ProductCard from "@/components/product-card";

export default function ProductCatalog({ posts }) {
  return (
    <div
      className="flex flex-wrap flex-row content-center justify-center w-11/12"      
    >
      <h2 className="w-full text-3xl md:text-4xl lg:text-6xl mb-4">Products</h2>
      {posts.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
}
