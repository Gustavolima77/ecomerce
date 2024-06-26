"use server";

import { CartProduct } from "@/providers/cart";
import Stripe from "stripe";

export const createCheckout = async (products: CartProduct[]) => {
  // Criar Checkout
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as any, {
    apiVersion: "2024-04-10",
  });

  const checkout = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000",
    line_items: products.map((product) => {
      return {
        price_data: {
          currency: "brl",
          product_data: {
            name: product.name,
            description: product.description,
            images: product.imageUrls,
          },
          unit_amount: (product.totalPrice = 100),
        },
        quantity: product.quantity,
      };
    }),
  });
  //Retornar o checkout
  return checkout;
};
