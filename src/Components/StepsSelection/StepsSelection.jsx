import PackageImg from "../../assets/assets/products/package.png"
import RocketImg from "../../assets/assets/products/rocket.png"
import UserImg from "../../assets/assets/products/user.png"

const StepsSelection = () => {
  return (
    <div className="py-16 px-2 bg-gray-50">
      {/* Heading */}
      <div className="text-center  mb-12">
        <h2 className="text-3xl font-bold mt-5">Get Started In 3 Steps</h2>
        <p className="text-gray-500 mt-2 text-sm">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 px-40">

        {/* Card 1 */}
        <div className="relative bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-xl">
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
            01
          </div>
         <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-100 mb-4">
        <img src={UserImg} alt="package" className="w-8 h-8" />
        </div>
          <h3 className="font-semibold text-lg">Create Account</h3>
          <p className="text-gray-500 text-sm mt-2">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        {/* card-2 */}

        <div className="relative bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-xl">
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
            02
          </div>

          <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-100 mb-4">
          <img src={PackageImg} alt="package" className="w-8 h-8" />
          </div>

          <h3 className="font-semibold text-lg">Choose Products</h3>
          <p className="text-gray-500 text-sm mt-2">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>


         {/* Card 3 */}
        <div className="relative bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-xl">
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
            03
          </div>

         <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-100 mb-4">
  <img src={RocketImg} alt="rocket" className="w-8 h-8" />
</div>

          <h3 className="font-semibold text-lg">Start Creating</h3>
          <p className="text-gray-500 text-sm mt-2">
            Download and start using your premium tools immediately.
          </p>
        </div>
 </div>
    </div>
  );
};

export default StepsSelection;