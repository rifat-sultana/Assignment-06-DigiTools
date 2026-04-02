import IconImg from "../../assets/assets/products/Icon.png";

const Navbar = ({ carts }) => {
  return (
    <div className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between">

      {/* LEFT: Logo */}
      <h1 className="text-3xl font-bold text-purple-600 ml-40">
        DigiTools
      </h1>

      {/* CENTER: Menu */}
      <ul className="hidden lg:flex gap-6 text-xl font-bold text-gray-700  ">
        <li className="cursor-pointer hover:text-purple-600">Products</li>
        <li className="cursor-pointer hover:text-purple-600">Features</li>
        <li className="cursor-pointer hover:text-purple-600">Pricing</li>
        <li className="cursor-pointer hover:text-purple-600">Testimonials</li>
        <li className="cursor-pointer hover:text-purple-600">FAQ</li>
      </ul>

      {/* RIGHT: Actions */}
      <div className="flex items-center gap-4 mr-40">

        {/* Cart */}
        <div className="flex items-center gap-1 cursor-pointer">
          <img src={IconImg} className="w-5 h-5" />
          <span className="text-sm">({carts.length})</span>
        </div>

        {/* Login */}
        <button className="text-sm font-medium text-gray-700 hover:text-purple-600 ">
          Login
        </button>

        {/* CTA Button */}
        <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-5 py-2 rounded-full text-sm font-medium">
          Get Started
        </button>

      </div>
    </div>
  );
};

export default Navbar;