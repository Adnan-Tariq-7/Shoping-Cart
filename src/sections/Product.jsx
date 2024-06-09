import React, { useState } from "react"; // Importing useState
import { Button, Rating, SingleProduct } from "../components";
import { CartState } from "../context/Context";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";

const Product = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
    productDispatch,
  } = CartState();

  const [showFilter, setShowFilter] = useState(false);
  // State to manage the current page
  const [currentPage, setCurrentPage] = useState(1);
  // Number of products to display per page
  const productsPerPage = 6;
  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((val) => val.inStock);
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((val) => val.fastDelivery);
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter((val) => val.rating >= byRating);
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((val) =>
        val.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return sortedProducts;
  };

  // Get the transformed products
  const displayedProducts = transformProducts();
  // Calculate the total number of pages
  const totalPages = Math.ceil(displayedProducts.length / productsPerPage);

  // Get the products for the current page
  const paginatedProducts = displayedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <section id="products" className="">
      <h1 className="text-center text-4xl  font-semibold text-primary py-10 pb-14">
        Get Your Favorite Products
      </h1>

      <div className="wrapper flex p-4 gap-4 text-white relative">
        <div
          onClick={() => setShowFilter((prev) => !prev)}
          className="text-slate-gray absolute -top-8 md:hidden border-4 p-2 border-secondary rounded-md -mt-6"
        >
          <IoFilterSharp size={30} />
        </div>

        {/* Filter Products */}
        <div
          className={`filter flex-1 transition-all duration-1000 min-w-[250px] ${
            showFilter
              ? "max-md:max-h-screen max-md:opacity-100"
              : "max-md:max-h-0 max-md:opacity-0"
          } max-md:absolute max-md:top-2 bg-secondary p-4 space-y-5 rounded-md max-h-[450px] dark:bg-dark-forground`}
        >
          <h1 className="text-xl text-white font-semibold">Filter Products</h1>
          <div className="flex gap-2 items-center">
            <input
              type="radio"
              name="sort"
              id="ascending"
              checked={sort === "lowToHigh" ? true : false}
              onChange={() =>
                productDispatch({ type: "SORT_BY_PRICE", payload: "lowToHigh" })
              }
            />
            <label htmlFor="ascending">Ascending</label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="radio"
              name="sort"
              id="descending"
              checked={sort === "highToLow" ? true : false}
              onChange={() =>
                productDispatch({ type: "SORT_BY_PRICE", payload: "highToLow" })
              }
            />
            <label htmlFor="descending">Descending</label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="outOfStock"
              id="outOfStock"
              onChange={() => productDispatch({ type: "FILTER_BY_STOCK" })}
              checked={byStock}
            />
            <label htmlFor="outOfStock">Include Out of Stock</label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="fastDelivery"
              id="fastDelivery"
              onChange={() => productDispatch({ type: "FILTER_BY_DELIVERY" })}
              checked={byFastDelivery}
            />
            <label htmlFor="fastDelivery">Fast Delivery Only</label>
          </div>
          <div className="flex gap-2">
            Rating:
            <Rating
              rating={byRating}
              onClick={(i) =>
                productDispatch({ type: "FILTER_BY_RATING", payload: i + 1 })
              }
            />
          </div>
          <div>
            <label htmlFor="searchInput">Search Products:</label>
            <input
              id="searchInput"
              className="p-2 w-full rounded-md mt-1 text-slate-gray outline-none"
              type="text"
              placeholder="Search Here"
              onChange={(e) =>
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                })
              }
            />
          </div>

          <div
            className="pt-4 flex justify-center"
            onClick={() => setShowFilter((prev) => !prev)}
          >
            <Button
              name={"Clear Filter"}
              onClick={() => productDispatch({ type: "CLEAR_FILTERS" })}
              primary={true}
            />
          </div>
        </div>

        {/* Products */}
        <div className="flex-[5] ">
          <div className="products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProducts.map((product, index) => (
              <SingleProduct key={index} product={product} />
            ))}
          </div>
          {/* Pagination */}
          <div className="pagination flex justify-center py-4">
            <button
              className="px-4 py-2 mx-1 text-xl  rounded bg-primary text-white"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <IoIosArrowBack />
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`px-4 py-2 mx-1 rounded ${
                  currentPage === index + 1 ? "bg-secondary" : "bg-primary"
                } text-white`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="px-4 py-2 mx-1 text-xl rounded bg-primary text-white"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
