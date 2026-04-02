
import PlayImg from "../../assets/assets/products/Play.png"
import BannerImg from "../../assets/assets/products/banner.png"
import StarImg from "../../assets/assets/products/star.png"



const Herosection = ({ setActiveTab, activeTab }) => {
  return (
    <div className="hero bg-base-200 py-16 lg:py-24">

      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img className="max-w-sm rounded-lg shadow-2xl ml-10"
          src={BannerImg} alt="Banner" />

        <div className="pr-10 mb-15">
          <p className="inline-flex items-center gap-2 bg-purple-100 text-purple-500 text-sm px-4 py-1 rounded-full font-medium">
            <span className="w-2 h-2 bg-purple-300 rounded-full"></span>
            New: AI-Powered Tools Available
          </p>

          <h1 className="text-4xl font-bold mt-3">
            Supercharge Your <br />Digital Workflow
          </h1>

          <p className="py-6 text-[#627382] text-[12px]">
            Access premium AI tools, design assets,templates, and productivity<br/>
            software—all in one place. Start creating faster today.<br/>
            Explore Products

          </p>

          <div className='space-x-4 pt-5'>
            <button className="btn btn-primary rounded-full font-bold">
              Explore Products
            </button>

            <button className="btn border-blue-600 rounded-full font-bold">
              <img src={PlayImg} alt="playImg" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center mt-10">
        <div className="flex gap-4 bg-white p-2 rounded-full shadow">

          <button
            onClick={() => setActiveTab("products")}
            className={`px-6 py-2 rounded-full ${
              activeTab === "products"
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Products
          </button> */}

          {/* <button
            onClick={() => setActiveTab("cart")}
            className={`px-6 py-2 rounded-full ${
              activeTab === "cart"
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Cart
          </button>

        </div> */}
      </div>

    // </div>
  );
};




export default Herosection;