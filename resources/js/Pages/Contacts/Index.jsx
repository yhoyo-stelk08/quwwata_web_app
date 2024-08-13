import TableLayout from "@/Layouts/TableLayout";

const ContactIndex = ({
  auth,
  search,
  sort_by,
  sort_direction,
  contactsData,
}) => {
  return (
    <TableLayout
      auth={auth}
      tableData={contactsData}
      search={search}
      sort_by={sort_by}
      sort_direction={sort_direction}
      isAddBtnVisible={false}
      headerTitle={"Contacts Message"}
      objectKey={"contact"}
      indexRoute={"contacts.index"}
      showRoute={"contacts.show"}
      deleteRoute={"contacts.destroy"}
      columnHeader={["Email", "Contact Number", "Message", "Sent At"]}
    />
  );
};
export default ContactIndex;
