import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/core";

import { Image } from "@nextui-org/react";
import ButtonCheckout from "@/components/button-checkout";

import { type Product } from "@/pages/types.d";

export default function ProductCard({
  selected_product,
}: {
  selected_product: Product;
}) {
  const images = [
    selected_product.metadata.image_1,
    selected_product.metadata.image_2,
    selected_product.images[0],
  ];
  return (
    <div className="rounded-lg mt-8 mx-auto">
      <div className="max-w-[38rem] rounded-lg w-auto m-auto">
        <Splide aria-label="Products">
          {images.map((image_src, i) => (
            <SplideSlide key={image_src + i} className="flex justify-center">
              <Image
                removeWrapper
                alt={selected_product.name}
                src={image_src}
                className="z-0 object-cover w-auto max-h-[28rem]"
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
  );
}