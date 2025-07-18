import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();
  const validarSenhaForte = (senha) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(senha);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !senha) {
      setErro("Preencha todos os campos.");
      return;
    }

    if (!validarSenhaForte(senha)) {
      setErro(
        "A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e símbolos."
      );
      return;
    }

    navigate("/");
    alert("Login bem-sucedido!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {erro && <p className="text-red-500 text-sm mb-4">{erro}</p>}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            E-mail
          </label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            placeholder="Digite seu e-mail"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Senha
          </label>
          <input
            type="password"
            value={senha}
            required
            onChange={(e) => setSenha(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            placeholder="Digite sua senha"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 transition"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
