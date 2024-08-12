import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useRef, useState } from "react";
import { useDebounce } from "use-debounce";

export default function OrderIndex({
  auth,
  search,
  sort_by,
  sort_direction,
  orderData,
}) {
  console.log(orderData);
  const [searchTerm, setSearchTerm] = useState(search || "");
  const isInitialRender = useRef(true);
  const [pageNumber, setPageNumber] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);
  const previousSearchTerm = useRef(searchTerm);
  const [sortBy, setSortBy] = useState(sort_by || ""); // "" for not sorted, "asc" for ascending, "desc" for descending
  const [sortDirection, setSortDirection] = useState(sort_direction || ""); // "" for not sorted, "asc" for ascending, "desc" for descending

  const columnHeader = [
    "Customer Name",
    "Transaction ID",
    "Payment Method",
    "Payment Status",
    "Total Payment",
  ];

  // handle value on search box
  const handleChange = (e) => {
    const { value: _searchTerm } = e.target;
    setSearchTerm(_searchTerm);
  };

  // handle value of page number
  const updatedPageNumber = (link) => {
    setPageNumber(link.url.split("=")[1]);
  };

  // function to handle sorting of column
  const handleSort = (column) => {
    if (sortBy === column) {
      // Cycle through the three states
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else if (sortDirection === "desc") {
        setSortBy("");
        setSortDirection("");
      } else {
        setSortDirection("asc");
      }
    } else {
      setSortBy(column);
      setSortDirection("asc");
    }
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Manage Orders
        </h2>
      }
    >
      Order
    </AuthenticatedLayout>
  );
}
