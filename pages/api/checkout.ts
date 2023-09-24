import type { NextApiRequest, NextApiResponse } from 'next'
import { Stripe } from "stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);  
    const paymentLink = await stripe.paymentLinks.create({
      line_items: [
        {
          price: req.body.priceId,
          quantity: 1,
        },
      ]
    });
    res.status(200).json(paymentLink.url)
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}