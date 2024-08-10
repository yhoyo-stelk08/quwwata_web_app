import Receipt from "@/Components/Receipt";
import AppLayout from "@/Layouts/AppLayout";

export default function ReceiptPage({ transactionId, amount, order }) {
  return (
    <AppLayout>
      <div className="flex flex-col justify-center items-center my-20">
        <Receipt transactionId={transactionId} amount={amount} order={order} />
      </div>
    </AppLayout>
  );
}
