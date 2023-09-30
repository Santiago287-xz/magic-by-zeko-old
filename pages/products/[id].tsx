import { loadProductId, loadFullData } from "@/pages/api/loadProduct/route";
import ButtonCheckout from "@/components/buttonCheckout";
import { Navbar } from "@/components/navbar";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { type Product } from "@/pages/types.d";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/core";

export async function getStaticPaths() {
  const posts = await loadProductId();

  const paths = posts.map((post) => ({
    params: { id: post },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const productId = params.id;
  const products = await loadFullData();

  const others_products = [];
  let selected_product;

  for (const item of products) {
    if (item.id === productId) {
      selected_product = item;
    } else {
      others_products.push(item);
    }
  }

  return { props: { selected_product, others_products } };
}
export default function Page({
  selected_product,
  others_products,
}: {
  selected_product: Product;
  others_products: Array<Product>;
}) {
  const images = [
    selected_product.images[0],
    selected_product.metadata.image_1,
    selected_product.metadata.image_2,
    selected_product.metadata.image_3,
  ];
  return (
    <>
      <Navbar />
      <main className="flex justify-center content-center">
        <section className="flex justify-center items-center h-auto p-1 rounded-lg bg-foreground/10 w-fit m-auto">
          <article>
            <h3 className="font-bold text-1xl md:text-2xl lg:text-3xl text-foreground text-center">
              {selected_product.name}
            </h3>
            {others_products.map((product) => (
              <Link
                className="relative mt-8 bg-foreground/10 rounded-2xl w-[5rem]"
                href={"/products/" + product.id}
              >
                <Image
                  alt={product.name}
                  src={product.images[0]}
                  className="z-0 h-[14rem] object-cover hover:scale-105"
                />
              </Link>
            ))}
          </article>
          <div className="p-4 rounded-lg">
            <div className="max-w-[38rem] p-3 rounded-lg w-auto m-auto">
              <Splide aria-label="Products">
                {images.map((image_src) => (
                  <SplideSlide className="flex justify-center">
                    <Image
                      removeWrapper
                      alt={selected_product.name}
                      src={image_src}
                      className="z-0 object-cover w-auto h-[25rem]"
                    />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            <footer className="flex justify-around">
              <div className="m-8">
                <ButtonCheckout priceId={selected_product.default_price.id} />
              </div>
              <p className="text-xl text-foreground/70 grid">
                Total price
                <b className="text-red-500 text-lg line-through">
                  ${selected_product.default_price.unit_amount / 100 + 1000}
                </b>
                <b className="text-green-500 text-2xl">
                  ${selected_product.default_price.unit_amount / 100}
                </b>
              </p>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
