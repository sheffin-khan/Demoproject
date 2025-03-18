"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const Page2 = () => {
  const searchParams = useSearchParams();
  const text = searchParams.get("text") || "No text provided";

  const fonts = ["Arial", "Courier New", "Georgia", "Times New Roman", "Verdana"];
  const [selectedFont, setSelectedFont] = useState(fonts[0]); 

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Page 2</h2>
      <p className="mt-2" style={{ fontFamily: selectedFont }}>Received Text: {text}</p>

      {/* Font Selection Dropdown */}
      <label className="block mt-4 font-semibold">Choose a font:</label>
      <select
        className="w-full p-2 border rounded bg-gray-100"
        value={selectedFont}
        onChange={(e) => setSelectedFont(e.target.value)}
        style={{ fontFamily: selectedFont }}
      >
        {fonts.map((font) => (
          <option key={font} value={font} style={{ fontFamily: font }}>
            {font}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Page2;
