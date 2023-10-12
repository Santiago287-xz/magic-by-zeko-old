import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Image,
} from "@nextui-org/react";
import ButtonCheckout from "./button-checkout";
import { type Product } from "@/pages/types.d";

export default function ProductModal({
  priceId,
  data,
}: {
  priceId: string;
  data: Product;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button onPress={onOpen}>Buy</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 py-4">
                {data.name}
              </ModalHeader>
              <ModalBody className="py-4 pt-0">
                <main className="flex gap-4">
                  <section>
                    <Image
                      removeWrapper
                      alt={data.name}
                      src={data.images[0]}
                      className="z-0 w-full h-full object-cover"
                    />
                  </section>
                  <section>
                    <p>{data.description}</p>
                    <small>{data.default_price.unit_amount}</small>
                    <ButtonCheckout priceId={priceId} />
                  </section>
                </main>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
