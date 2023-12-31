import { Button, Link } from "@nextui-org/react";
import { ArrowDown } from "@/components/icons"

export default function PresentationVideo() {
  return (
    <section className="h-[91vh] bg-black">
      <div className="flex flex-wrap flex-col h-[90%] content-center justify-center">
        <small className="uppercase mx-auto text-slate-300">
          Find your{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-semibold">
            next
          </span>{" "}
          peripheral
        </small>
        <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl text-slate-50 text-center">
          Magic by Zeko
        </h1>
        <Button href="#products" as={Link} color="primary" variant="ghost" className="mx-auto mt-4 z-10">
          Shop now <ArrowDown className="text-default-500" />
        </Button>
      </div>
      <div className="top-0 absolute w-full">
        <video
          className="w-full h-screen object-cover opacity-10" 
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
