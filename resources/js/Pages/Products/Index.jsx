import DataTable from "@/Components/DataTable";
import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, router } from "@inertiajs/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDebounce } from "use-debounce";

export default function ProductIndex({
  auth,
  search,
  sort_by,
  sort_direction,
  productsData,
}) {
  // console.log(productsData);
  const [searchTerm, setSearchTerm] = useState(search || "");
  const isInitialRender = useRef(true);
  const [pageNumber, setPageNumber] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);
  const previousSearchTerm = useRef(searchTerm);
  const [sortBy, setSortBy] = useState(sort_by || ""); // "" for not sorted, "asc" for ascending, "desc" for descending
  const [sortDirection, setSortDirection] = useState(sort_direction || ""); // "" for not sorted, "asc" for ascending, "desc" for descending

  const columnHeader = [
    "Name",
    "Price",
    "Draw Weight",
    "Arrow Pass",
    "Short Description",
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

  const productUrl = useMemo(() => {
    const url = new URL(route("manage-products.index"));

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
    // prevent the infinite loop caused by visiting productUrl
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    // manual visit the gallery url whenever it changed
    router.visit(productUrl, {
      preserveScroll: true,
      preserveState: true,
      replace: true,
    });
  }, [productUrl]);
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Manage Products Items
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
              <div className="mt-4 flex justify-end items-center sm:mt-0 sm:ml-16 sm:flex-none">
                <Link
                  href={route("manage-products.create")}
                  className="w-full inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                >
                  Add Products
                </Link>
              </div>
            </div>
            <div className="mt-8 flex flex-col">
              <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div>
                    <Pagination
                      meta={productsData.meta}
                      onUpdatePageNumber={updatedPageNumber}
                    />
                  </div>
                  <DataTable
                    data_table={productsData}
                    sort_by={sortBy}
                    sort_direction={sortDirection}
                    onSorting={handleSort}
                    columnHeader={columnHeader}
                    deleteRoute="manage-products.destroy"
                    editRoute="manage-products.edit"
                    showRoute="manage-products.show"
                    objectKey="manage_product"
                  />
                  <div>
                    <Pagination
                      meta={productsData.meta}
                      onUpdatePageNumber={updatedPageNumber}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
