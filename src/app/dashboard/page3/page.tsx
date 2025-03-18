"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const Page3 = () => {
  const searchParams = useSearchParams();
  const text = searchParams.get("text") || "No text provided";

  // Font size options
  const fontSizes = ["14px", "18px", "22px", "26px", "32px"];
  const [selectedFontSize, setSelectedFontSize] = useState(fontSizes[1]); // Default font size

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Page 3</h2>
      <p className="mt-2" style={{ fontSize: selectedFontSize }}>Received Text: {text}</p>

      {/* Font Size Selection Dropdown */}
      <label className="block mt-4 font-semibold">Choose a font size:</label>
      <select
        className="w-full p-2 border rounded bg-gray-100"
        value={selectedFontSize}
        onChange={(e) => setSelectedFontSize(e.target.value)}
        style={{ fontSize: selectedFontSize }}
      >
        {fontSizes.map((size) => (
          <option key={size} value={size} style={{ fontSize: size }}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Page3;
