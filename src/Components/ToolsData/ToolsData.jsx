
import { use } from "react";
import ToolsCard from "../ToolsCard/ToolsCard";



const ToolsData = ({ dataPromise, activeTab, setActiveTab, carts, setCarts }) => {
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

            <button
              onClick={() => setActiveTab("products")}
              className={`rounded-full w-40 py-2 border ${activeTab === "products"
                  ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white"
                  : "bg-white text-black"
                }`}
            >
              Products
            </button>

            <button
              onClick={() => setActiveTab("cart")}
              className={`rounded-full w-40 py-2 border ${activeTab === "cart"
                  ? "bg-gradient-to-r from-purple-600 to-blue-500"
                  : "bg-white text-black"
                }`}
            >
              Cart({carts.length})
            </button>

          </div>

        </section>
      </div>

      {activeTab === "products" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {toolsData.map((toolsData) => (
            <ToolsCard
              key={toolsData.id}
              toolsData={toolsData}
              carts={carts}
              setCarts={setCarts}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default ToolsData;