import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";
import PresentationVideo from "@/components/presentation-video";
import Footer from "@/components/footer";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={inter.className}>
      <div className="relative flex flex-col h-screen">
        <Head />
        <Navbar />
        <div>
          <PresentationVideo />
          <main className="container mx-auto max-w-7xl px-6 flex-grow" id="products">
            {children}
          </main>
        </div>
        <Footer/>        
      </div>
    </div>
  );
}
