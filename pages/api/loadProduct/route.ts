import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function loadProductId() {
  const products = (await stripe.products.list()).data;
  return Promise.all(products.map(product => product.id));
}

export async function loadProduct(productId : any) {
  return await stripe.products.retrieve(productId, {expand: ['default_price']});
}

export async function loadFullData() {
  const products = (await stripe.products.list()).data;
  return Promise.all(products.map((product) => (
    loadProduct(product.id)
  )));
}
