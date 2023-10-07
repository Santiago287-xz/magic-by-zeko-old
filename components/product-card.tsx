import React from "react";
import { Image, Link } from "@nextui-org/react";
import { type Product } from "@/pages/types.d";

export default function ProductCard({ data }: { data: Product }) {
  return (
    <>
      <div
        key={data.id}
        className="m-4 p-4 w-full sm:w-auto rounded-2xl bg-white dark:bg-zinc-900"
      >
        <div className="font-medium inline m-auto text-center">
          <p className="uppercase text-m tracking-[0.16em]">{data.name}</p>
          <h3 className="text-4xl font-normal">{data.metadata.product_tipe}</h3>
        </div>
        <Link
          className="relative mt-8 bg-foreground/10 rounded-2xl sm:w-[19rem] w-full"
          href={"/tienda/" + data.id}
        >
          <b
            className="bg-zinc-950 text-white border-white dark:border-zinc-900  border-5
          py-1 px-4 rounded-3xl flex items-center translate-x-[-50%] translate-y-[-50%] absolute top-[-.5rem] left-[50%]"
          >
            <span>$</span>
            <span>{data.default_price.unit_amount / 100}</span>
          </b>
          <Image
            alt={data.name}
            src={data.images[0]}
            className="z-0 h-4/5 object-cover hover:scale-105"
          />
        </Link>
      </div>
    </>
  );
}
