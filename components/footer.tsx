import { Button, Link, Image } from "@nextui-org/react";
import MailForm from "@/components/mail-form";
import { TwitterIcon, InstagramIcon } from "@/components/icons";

export default function Footer() {
  return (
    <>
    <MailForm/>
      <footer className="w-full flex flex-col items-center pb-6 pt-6 gap-5 bg-[#141a1f]">
        <div className="w-4/5 md:w-8/12">
          <div className="flex flex-col gap-2 items-center lg:flex-row lg:justify-evenly lg:items-start w-full">
            <div className="flex flex-col items-center lg:items-start gap-2">
              <p className="text-slate-400 text-xl">Métodos de Pago</p>
              <div className="flex items-center justify-center gap-4 mt-4">
                <Image
                  src="https://cdn.shopify.com/s/files/1/1573/2927/files/accepted-payments.png?v=1615785430"
                  alt="Método de Pago"
                  width={320}
                  height={320}
                />
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-2">
              <p className="text-slate-400 text-xl text-center w-max">
                ¿Tienes alguna pregunta o comentario?
              </p>
              <Button
                as={Link}
                href="https://webcodebuilders.repl.co/"
                className="flex items-center gap-1 justify-start text-slate-200"
                variant="light"
              >
                support@pwnage.com
              </Button>
              <Button
                as={Link}
                href="https://webcodebuilders.repl.co/"
                className="flex items-center gap-1 justify-start text-slate-200"
                variant="light"
              >
                Pwnage está ubicado en California, EE. UU.
              </Button>
            </div>
          </div>
        </div>
        <Image
          src="https://media.discordapp.net/attachments/1116888339967119460/1156796158295949322/MBZ-Blanco.png?ex=651991a0&is=65184020&hm=4fc8bb10c7cf1f23bd482d9c1fe6f935e97ebd813aee613507969f471fa23bc7&=&width=1020&height=379"
          alt="Logo"
          className="rounded-none"
          width={225}
          height={255}
        />
        <div className="flex items-center gap-4 mt-4">
          <a
            href="https://www.facebook.com/tupagina"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://www.twitter.com/tupagina"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="w-8 h-8 text-white" />
          </a>
        </div>
        <div>
          <Link
            href="https://webcodebuilders.repl.co/"
            className="flex items-center gap-1 text-current"
          >
            <span className="text-zinc-200">Powered by</span>
            <p className="text-primary">WebCodeBuilders</p>
          </Link>
        </div>
      </footer>
    </>
  );
}
