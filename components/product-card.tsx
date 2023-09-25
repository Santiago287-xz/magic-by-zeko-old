import React from "react";
import { CardHeader, Card, Image, CardFooter } from "@nextui-org/react";
import { type Product } from "@/pages/types.d";
import ButtonCheckout from "@/components/buttonCheckout";
import ProductModal from "@/components/product-modal";

export default function ProductCard({ data }: { data: Product }) {
  return (
    <div className="flex flex-col max-w-[22rem] p-3 rounded-lg w-full">
      <div key={data.id}>
        <Card
          isFooterBlurred
          className="col-span-12 sm:col-span-4 h-[300px] mt-16"
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p
              className={
                "text-tiny uppercase font-bold " +
                (data.metadata.image_color == "white"
                  ? "text-black/60"
                  : "text-white/70")
              }
            >
              {data.name}
            </p>
            <h4
              className={
                "font-medium text-large " +
                (data.metadata.image_color == "white"
                  ? "text-black/60"
                  : "text-white/70")
              }
            >
              ${data.default_price.unit_amount / 100}
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt={data.name}
            src={data.images[0]}
            className="z-0 w-full h-full object-cover"
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-black/80">{data.name}</p>
            {/* <ButtonCheckout priceId={data.default_price.id}/> */}
            <ProductModal priceId={data.default_price.id} data={data}/>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
