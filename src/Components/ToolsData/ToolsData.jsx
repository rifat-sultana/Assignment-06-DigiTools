import { use } from "react";
import ToolsCard from "../ToolsCard/ToolsCard";

const ToolsData = ({ dataPromise, activeTab, setActiveTab, carts, setCarts }) => {
  const toolsData = use(dataPromise);

  return (
    <div className="max-w-7xl mx-auto px-20">

      <section className="bg-gray-50 py-16 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Premium Digital Tools
        </h2>

        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-base">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>

      
        <div className="flex justify-center gap-4 mt-5">

          <button
            onClick={() => setActiveTab("products")}
            className={`rounded-full w-40 py-2 border transition-all duration-300 ${activeTab === "products"
                ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white"
                : "bg-white text-black"
              }`}
          >
            Products
          </button>

          <button
            onClick={() => setActiveTab("cart")}
            className={`rounded-full w-40 py-2 border transition-all duration-300 ${activeTab === "cart"
                ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white"
                : "bg-white text-black"
              }`}
          >
            Cart({carts.length})
          </button>

        </div>

      </section>

     
      {activeTab === "products" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {toolsData.map((item) => (
            <ToolsCard
              key={item.id}
              toolsData={item}
              carts={carts}
              setCarts={setCarts}
            />
          ))}
        </div>

      )}

      {activeTab === "cart" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {carts.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">
              No items in cart
            </p>
          ) : (
            carts.map((item, index) => (
              <ToolsCard
                key={index}
                toolsData={item}
                carts={carts}
                setCarts={setCarts}
              />
            ))
          )}
        </div>
      )}


    </div>
  );
};

export default ToolsData;