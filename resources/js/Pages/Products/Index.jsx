import TableLayout from "@/Layouts/TableLayout";

export default function ProductIndex({
  auth,
  search,
  sort_by,
  sort_direction,
  productsData,
}) {
  return (
    <TableLayout
      auth={auth}
      columnHeader={[
        "Name",
        "Price",
        "Draw Weight",
        "Arrow Pass",
        "Short Description",
      ]}
      search={search}
      sort_by={sort_by}
      sort_direction={sort_direction}
      tableData={productsData}
      isAddBtnVisible={true}
      headerTitle={"Manage Products"}
      objectKey={"manage_product"}
      indexRoute={"manage-products.index"}
      editRoute={"manage-products.edit"}
      deleteRoute={"manage-products.destroy"}
      addRoute={"manage-products.create"}
      showRoute={"manage-products.show"}
    />
  );
}
