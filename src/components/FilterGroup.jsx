// src/components/FilterGroup.jsx
export default function FilterGroup({ onFilterChange }) {
  return (
    <div className="bg-light-gray-3 py-4 px-6 flex flex-wrap items-center gap-4 justify-center md:justify-start">
      <span className="text-dark-gray font-medium">Filtros:</span>
      <button onClick={() => onFilterChange("Vestuário Masculino")} className="bg-white px-4 py-1 rounded border hover:border-primary">
        Vestuário Masculino
      </button>
      <button onClick={() => onFilterChange("Vestuário Feminino")} className="bg-white px-4 py-1 rounded border hover:border-primary">
        Vestuário Feminino
      </button>
      <button onClick={() => onFilterChange("Acessório")} className="bg-white px-4 py-1 rounded border hover:border-primary">
        Acessório
      </button>
      <button onClick={() => onFilterChange("Beleza")} className="bg-white px-4 py-1 rounded border hover:border-primary">
        Beleza
      </button>
      <button onClick={() => onFilterChange("")} className="text-dark-gray-3 underline ml-4">
        Ver todas
      </button>
    </div>
  );
}
