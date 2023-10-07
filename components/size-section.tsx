import { Image } from "@nextui-org/react";

export default function SizeSection({ image }: { image: string }) {
  return (
    <section className="bg-gradient-to-b from-foreground/10 to-foreground/5 flex justify-center">
      <main className="flex justify-evenly flex-col md:flex-row w-4/5 md:w-full py-8">
        <article>
          <div className="my-4">
            <span className="font-bold md:m-0 text-md md:text-xl lg:text-2xl text-center text-foreground-500">
              Tamaño
            </span>
            <h3 className="font-bold text-xl md:text-2xl lg:text-4xl">
              Grande
            </h3>
          </div>
          <ul className="justify-center flex flex-col gap-4 md:gap-16 h-3/5">
            <li>Ancho: 420mm</li>
            <li>Alto: 420mm</li>
            <li>Expesor: 4.5mm</li>
          </ul>
        </article>
        <div>
          <Image alt={image} src={image} className="h-auto max-h-[500px] my-8 object-contain" />
        </div>
        <div>
          <span className="font-bold text-md md:text-xl lg:text-2xl text-foreground-500">
            Garantia
          </span>
          <h3 className="font-bold text-xl md:text-2xl lg:text-4xl">
            6 Meses
          </h3>
        </div>
      </main>
    </section>
  );
}
