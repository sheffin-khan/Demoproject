"use client";
//page for login - welcome message
import { useSearchParams, useRouter } from "next/navigation";
import { RxDropdownMenu } from "react-icons/rx";
import { useState } from "react";


const Welcome = () => {
  const searchParams = useSearchParams();
  const username = searchParams?.get("username") || "Guest";
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("");
  const [inputText, setInputText] = useState("");
  const router = useRouter();


  const handlePageSelect = (page: string) => {
    setSelectedPage(page);
    setIsOpen(false); 
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedPage) {
      alert("Please select a page from the dropdown.");
      return;
    }

    router.push(`${selectedPage}?text=${encodeURIComponent(inputText)}`);
  };


  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Welcome, {username}!</h2>
      <form onSubmit={handleSubmit}>
        <input id="textinput" type="text" placeholder="type something here" className="border p-2 rounded w-full"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        

        <div id="dropdown" className="relative inline-block mt-4">
          <button type='button' className="flex items-center gap-2 bg-gray-300 p-2 rounded"
            onClick={() => setIsOpen(!isOpen)}>
            <RxDropdownMenu />{selectedPage ? `Go to ${selectedPage}` : "Select a Page"}
          </button>

          {isOpen && (
            <div className="absolute mt-2 bg-white border rounded shadow-md w-full">
            <button type="button" onClick={() => handlePageSelect("/dashboard/page1")} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">Page 1</button>
            <button type="button" onClick={() => handlePageSelect("/dashboard/page2")} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">Page 2</button>
            <button type="button" onClick={() => handlePageSelect("/dashboard/page3")} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">Page 3</button>
          </div>
          )}

        </div>
        <button 
          type="submit" 
          className="mt-2 p-2 bg-blue-500 text-white rounded w-full"
        >
          Submit
        </button>
      </form>

        {selectedPage && <p className="mt-2">Selected Page: {selectedPage}</p>}
    </div>
    
  );
};

export default Welcome;
