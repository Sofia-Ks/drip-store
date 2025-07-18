export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">Loja Virtual</h3>
          <p className="text-light-gray-2 text-sm">© 2025. Todos os direitos reservados.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contato</h4>
          <ul className="text-sm space-y-1 text-light-gray-2">
            <li>WhatsApp: (85) 99999-9999</li>
            <li>Email: contato@digitalstore.com</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Institucional</h4>
          <ul className="text-sm space-y-1 text-light-gray-2">
            <li>Sobre nós</li>
            <li>Política de privacidade</li>
            <li>Ajuda</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Redes Sociais</h4>
          <ul className="text-sm space-y-1 text-light-gray-2">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
