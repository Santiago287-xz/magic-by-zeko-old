import {
  loadProductId,
  loadFullData,
} from "@/pages/api/loadProduct/route";
import ButtonCheckout from "@/components/buttonCheckout";
import { Navbar } from "@/components/navbar";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { type Product } from "@/pages/types.d";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/core';

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
  return (
    <>
      <Navbar />
      <main className="flex justify-center content-center">
        <section className="flex justify-center items-center h-auto p-1 rounded-lg bg-foreground/10 w-fit m-auto">
          <div className="flex flex-wrap p-4 gap-8 rounded-lg">
            <article>
              <h3 className="font-bold text-1xl md:text-2xl lg:text-3xl text-foreground text-center">
                {selected_product.name}
                <p className="text-xl text-foreground/70">
                  ${selected_product.default_price.unit_amount / 100}
                </p>
              </h3>
              <div className="m-8">
                <ButtonCheckout priceId={selected_product.default_price.id} />
              </div>
            </article>
            <div className="max-w-[38rem] p-3 rounded-lg w-auto m-auto">
              <Splide aria-label="My Favorite Images">
                <SplideSlide>

                  <Image
                    removeWrapper
                    alt={selected_product.name}
                    src={selected_product.images[0]}
                    className="z-0 object-cover w-auto"
                  />

                </SplideSlide>

                <SplideSlide>

                  <Image
                    removeWrapper
                    alt={selected_product.metadata.image_1}
                    src={selected_product.images[0]}
                    className="z-0 object-cover w-auto"
                  />

                </SplideSlide>

              </Splide>
            </div>
          </div>
          <footer>
            {others_products.map((product) => (
              <Link
                className="relative mt-8 bg-foreground/10 rounded-2xl w-[5rem]"
                href={"/products/" + product.id}
              >
                <Image
                  alt={product.name}
                  src={product.images[0]}
                  className="z-0 h-64 object-cover hover:scale-105"
                />
              </Link>
            ))}
          </footer>
        </section>
      </main>
    </>
  );
}