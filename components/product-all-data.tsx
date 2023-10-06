import ProductCartSplide from "@/components/product-card-splide";

import Link from "next/link";
import { type Product } from "@/pages/types.d";
import MailForm from "@/components/mail-form";


import { Image, Divider } from "@nextui-org/react";

export default function ProductAllData({
  selected_product,
  others_products,
}: {
  selected_product: Product;
  others_products: Array<Product>;
}) {
  const custom_data_names =
    selected_product.metadata.custom_data_names.split(";");
  const custom_data = selected_product.metadata.custom_data.split(";");

  return (
    <section className="flex justify-center flex-wrap flex-col-reverse lg:flex-row md:flex-nowrap items-start p-4 rounded-lg w-full xl:w-4/5 m-auto">
      <ProductCartSplide selected_product={selected_product} />
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
        <Divider />
        <h4 className="pt-4 text-center font-medium text-lg">Seleccionar Color</h4>
        <div className="flex flex-col gap-4 justify-center items-center sm:flex-row sm:gap-4 sm:justify-evenly">
          {others_products.map((product) => (
            <div
              key={product.id}
              className="relative rounded-2xl w-full sm:w-[19rem]"
            >
              <Link className="mt-8 rounded-2xl" href={"/tienda/" + product.id}>
                <Image
                  alt={product.name}
                  src={product.images[0]}
                  className="z-0 h-4/5 object-cover"
                />
                <b className="absolute w-max z-10 bottom-0 left-1/2 -translate-x-1/2 text-foreground-700 p-1 px-4 rounded-3xl flex items-center sm:text-base text-sm">
                  <span>{product.name}</span>
                </b>
              </Link>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
