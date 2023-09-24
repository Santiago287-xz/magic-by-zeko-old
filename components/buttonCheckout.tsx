"use client";
import { useState, useEffect } from "react";
import { Button, Link } from "@nextui-org/react";
function ButtonCheckout({ priceId }: { priceId: string }) {
  const [error, setError] = useState(false);
  const [url, setUrl] = useState("");
  useEffect(() => {
    const request = async () => {
      try {
        const res = await fetch("/api/checkout", {
          method: "POST",
          body: JSON.stringify({
            priceId,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        setUrl(await res.json());
      } catch {
        console.log('error')
        setError(true);
      }
    };
    request();
  }, []);
  return (
    <Button
      as={Link}
      href={url}
      color={error ? "danger" : "default"}
      variant={error ? "shadow": "solid"}
      isDisabled={error}
    >
      Buy
    </Button>
  );
}

export default ButtonCheckout;
