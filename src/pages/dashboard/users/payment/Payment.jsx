import { loadStripe } from "@stripe/stripe-js";
import SectionHead from "../../../../component/sections/SectionHead";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../../hooks/useCart";
import CheckoutForm from "./CheckoutForm";
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));

  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Key_Token);

  return (
    <div className="lg:px-0 px-4">
      <div className="lg:my-10 my-4">
        <SectionHead heading="Payment" subHeading="Complete You Payment!" />
      </div>
      <section>
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} cart={cart} />
        </Elements>
      </section>
    </div>
  );
};

export default Payment;
