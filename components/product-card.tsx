import React from "react";
import {
  CardHeader,
  Card,
  Image,
  CardFooter,
  Button,
  Link,
} from "@nextui-org/react";
import { type Product } from "@/pages/types.d";
import ButtonCheckout from "@/components/buttonCheckout";
import ProductModal from "@/components/product-modal";

export default function ProductCard({ data }: { data: Product }) {
  return (
    <>
      <div key={data.id} className="m-4">
        <div className="font-medium inline m-auto text-center">
          <p className="uppercase text-m tracking-[0.16em]">{data.name}</p>
          <h3 className="text-2xl font-normal">{data.metadata.product_tipe}</h3>
        </div>
        <Link className="relative mt-10 bg-foreground/10 rounded-2xl w-[19rem]" href={'/products/' + data.id}>
          <b className="absolute top-[-.5rem] left-[50%] bg-background text-foreground p-2 px-4 rounded-3xl flex items-center translate-x-[-50%] translate-y-[-50%]">
            <span>$</span>
            <span>{data.default_price.unit_amount/100}</span>
          </b>
          <Image
            alt={data.name}
            src={
              "https://static.wixstatic.com/media/77fa16_4116e9eb34fa49bf97a7fe6f78defae9~mv2.png/v1/fill/w_625,h_625,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/77fa16_4116e9eb34fa49bf97a7fe6f78defae9~mv2.png"
            }
            className="z-0 h-4/5 object-cover"
          />
        </Link>
      </div>
    </>
  );
}
