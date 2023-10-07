import React from "react";

import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
  Link,
  Divider,
} from "@nextui-org/react";

export default function GaleryPics() {
  const data = [
    {
      span: "What to watch",
      h4: "Stream the Acme event",
      grid: "sm:col-span-4",
      fotter: null,
      image:
        "https://media.discordapp.net/attachments/1019381524149305426/1158942654290198608/383162541_989308819007485_5003126494186252870_n.png?ex=651e14f4&is=651cc374&hm=8f18f12e5d84e3dea6732824d1f2e7d63d80bf35b6f300b3bcc4c90d8d34781e&=&width=710&height=473",
    },
    {
      span: "What to watch",
      h4: "Stream the Acme event",
      grid: "sm:col-span-4",
      fotter: null,
      image:
        "https://media.discordapp.net/attachments/1019381524149305426/1158942646392328313/353938720_238323222290388_7248262119145319501_n.png?ex=651e14f3&is=651cc373&hm=40393b7435d9b56af1eb8f21ef0f79cdd430e512813af4fc4a0e9442dc34771b&=&width=710&height=473",
    },
    {
      span: "What to watch",
      h4: "Stream the Acme event",
      grid: "sm:col-span-4",
      fotter: null,
      image:
        "https://cdn.discordapp.com/attachments/1019381524149305426/1158942640331559072/241000452_286164432842830_258918370102960266_n.png?ex=651e14f1&is=651cc371&hm=bee9304ecd5a40d83dd05e5d8a92e33b0f81eb91ff5bc7bd2c2a234d0d379121&",
    },
    {
      span: "What to watch",
      h4: "Stream the Acme event",
      grid: "sm:col-span-5",
      fotter: null,
      image:
        "https://media.discordapp.net/attachments/1019381524149305426/1158943348384612412/342364813_1227742087880024_791470389807022684_n.png?ex=651e159a&is=651cc41a&hm=4d4c665b616c5d8af79bc40cd4918e45f8e0a8e4bdabf5ba7a6340b83340979e&=&width=476&height=473",
    },
    {
      span: "What to watch",
      h4: "Stream the Acme event",
      grid: "sm:col-span-7",
      fotter: null,
      image:
        "https://media.discordapp.net/attachments/1019381524149305426/1160271244692836352/Fotodesk.png?ex=65340dcd&is=652198cd&hm=d93141a9ab91e1a39631e8c9249e02697f192e7602a450eb6987e136e1f5c928&=&width=841&height=473",
    },
  ];
  return (
    <section className="w-full bg-[#2b2b2b] dark:bg-[#0b0b0b]">
      <Divider />
      <div className="w-11/12 m-auto">
          <div className="flex flex-col w-4/5 m-auto">
            <h2 className="w-full text-center sm:text-start text-4xl md:text-3xl lg:text-5xl py-8 sm:pb-2 text-zinc-200">
              Galeria
            </h2>
            <p className="md:text-lg lg:text-xl text-zinc-400 hidden sm:flex flex-col pb-8">
            Experiencia gaming óptima, descubre nuestros:
              <span className="font-medium text-zinc-200">
                Mouse Pads de calidad
              </span>
            </p>
          </div>
        </div>
      <main className="max-w-[900px] w-4/5 gap-2 grid grid-cols-12 grid-rows-2 pb-16 mx-auto justify-center">
        {data.map((cart) => (
          <Card
            key={cart.image}
            className={"col-span-12 h-[300px] " + cart.grid}
          >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <span className="text-tiny text-white/60 uppercase font-bold">
                {cart.span}
              </span>
              <h4 className="text-white font-medium text-large">{cart.h4}</h4>
            </CardHeader>
            <Link href="/tienda" className="w-full h-full">
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover hover:scale-105"
                src={cart.image}
              />
            </Link>
            {cart.fotter ? (
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                  <div className="flex flex-col">
                    <p className="text-tiny text-white/60">{cart.fotter[0]}</p>
                    <p className="text-tiny text-white/60">{cart.fotter[1]}</p>
                  </div>
                </div>
                <Button radius="full" size="sm">
                  {cart.fotter[2]}
                </Button>
              </CardFooter>
            ) : null}
          </Card>
        ))}
      </main>
    </section>
  );
}
