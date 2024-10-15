import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { buffer } from "micro";
const stripe = require("stripe")(process.env.STRIPE_SK);

const endpointSecret =
  "whsec_32c2d56ebab286752a787b4dfcd8aacc52b670ed857ddf9781e0e7f852162bae";

const handler = async (req, res) => {
  await mongooseConnect();

  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      await buffer(req),
      sig,
      endpointSecret
    );
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const data = event.data.object;
      const orderId = data.metadata.orderId;
      const paid = data.payment_status === "paid";
      if (orderId && paid) {
        await Order.findByIdAndUpdate(orderId, {
          paid: true,
        });
      }
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).send("ok");
};

export const config = {
  api: { bodyParser: false },
};

export default handler;

// eager-aspire-trump-safely
// acct_1Q9WrMKnRMsFssGI
