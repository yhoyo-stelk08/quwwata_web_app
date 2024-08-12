import TableLayout from "@/Layouts/TableLayout";

export default function OrderIndex({
  auth,
  search,
  sort_by,
  sort_direction,
  orderData,
}) {
  return (
    <TableLayout
      auth={auth}
      columnHeader={[
        "Transaction Id",
        "Customer Name",
        "Customer Email",
        "Payment Status",
        "Payment Method",
        "Total Payment",
      ]}
      search={search}
      sort_by={sort_by}
      sort_direction={sort_direction}
      tableData={orderData}
      indexRoute={"orders.index"}
      objectKey={"order"}
      isAddBtnVisible={false}
      headerTitle={"Manage Orders"}
    />
  );
}
