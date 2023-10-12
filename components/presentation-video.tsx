import { Button, Link } from "@nextui-org/react";
import { Cart } from "@/components/icons";

export default function PresentationVideo() {
  return (
    <section className="h-screen bg-black top-[-4rem] relative">
      <div className="flex flex-wrap flex-col h-full w-full absolute content-center justify-center animate-fade-up z-10">
        <p className="uppercase text-center text-zinc-300 tracking-[0.16em]">
          Federico Cristalino
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-slate-50 text-center tracking-wide">
          Magic by Zeko
        </h1>
        <Button
          href="/tienda/prod_OgaEMmLdWZvxde"
          as={Link}
          color="primary"
          variant="ghost"
          className="mx-auto mt-4 z-10 text-primary"
        >
          Ver Productos
          <Cart />
        </Button>
      </div>
      <div className="top-0 relative h-screen w-full z-1">
        <video
          className="w-full h-screen object-cover opacity-10 absolute"
          disableRemotePlayback
          preload="metadata"
          loop
          autoPlay
          muted
        >
          {/* h-[calc(100vh-4rem)] */}
          <source
            src="https://cdn.shopify.com/videos/c/o/v/1a90808b84b141459baadf3f48898a88.webm"
            type="video/webm"
          ></source>
        </video>
      </div>
    </section>
  );
}
