// src/components/ProductListing.jsx
import ProductCard from "./ProductCard";
import mockProducts from "../data/mockProducts";

export default function ProductListing({ filter }) {
  const filtered = filter
    ? mockProducts.filter((product) => product.category === filter)
    : mockProducts;

  return (
    <section className="py-10 px-4 md:px-10">
      <h2 className="text-2xl font-bold text-dark-gray mb-6">
        Produtos em alta
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
