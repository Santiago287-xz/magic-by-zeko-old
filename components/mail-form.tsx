import { Input } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";

import { MailIcon } from "@/components/icons";

export default function MailForm() {
  return (
    <>
      <Divider />
      <form className="flex items-center gap-1 md:gap-4 lg:gap-16 justify-center py-32" onSubmit={() => alert("asdasd")}>
        <h2 className="grid place-items-center justify-center font-bold lg:text-2xl">
          No te lo pierdas
        </h2>
        <section className="flex justify-center gap-2">
          <Input
            autoFocus
            endContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            className="md:w-72 lg:"
            label="Email"
            placeholder="Enter your email"
            variant="bordered"
          />
          <footer className="grid place-items-center">
            <button className="h-full w-8 md:w-32 hover:bg-gray-700 rounded-lg border-gray-700 border-1 transition">
              Subscribe
            </button>
          </footer>
        </section>
      </form>
    </>
  );
}
