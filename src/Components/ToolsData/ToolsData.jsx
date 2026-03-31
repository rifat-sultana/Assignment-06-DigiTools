
import { use } from "react";
import ToolsCard from "../ToolsCard/ToolsCard";



const ToolsData = ({ dataPromise }) => {
  const toolsData = use(dataPromise)
 

  console.log(toolsData)
  return (
    <div className="max-w-7xl mx-auto ">
      <div >
        <section className="bg-gray-50 py-16 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Premium Digital Tools
          </h2>

          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-base">
            Choose from our curated collection of premium digital products designed
            to boost your productivity and creativity.
          </p>

          <div className="mt-6 flex justify-center fond-bold gap-3">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-2 rounded-full  text-sm shadow-md">
              Products
            </button>

            <button className="bg-white border border-gray-200 text-gray-600 px-6 py-2 rounded-full  text-sm shadow-sm">
              Cart
            </button>
          </div>

        </section>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {toolsData.map(toolsData =>(
          

           <ToolsCard toolsData={toolsData}/>

          
          ))}
         </div>

      {/* </div> */}



    </div>
  );
};

export default ToolsData;