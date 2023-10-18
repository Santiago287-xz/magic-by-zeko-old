import { Input, Spinner, Button } from "@nextui-org/react";
import { CheckIcon } from "@/components/icons";
import { EmailTemplate } from '@/components/email-template';
import React, { useState, FormEvent } from "react";

export default function MailForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleButtonClick = (e: FormEvent) => {
    e.preventDefault();

    if (email.includes("@")) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
      }, 5000);
    } else {
      alert('El correo electrónico debe contener al menos un "@".');
    }
  };
  return (
    <form
      className="flex flex-col items-center gap-4 md:gap-8 justify-center py-16 bg-white dark:bg-transparent p-4"
      onSubmit={(e) => handleButtonClick(e)}
    >
      <h2 className="text-3xl tracking-wide text-center mb-4">
        No te lo pierdas
      </h2>
      <section className="flex justify-center gap-2 w-full sm:w-4/5 lg:w-auto">
        <Input
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full md:w-[24rem]"
          label="Email"
          placeholder="Enter your email"
        />
        <Button
          className={`w-full md:w-1/2 h-auto px-8 bg-transparent hover:bg-foreground-100 border-2 transition ${
            isLoading ? "cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
          onClick={handleButtonClick}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <Spinner className="animate-spin text-default-400" />
              Procesando...
            </div>
          ) : isSuccess ? (
            <div className="flex items-center gap-2">
              <CheckIcon />
              ¡Suscrito!
            </div>
          ) : (
            "Subscribe"
          )}
        </Button>
      </section>
    </form>
  );
}
