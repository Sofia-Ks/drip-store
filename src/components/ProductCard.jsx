import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-200">
      <Link to={`/produto/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-4" />
        <h3 className="text-dark-gray-2 font-semibold text-lg">{product.name}</h3>
        <p className="text-light-gray text-sm">{product.category}</p>
        <p className="text-primary text-xl font-bold mt-2">R$ {product.price}</p>
      </Link>
    </div>
  );
}

