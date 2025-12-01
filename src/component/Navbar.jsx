



import React, { useState } from "react";
import { MenuSquareIcon } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center py-3 px-6 bg-black text-white border-b border-gray-600">
      <h1 className="text-xl font-bold">Godsave</h1>

     
      <ul className="md:flex gap-6 font-medium text-sm cursor-pointer hidden">
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Project</li>
        <li>FAQS</li>
      </ul>

      <button className="bg-gray-300 px-3 py-1 text-sm md:flex hidden text-black rounded">
        Contact
      </button>

      <MenuSquareIcon
        className="text-white sm:flex md:hidden cursor-pointer size-8"
        onClick={() => setOpen(!open)}
      />

      {open && (
        <div className="absolute top-25 right-0 w-30 bg-black/40 backdrop-blur-md text-white flex flex-col items-end gap-6 py-6 px-4   md:hidden ">
          <ul className="flex flex-col gap-4 text-lg cursor-pointer">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Project</li>
            <li>FAQS</li>
          </ul>

          <button className="bg-gray-300 px-4 py-2 text-black rounded">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
