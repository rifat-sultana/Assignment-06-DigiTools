
import { use } from "react";
import ToolsCard from "../ToolsCard/ToolsCard";



const ToolsData = ({ dataPromise,  setActiveTab,carts, setCarts }) => {
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

          <div className="tabs tabs-box justify-center gap-4">
  <input 
  type="radio"
  name="my_tabs_1"
  className="tab rounded-full w-40  " 
  aria-label="Products"
  onClick = {() => setActiveTab('products')}
  defaultChecked
  />

  <input 
  type="radio" 
  name="my_tabs_1" 
  className="tab rounded-full w-40 " 
  aria-label="Cart" 
  onClick = {() => setActiveTab('cart')}
 />
  
</div>

        </section>
      </div>



      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {toolsData.map(toolsData =>(
          

           <ToolsCard 
           key={toolsData.id} 
           toolsData={toolsData} 
           carts={carts} s
           etCarts={setCarts}
           />

          
          ))}
         </div>

      {/* </div> */}



    </div>
  );
};

export default ToolsData;