"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const Page1 = () => {
  const searchParams = useSearchParams();
  const text = searchParams.get("text") || "No text provided";
  const colors = ["red", "blue", "green"];
  const [selectedColor, setSelectedColor] = useState(colors[0]); 

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Page 1</h2>
      <p className="mt-2" style={{ color: selectedColor }}>
        Received Text: {text}
      </p>

      {/* Color Selection Dropdown */}
      <label className="block mt-4 font-semibold">Choose a color:</label>
      <select
        className="w-full p-2 border rounded bg-gray-100"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
        style={{ backgroundColor: selectedColor, color: "white" }}
      >
        {colors.map((color) => (
          <option key={color} value={color} style={{ backgroundColor: color, color: "white" }}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Page1;
