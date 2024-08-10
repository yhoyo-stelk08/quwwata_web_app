import AppLayout from "@/Layouts/AppLayout";
import { useEffect } from "react";

export default function MidtransPaymentPage({ snapToken }) {
  useEffect(() => {
    // Load the Snap.js script dynamically
    const script = document.createElement("script");
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = import.meta.env.VITE_MIDTRANS_CLIENT_KEY;
    console.log(clientKey);

    script.setAttribute("data-client-key", clientKey);
    document.body.appendChild(script);

    script.onload = () => {
      window.snap.pay(
        snapToken,
        {
          onSuccess: function (result) {
            console.log("Payment Success:", result);
            window.location.href = route("midtrans.success", {
              order_id: result.order_id,
            });
          },
          onPending: function (result) {
            console.log("Payment Pending:", result);
            // Handle pending payment
          },
          onError: function (result) {
            console.error("Payment Error:", result);
            // Handle payment error
          },
          onClose: function () {
            console.log("Payment popup closed");
            // Handle popup close
          },
        },
        {
          container: "#payment-form", // Manually specify the container for the embedded form
        }
      );
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [snapToken]);
  return (
    <AppLayout>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1>Complete Your Payment</h1>
        <div id="payment-form" className="w-full max-w-lg mx-auto mt-8">
          {/* Midtrans payment form will be embedded here */}
        </div>
      </div>
    </AppLayout>
  );
}
