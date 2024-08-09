import Receipt from "@/Components/Receipt";
import AppLayout from "@/Layouts/AppLayout";

export default function ReceiptPage({ transactionId, amount, order }) {
  return (
    <AppLayout>
      <Receipt transactionId={transactionId} amount={amount} order={order} />
    </AppLayout>
  );
}
