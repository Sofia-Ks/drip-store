import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-primary font-bold text-xl">
        Loja Virtual
      </Link>

      <nav className="flex items-center gap-6 text-dark-gray-2">
        <Link
          to="/produtos"
          className="hover:text-primary transition-colors"
        >
          Produtos
        </Link>
        <Link
          to="/login"
          className="bg-primary text-white px-4 py-1 rounded hover:bg-tertiary transition-colors"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
