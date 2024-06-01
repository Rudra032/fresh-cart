import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-red-400 text-black flex justify-center items-center gap-10">
      <div className=" ml-4">
        <img
          src="https://freshcart.codescandy.com/assets/images/logo/freshcart-logo.svg"
          alt="fresh-shop-logo"
        />
      </div>
      <div className=" w-156 h-10 flex items-center">
        <select className="h-10 w-48 px-4 py-2 border border-solid border-[#dfe2e1] rounded-l-[.5rem]">
          <option selected="">All Categories</option>
          <option value="Milk Drinks">Milk Drinks</option>
          <option value="Curd &amp; Yogurt">Curd &amp; Yogurt</option>
          <option value="Eggs">Eggs</option>
          <option value="Buns &amp; Bakery">Buns &amp; Bakery</option>
          <option value="Cheese">Cheese</option>
          <option value="Condensed Milk">Condensed Milk</option>
          <option value="Dairy Products">Dairy Products</option>
        </select>
        <input
          className="h-10 w-96 px-4 py-2 border border-solid border-[#dfe2e1] focus:border-blue-500"
          type="text"
          aria-label="Last name"
          placeholder="Search for products"
        ></input>
        <button
          type="submit"
          className="h-10 w-12 flex items-center justify-center bg-white text-black border border-solid border-[#dfe2e1] rounded-r-[.5rem]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-search"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
      <div>
        <button
          type="button"
          class="btn btn-outline-gray-400 text-reset d-none d-lg-block"
          data-bs-toggle="modal"
          data-bs-target="#locationModal"
        >
          <i class="feather-icon icon-map-pin me-2"></i>
          Pick Location
        </button>
      </div>
      <div class="list-inline ms-auto d-lg-block d-none">
        <div class="list-inline-item me-5">
          <a
            href="../pages/shop-wishlist.html"
            class="text-reset position-relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-heart"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </a>
        </div>
        <div class="list-inline-item me-5">
          <a
            href="#!"
            class="text-reset"
            data-bs-toggle="modal"
            data-bs-target="#userModal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-user"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </a>
        </div>
        <div class="list-inline-item">
          <a
            class="text-reset position-relative"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasRight"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-shopping-bag"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
