import { useState } from "react";
import Check from "../../assets/assets/products/Check.png";
import {  toast } from 'react-toastify';


const ToolsCard = ({ toolsData,carts, setCarts }) => {
  const [isBuyNow, setIsBuyNow] = useState(false);


  const handleBuyNow = () =>{
    setIsBuyNow(true)
    setCarts([...carts, toolsData])
     toast.success("item added to cart")
  }

  return (
    <div className="shadow-lg border-0.5 rounded-xl py-6 px-10 relative bg-[#FFFFFF] 
flex flex-col h-full hover:shadow-2xl transition duration-300">

      {/* tag */}
      {toolsData.tag && (
  <span
    className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full 
    ${
      toolsData.tag === "popular"
        ? "bg-orange-200 text-orange-700"
        : toolsData.tag === "best seller"
        ? "bg-purple-200 text-purple-700"
        : toolsData.tag === "new"
        ? "bg-green-200 text-green-700"
        : "bg-gray-200 text-gray-700"
    }`}
  >
    {toolsData.tag}
  </span>
)}

      {/* icon */}
      <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center text-3xl justify-center mb-4">
          {toolsData.icon}
      </div>

      {/* title + description */}
      <h3 className="text-lg font-bold text-gray-800">
        {toolsData.name}
      </h3>

      <p className="text-gray-500 text-sm mt-2">
        {toolsData.description}
      </p>

      {/* price */}
      <div className="text-xl font-bold mt-4">
        ${toolsData.price}/{toolsData.period}
      </div>

      {/* features */}
      <ul className="mt-4 space-y-2 text-sm text-gray-600">
        <li className="flex items-center gap-2">
          <img src={Check} className="w-4" />
          Unlimited AI generations
        </li>

        <li className="flex items-center gap-2">
          <img src={Check} className="w-4" />
          50+ writing templates
        </li>

        <li className="flex items-center gap-2">
          <img src={Check} className="w-4" />
          Grammar checker
        </li>
      </ul>

      {/* button */}
      <button
        onClick={handleBuyNow}
        className="mt-6 w-full py-3 rounded-full text-white bg-gradient-to-r from-purple-600 to-blue-500"
      >
        {isBuyNow ? "Buy" : "Buy Now"}
      </button>

    </div>
  );
};

export default ToolsCard;