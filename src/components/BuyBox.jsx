const optionsMap = {
  roupa: { label: "Tamanho", values: ["P", "M", "G", "GG"] },
  calçado: { label: "Numeração", values: ["36", "37", "38", "39", "40", "41", "42"] },
  tênis: { label: "Numeração", values: ["36", "37", "38", "39", "40", "41", "42"] },
  Acessório: { label: "Quantidade", values: ["1", "2", "3", "4", "5"] },
  Beleza: { label: "Quantidade", values: ["1", "2", "3", "4", "5"] },
};

export default function BuyBox({ type, price }) {
  const option = optionsMap[type];

  return (
    <div className="bg-light-gray-3 p-6 rounded-xl w-full md:max-w-sm">
      <p className="text-dark-gray text-xl font-semibold mb-4">R$ {price}</p>
      <div className="mb-4">
        {option ? (
          <>
            <label className="block mb-2 text-sm text-dark-gray-2">{option.label}</label>
            <select className="w-full p-2 border rounded">
              {option.values.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </>
        ) : (
          <p className="text-sm text-red-500">Tipo de produto não identificado</p>
        )}
      </div>
      <button className="bg-primary text-white w-full py-3 rounded hover:bg-tertiary transition">
        Comprar agora
      </button>
    </div>
  );
}
