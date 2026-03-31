
import PlayImg from "../../assets/assets/products/Play.png"
import BannerImg from "../../assets/assets/products/banner.png"
import StarImg from "../../assets/assets/products/star.png"



const Herosection = () => {

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">

        <img className="max-w-sm rounded-lg shadow-2xl ml-10 "
          src={BannerImg} alt="Banner" />

        <div className="pr-10">
          <p className="inline-flex items-center gap-2 bg-purple-100 text-purple-500 text-sm px-4 py-1 rounded-full font-medium">

            <span className="w-2 h-2 bg-purple-300 rounded-full"></span>
            New: AI-Powered Tools Available </p>

          <h1 className="text-4xl font-bold mt-3">Supercharge Your <br />Digital Workflow</h1>
          <p className="py-6 text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity<br />
            software—all in one place. Start creating faster today.<br />
            Explore Products

          </p>

          <div className='space-x-4 '>
            <button className="btn btn-primary rounded-full  font-bold ">Explore Products</button>
            <button className="btn border-blue-600 rounded-full  font-bold ">
              <img src={PlayImg} alt="playImg" />
              Watch Demo </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;