
import IconImg from "../assets/assets/products/Icon (Stroke).png"


const Navbar = () => {
  return (
    <div className="navbar w-full  flex items-center justify-between align-middle gap-20 bg-base-100 shadow-md pl-6">
  <div className="navbar-start">
    
    <a className="text-purple-600 font-bold text-3xl p-8 "> DigiTools </a>
  </div>
  <div className="navbar-center  hidden lg:flex p-10">
    <ul className="flex items-center text-[14px] gap-4 px-1">
      <li><a> Products</a></li>
      <li><a> Features</a></li>
      <li><a> Pricing</a></li>
      <li><a> Testimonials </a></li>
      <li><a> FAQ </a></li>

    </ul>
  </div>
  <div className=" pr-8 gap-3 "> 
  <div className="navbar-end flex items-center">
  <img src={IconImg} alt="icon" className="w-6 h-6  " />
  <a className="btn btn-ghost mr-2">Login</a>
  <a className="btn bg-purple-600 text-white rounded-full px-5 ">Get Started</a>
  </div>
</div>
</div>
  );
};

export default Navbar;