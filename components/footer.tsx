import { Button, Link, Divider } from "@nextui-org/react";
import { HomeIcon, MarkerIcon } from "./icons";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center flex-col py-3 gap-12">
      <Divider className="my-4" />
      <main className="w-4/5 md:w-1/3 lg:w-1/2">
        <section className="flex justify-evenly">
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
