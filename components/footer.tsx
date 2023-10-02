import { Button, Link, Divider } from "@nextui-org/react";
import { HomeIcon, MarkerIcon } from "./icons";
import { siteConfig } from "@/config/site";

import { useTheme } from "next-themes";

import {
  TwitterIcon,
  InstagramIcon,
} from "@/components/icons";


export default function Footer() {
  const { theme } = useTheme();
  const lightLogoURL = 'https://media.discordapp.net/attachments/1116888339967119460/1156796158556000306/MBZ-Negro.png?ex=651991a0&is=65184020&hm=dcc99635d3938a3048b1641fa9da89b2ba169e3c6d3c5f35f58f1b22e9dbd04a&=&width=1020&height=379';
  const darkLogoURL = 'https://media.discordapp.net/attachments/1116888339967119460/1156796158295949322/MBZ-Blanco.png?ex=651991a0&is=65184020&hm=4fc8bb10c7cf1f23bd482d9c1fe6f935e97ebd813aee613507969f471fa23bc7&=&width=1020&height=379';
  const logoURL = theme === 'light' ? lightLogoURL : darkLogoURL;
  const yourWidth = 225;
  const yourHeight = 225;
  return (
    <footer className="w-full flex items-center justify-center flex-col py-3 gap-5">
      <Divider className="my-4" />
      <main className="w-4/5 md:w-1/3 lg:w-1/2">
        <section className="flex justify-evenly gap-48">
          <article className="flex flex-col gap-2">
            <p className="text-slate-400">Have any question or comment?</p>
            <Button
              as={Link}
              isExternal
              className="flex items-center gap-1 justify-start"
              href="https://webcodebuilders.repl.co/"
              title="nextui.org homepage"
              variant="light"
              startContent={<HomeIcon />}
            >
              support@pwnage.com
            </Button>
            <Button
              as={Link}
              isExternal
              className="flex items-center gap-1 justify-start"
              href="https://webcodebuilders.repl.co/"
              title="nextui.org homepage"
              variant="light"
              startContent={<MarkerIcon />}
            >
              Pwnage is Based in California, USA
            </Button>
          </article>
          <ol className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navItems.map((item, index) => (
              <li key={`${item}-${index}`}>
                <Link
                  color={"foreground"}
                  href="#"
                  size="lg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <img src={logoURL} alt="Logo" width={yourWidth} height={yourHeight} />
<div className="flex items-center gap-4 mt-4">
  <a href="https://www.facebook.com/tupagina" target="_blank" rel="noopener noreferrer">
    <InstagramIcon className="w-6 h-6" />
  </a>
  <a href="https://www.twitter.com/tupagina" target="_blank" rel="noopener noreferrer">
    <TwitterIcon className="w-8 h-8" />
  </a>
  {/* Agrega mÃ¡s enlaces y sus iconos para otras redes sociales si es necesario */}
</div>
      <div>
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://webcodebuilders.repl.co/"
          title="WebCodeBuilders homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">WebCodeBuilders</p>
        </Link>
      </div>
    </footer>
  );
}