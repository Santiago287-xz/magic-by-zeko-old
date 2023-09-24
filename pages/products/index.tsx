import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { loadFullData } from "@/pages/api/loadProduct/route";
import ButtonCheckout from "@/components/buttonCheckout";
import { type Product } from "@/pages/types.d";

export default function Products({ data } : { data: Array<Product> }) {
  return (
    <main className="flex flex-wrap content-center justify-center h-screen gap-4">
      {data.map((product) => (
        <div key={product.id}>
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">
                Nombre: {product.name}
              </p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="font-bold text-large">
                Precio: {product.unit_amount}
              </h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                className="object-cover rounded-xl"
                alt={product.name}
                src={product.images[0]}
                width={200}
              />
              <ButtonCheckout priceId={product.default_price} />
            </CardBody>
          </Card>
        </div>
      ))}
    </main>
  );
}

export async function getStaticProps() {
  const posts = await loadFullData();  
  return { props: { posts } };
}
