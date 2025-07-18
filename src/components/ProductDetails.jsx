export default function ProductDetails({ product }) {
  return (
    <div className="flex-1">
      <img src={product.image} alt={product.name} className="w-full max-w-md mx-auto" />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-600 mb-1">Categoria: {product.category}</p>
      <p className="text-gray-700 mt-2">{product.description}</p>
    </div>
  );
}
