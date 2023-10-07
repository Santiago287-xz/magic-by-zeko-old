import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="relative ">
        <section className="flex flex-wrap justify-center p-4 rounded-lg w-auto md:w-4/5 m-auto">
          <h1 className="font-bold text-xl md:text-2xl lg:text-5xl text-center p-6 md:p-24">
            ¿EN QUE PODEMOS AYUDARTE?
          </h1>
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Cuando tarda mi envio?"
              title="Cuando tarda mi envio?"
            >
              - El envio es via MercadoLibre y demora de 3 a 5 dias habiles a
              llegar a tu domicilio.
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Por que no hacen envios internacionales?"
              title="Por que no hacen envios internacionales?"
            >
              - Los envios internacionales a Chile, Brasil y Colombia estaran
              habilitados proximamente via nuestro partner DHL
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Que material utilizamos en nuestra superficie?"
              title="Que material utilizamos en nuestra superficie?"
            >
              - Nuestra superficie esta hecha de Polyester y una base
              antideslizante 100% de caucho
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Como puedo lavar mi mousepad?"
              title="Como puedo lavar mi mousepad?"
            >
              - Para limpiar su mousepad, le recomendamos que utilice un rodillo
              de pelusa para deshacerse de las migas sueltas. Para las manchas,
              primero intente usar agua y una toalla de microfibra. Eso debería
              eliminar la mayoría de las manchas leves, pero si necesita usar
              jabón, le recomendamos una pequeña cantidad de detergente para
              ropa o quitamanchas. Frote o cepille la mancha, enjuague. Deje que
              la alfombrilla de ratón se seque al aire y debería quedar como
              nueva. Intentamos usar una lavadora en un entorno delicado con
              nuestras alfombrillas para mouse y salió genial. Dicho esto, no
              podemos garantizar que todas las lavadoras tengan el mismo gran
              resultado, por lo que no podemos garantizar que la almohadilla
              mantenga la misma consistencia.
            </AccordionItem>
            <AccordionItem
              key="5"
              aria-label="Ofrecen mousepad custom?"
              title="Ofrecen mousepad custom?"
            >
              - Actualmente no ofrecemos al público diseños personalizados de
              alfombrillas de ratón. Sin embargo, si desea comprar 10 o más
              alfombrillas para mouse con el mismo diseño personalizado, podemos
              crear un pedido al por mayor para usted. Para obtener más
              información, comuníquese con nuestro equipo de soporte en
              support@magicbyzeko.com y háganos saber que le gustaría realizar
              un pedido de 10 o más alfombrillas para mouse personalizadas.
            </AccordionItem>
            <AccordionItem
              key="6"
              aria-label="¿Ofrecen garantia del producto?"
              title="¿Ofrecen garantia del producto?"
            >
              La garantia del mousepad V2 de Magic By Zeko es de 6 meses (Si
              contas con un mousepad V1 comprado luego del 01/01/23 el mismo NO
              cuenta con garantia ya que es una version DESCONTINUADA) la misma
              aplica en casos en los que el producto haya tenido una falla
              tecnica de fabrica, no aplica en casos que por algun motivo se
              derrame liquido, hayan lavado el producto de manera inapropiada.
              Si deseas aplicar garantia debes escribirnos a
              garantia@magicbyzeko.uno
            </AccordionItem>
          </Accordion>
        </section>
      </main>
      <Footer/>   
    </>
  );
}
