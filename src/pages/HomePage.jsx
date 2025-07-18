// src/pages/HomePage.jsx
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";

export default function HomePage() {
  const [filter, setFilter] = useState("");

  return (
    <>
      <Header />
      <Section onFilterChange={setFilter} />
      <ProductListing filter={filter} />
      <Footer />
    </>
  );
}
