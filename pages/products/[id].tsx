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
  const custom_data_names =
    selected_product.metadata.custom_data_names.split(";");
  const custom_data = selected_product.metadata.custom_data.split(";");
  // document.body.className = "bg-foreground/5";
  return (
    <>
      <Navbar />
      <main className="relative ">
        <section className="flex justify-center flex-wrap flex-col-reverse lg:flex-row md:flex-nowrap items-start p-4 rounded-lg w-auto md:w-4/5 m-auto">
          <article className="p-8 w-[95%] lg:w-1/2 m-auto">
            <div>
              {custom_data_names.map((custom_data_name, i) => (
                <div key={custom_data_name + i}>
                  <h4 className="p-3 text-xl">{custom_data_name}</h4>
                  <p className="bg-foreground/5 text-foreground-600 rounded-md py-3 px-6">
                    {custom_data[i]}
                  </p>
                </div>
              ))}
            </div>
            <h4 className="pt-4 pl-4 text-lg">Others Products</h4>
            <div className="flex gap-4 justify-evenly">
              {others_products.map((product) => (
                <div
                  key={product.id}
                  className="m-4 p-4 rounded-2xl dark:bg-foreground-50 bg-foreground-200"
                >
                  <Link
                    className="relative mt-8 rounded-2xl w-[19rem]"
                    href={"/products/" + product.id}
                  >
                    <b className="absolute z-10 w-max left-[50%] dark:bg-foreground-50 bg-foreground-200 text-foreground-700 p-1 px-4 rounded-3xl flex items-center translate-x-[-50%] translate-y-[-50%]">
                      <span>{product.name}</span>
                    </b>
                    <Image
                      alt={product.name}
                      src={product.images[0]}
                      className="z-0 h-4/5 object-cover hover:scale-[1.03] bg-foreground/10"
                    />
                  </Link>
                </div>
              ))}
            </div>
            <ul className="list-disc p-6 text-foreground-600">
              <li>Envíos express a todo el país</li>
              <li>Nos encontramos en CABA.</li>
              <li>Emitimos factura A y B</li>
              <li>Garantia 6 Meses</li>
            </ul>
          </article>
          <div className="rounded-lg mt-8 mx-auto">
            <div className="text-center">
              <span className="uppercase text-xl tracking-[0.16em] text-foreground-500">
                {selected_product.name}
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal">
                {selected_product.metadata.product_tipe}
              </h3>
            </div>
            <div className="max-w-[38rem] rounded-lg w-auto m-auto">
              <Splide aria-label="Products">
                {images.map((image_src, i) => (
                  <SplideSlide
                    key={image_src + i}
                    className="flex justify-center"
                  >
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
            <footer className="flex justify-around p-4">
              <div className="flex content-end flex-wrap">
                <ButtonCheckout priceId={selected_product.default_price.id} />
              </div>
              <p className="text-xl text-foreground/70 grid text-end">
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
