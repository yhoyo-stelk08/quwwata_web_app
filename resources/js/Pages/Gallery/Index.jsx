import TableLayout from "@/Layouts/TableLayout";

export default function GalleryIndex({
  galleriesData,
  auth,
  search,
  sort_by,
  sort_direction,
}) {
  return (
    <TableLayout
      auth={auth}
      columnHeader={[
        "Title",
        "Image Name",
        "Category",
        "Created At",
        "Updated At",
      ]}
      search={search}
      sort_by={sort_by}
      sort_direction={sort_direction}
      tableData={galleriesData}
      isAddBtnVisible={true}
      headerTitle={"Manage Gallery Items"}
      objectKey={"gallery"}
      indexRoute={"galleries.index"}
      editRoute={"galleries.edit"}
      deleteRoute={"galleries.destroy"}
      addRoute={"galleries.create"}
    />
  );
}
