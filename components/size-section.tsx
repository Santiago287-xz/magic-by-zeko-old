import { Image } from "@nextui-org/react";

export default function MailForm({ image }: { image: string }) {
  return (
    <section className="bg-gradient-to-b from-foreground/10 to-foreground/5">
    <main className="flex justify-center py-8">
    <div>
      <div>
        <span className="font-bold text-md md:text-xl lg:text-2xl text-center text-foreground-500">
          Tamaño
        </span>
        <h3 className="font-bold text-xl md:text-2xl lg:text-4xl text-center">
          Grande
        </h3>
      </div>
      <ul className="justify-center flex flex-col gap-16 h-3/5">
        <li>Ancho: 420mm</li>
        <li>Alto: 420mm</li>
        <li>Expesor: 4.5mm</li>
      </ul>
    </div>
    <div>
      <Image alt={image} src={image} className="h-[500px]" />
    </div>
    <div>
      <span className="font-bold text-md md:text-xl lg:text-2xl text-center text-foreground-500">
        Garantia
      </span>
      <h3 className="font-bold text-xl md:text-2xl lg:text-4xl text-center">
        6 Meses
      </h3>
    </div>
    </main>
  </section>
  );
}
