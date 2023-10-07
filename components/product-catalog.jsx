import ProductCard from "@/components/product-card";

export default function ProductCatalog({ posts }) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 md:pb-12">
      <div className="flex flex-wrap flex-row content-center justify-center w-11/12">
        <div className="w-full">
          <div className="flex flex-col w-4/5 m-auto">
            <h2 className="w-full text-center sm:text-start text-4xl md:text-4xl lg:text-6xl pb-8 sm:pb-2">
              Productos
            </h2>
            <p className="text-xl md:text-1xl lg:text-2xl pb-8 text-foreground-500 hidden sm:flex flex-col">
              La elección perfecta para gamers y profesionales:{" "}
              <span className="font-medium text-foreground-600">
                Mouse Pads de calidad
              </span>
            </p>
          </div>
        </div>
        {posts.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </section>
  );
}
