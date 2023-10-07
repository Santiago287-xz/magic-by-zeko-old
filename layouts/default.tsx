import { Navbar } from "@/components/navbar";
import { Head } from "./head";
import PresentationVideo from "@/components/presentation-video";
import Footer from "@/components/footer";

import { Outfit } from "next/font/google";
const outfit = Outfit({ subsets: ["latin"] });

export default function DefaultLayout({  
  children,
}: {
  children: React.ReactNode;
}) {  
  return (
    <div className={outfit.className}>
      <div className="relative flex flex-col">
        <Head />
        <Navbar />
        <div>
          <PresentationVideo />
          <main className="container mx-auto flex-grow" id="products">
            {children}
          </main>
        </div>
        <Footer/>        
      </div>
    </div>
  );
}
