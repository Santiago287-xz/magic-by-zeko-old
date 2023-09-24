import { loadProductId, loadProduct } from "@/pages/api/loadProduct/route";
import ButtonCheckout from "@/components/buttonCheckout";
import { CardHeader, Card, Image, CardFooter } from "@nextui-org/react";
import { type Product } from "@/pages/types.d";

export async function getStaticPaths() {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }
  const posts = await loadProductId();

  const paths = posts.map((post) => ({
    params: { id: post },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const productId = params.id;
  const product = await loadProduct(productId);
  return { props: { product } };
}

export default function Page({ product }: { product: Product }) {
  return (
    <section className="flex justify-center items-center h-screen">
      {/* <ProductCard key={product.id} product={product} /> */}
      <div className="max-w-[38rem] p-3 rounded-lg w-full">
        <Image
          removeWrapper
          alt={product.name}
          src={product.images[0]}
          className="z-0 w-full object-cover"
        />        
      </div>
      <article>
          <h3 className="font-bold text-1xl md:text-2xl lg:text-3xl text-slate-50 text-center">{product.name}</h3>
          <p>${product.default_price.unit_amount/100}</p>
          <ButtonCheckout priceId={product.default_price.id}/>
        </article>
    </section>
  );
}
