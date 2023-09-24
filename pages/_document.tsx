import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body className="min-h-screen bg-background antialiased font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
