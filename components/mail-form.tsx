import { Input, Divider, Spinner, Checkbox, Button } from "@nextui-org/react";
import { MailIcon } from "@/components/icons";
import { CheckIcon } from "@/components/icons";

import React, { useState } from "react";

export default function MailForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();

    if (email.includes('@')) {
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
      className="flex items-center gap-1 md:gap-4 lg:gap-16 justify-center py-16 bg-white dark:bg-transparent"
    >
      <h2 className="grid place-items-center justify-center font-bold lg:text-2xl">
        No te lo pierdas
      </h2>
      <section className="flex justify-center gap-2">
        <Input
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="md:w-72"
          label="Email"
          placeholder="Enter your email"
        />
        <Button
            className={`h-auto px-8 bg-transparent hover:bg-foreground-100 border-2 transition ${isLoading ? 'cursor-not-allowed' : ''}`}
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
            'Subscribe'
          )}
        </Button>
      </section>
    </form>
  );
}
