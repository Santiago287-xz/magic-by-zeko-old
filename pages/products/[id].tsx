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
      <div className="relative rounded-[10px] bg-white w-full flex flex-col items-start justify-start pt-2.5 px-2.5 pb-[15px] box-border gap-[8px] text-left text-xs text-black font-inter">
        <div className="relative rounded-[5px] bg-gainsboro w-[146px] h-[99px]" />
        <div className="w-[146px] flex flex-col items-start justify-start gap-[5px]">
          <div className="self-stretch relative tracking-[-0.04em] font-medium font-dm-sans flex items-center h-[15px] shrink-0">
            Sofa SWLJK
          </div>
          <div className="self-stretch relative text-[8px] tracking-[-0.01em] leading-[10px] text-darkgray">
            3-seat sofa with chaise longue, Gunnared beige
          </div>
          <b className="relative tracking-[-0.01em] flex text-darksalmon items-center w-[83px] h-[18px] shrink-0">
            EGP 19,898
          </b>
        </div>
      </div>
    </>
  );
}
