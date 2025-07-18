// src/pages/ProductListingPage.jsx
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterGroup from "../components/FilterGroup";
import ProductListing from "../components/ProductListing";

export default function ProductListingPage() {
  const [filter, setFilter] = useState("");

  return (
    <>
      <Header />
      <FilterGroup onFilterChange={setFilter} />
      <ProductListing filter={filter} />
      <Footer />
    </>
  );
}
