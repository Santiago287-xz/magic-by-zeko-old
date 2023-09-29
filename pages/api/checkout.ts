import type { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: "http://localhost:3000/",
      line_items: [{ price: req.body.priceId, quantity: 1 }],
      billing_address_collection: "required",
      phone_number_collection: {
        enabled: true,
      },
      custom_fields: [
        {
          key: "type",
          label: {
            type: "custom",
            custom: "Tipo",
          },
          type: "dropdown",
          dropdown: {
            options: [
              { label: "Speed", value: "Speed" },
              { label: "Control", value: "Control" },
            ],
          },
        },
      ],
    });
    res.status(200).json(session.url);
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
