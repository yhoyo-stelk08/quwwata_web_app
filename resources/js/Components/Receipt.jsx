import { usePage } from "@inertiajs/inertia-react";

const Receipt = () => {
  const { transaction } = usePage().props;

  return (
    <div>
      <h1>Payment Receipt</h1>
      <p>
        <strong>Transaction ID:</strong> {transaction.id}
      </p>
      <p>
        <strong>Status:</strong> {transaction.status}
      </p>
      <p>
        <strong>Amount:</strong> {transaction.purchase_units[0].amount.value}{" "}
        {transaction.purchase_units[0].amount.currency_code}
      </p>
      <p>
        <strong>Payer Name:</strong> {transaction.payer.name.given_name}{" "}
        {transaction.payer.name.surname}
      </p>
      <p>
        <strong>Payer Email:</strong> {transaction.payer.email_address}
      </p>
      <p>
        <strong>Create Time:</strong> {transaction.create_time}
      </p>
      <p>
        <strong>Update Time:</strong> {transaction.update_time}
      </p>
      <a href="/">Back to Home</a>
    </div>
  );
};

export default Receipt;
