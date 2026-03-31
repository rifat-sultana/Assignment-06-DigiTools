import React from 'react';
import { use } from "react";
import Check from "../../assets/assets/products/Check.png"
import WritingImg from "../../assets/assets/products/writing_2327400 1.png"

const ToolsData = ({dataPromise}) => {
const toolsData = use(dataPromise)
console.log(toolsData)


  return (
    <div>
      <div> 
      <section className="bg-gray-50 py-16 text-center">

      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Premium Digital Tools
      </h2>

      <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-base">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>

      <div className="mt-6 flex justify-center gap-3">
        <button className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-2 rounded-full text-sm shadow-md">
          Products
        </button>

        <button className="bg-white border border-gray-200 text-gray-600 px-6 py-2 rounded-full text-sm shadow-sm">
          Cart (2)
        </button>
      </div>

    </section>
      </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"> 
      {toolsData.map(toolsData => <div key={toolsData.id} className=' shadow-lg rounded-lg border'>

        <div>  
          <span className="absolute top-4 right-4 bg-orange-100 text-orange-500 text-xs px-3 py-1 rounded-full">
        Best Seller
      </span> 
      </div>

        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-4"> 
          <img
          src={WritingImg }
          alt="icon"
          className="w-8"
        />
           </div>


        <div>
        <h3 className='text-2xl font-semibold text-gray-800'> {toolsData.name}</h3>
        <p className='text-gray-500 text-sm mt-2'> { toolsData.description} </p>
        </div>

        <div className=" text-2xl font-bold mt-4  "> ${toolsData.price}/month </div>

        {/* features */}
        <div> 
           <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
          <img size={16} className="text-green-500" src={Check} alt="Check"/>
          Unlimited AI generations
        </li>

            <li className="flex items-center gap-2">
          <img size={16} className= "text-green-500" src={Check} alt="Check" />
          50+ writing templates"
        </li>


            <li className="flex items-center gap-2">
          <img size={16} className="text-green-500" src={Check} alt="Check" />
          Grammar checker
        </li>

           </ul>

        </div>

        <button className="mt-6 w-full block py-3 rounded-full text-white font-medium bg-gradient-to-r from-purple-600 to-pink-500"> 
          Buy Now 
        </button>

      </div>)}

    </div> 



    </div>
  );
};

export default ToolsData;