import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { router } from "@inertiajs/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
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

  const orderUrl = useMemo(() => {
    const url = new URL(route("order.index"));

    if (pageNumber) url.searchParams.set("page", pageNumber);

    if (debouncedSearchTerm) {
      url.searchParams.set("search", debouncedSearchTerm);
      if (debouncedSearchTerm !== previousSearchTerm.current) {
        setPageNumber("1");
        previousSearchTerm.current = debouncedSearchTerm;
      }
    }

    if (sortBy) {
      url.searchParams.set("sort_by", sortBy);
      if (sortDirection) {
        url.searchParams.set("sort_direction", sortDirection);
      }
    }
    return url;
  }, [
    debouncedSearchTerm,
    pageNumber,
    sortBy,
    sortDirection,
    previousSearchTerm,
  ]);

  useEffect(() => {
    // prevent the infinite loop caused by visiting orderUrl
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    // manual visit the order url whenever it changed
    router.visit(orderUrl, {
      preserveScroll: true,
      preserveState: true,
      replace: true,
    });
  }, []);

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Manage Orders
        </h2>
      }
    >
      <div className="bg-gray-100 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-start items-center sm:flex-row mt-6 w-full">
              <div className="relative text-sm text-gray-800 col-span-3 w-1/2">
                <div className="absolute pl-2 left-0 top-0 bottom-0 flex items-center pointer-events-none text-gray-500">
                  <FaMagnifyingGlass />
                </div>
                <input
                  onChange={handleChange}
                  value={searchTerm}
                  type="text"
                  autoComplete="off"
                  placeholder="Search Item..."
                  id="search"
                  className="block w-full rounded-lg border-0 py-2 pl-10 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
