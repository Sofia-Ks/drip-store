import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProductDetails from "../components/ProductDetails";
import BuyBox from "../components/BuyBox";
import Footer from "../components/Footer";
import mockProducts from "../data/mockProducts";

export default function ProductViewPage() {
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-4 text-center text-red-500">
        Produto não encontrado 😢
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row p-4 gap-4">
        <ProductDetails product={product} />
        <BuyBox type={product.type} price={product.price} />
      </div>
      <Footer />
    </>
  );
}
