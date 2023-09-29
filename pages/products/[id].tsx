import { loadProductId, loadProduct } from "@/pages/api/loadProduct/route";
import ButtonCheckout from "@/components/buttonCheckout";
import { Navbar } from "@/components/navbar";
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
    <>
      <Navbar />
      <section className="flex justify-center items-center h-[91vh]">
        <div className="flex flex-wrap p-4 rounded-lg">
          <div className="max-w-[38rem] p-3 rounded-lg w-auto m-auto">
            <Image
              removeWrapper
              alt={product.name}
              src={product.images[0]}
              className="z-0 object-cover w-auto"
            />
            {/* <Image
              removeWrapper
              alt={product.name}
              src={product.metadata.image_1}
              className="z-0 object-cover w-auto"
            /> */}
          </div>
          <article>
            <h3 className="font-bold text-1xl md:text-2xl lg:text-3xl text-foreground text-center">
              {product.name}
              <p className="text-xl text-foreground/70">
                ${product.default_price.unit_amount / 100}
              </p>
            </h3>
            <ButtonCheckout priceId={product.default_price.id} />
          </article>
        </div>
      </section>
    </>
  );
}
