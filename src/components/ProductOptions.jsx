import { useState } from "react";

export default function ProductOptions({ sizes = ["38", "39", "40", "41", "42"], colors = ["#000000", "#FFFFFF", "#C92071"] }) {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="space-y-6">
      {/* Tamanho */}
      <div>
        <h4 className="text-dark-gray-2 text-sm mb-2">Tamanho</h4>
        <div className="flex gap-3 flex-wrap">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded border text-sm ${
                selectedSize === size
                  ? "border-primary text-primary"
                  : "border-light-gray-2 text-dark-gray-2"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-dark-gray-2 text-sm mb-2">Cor</h4>
        <div className="flex gap-3">
          {colors.map((color) => (
            <div
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                selectedColor === color ? "border-primary" : "border-transparent"
              }`}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
