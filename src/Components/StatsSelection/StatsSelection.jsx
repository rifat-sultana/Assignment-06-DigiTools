


const StatsSection = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-10 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="flex flex-col md:flex-row items-center text-white text-center">

         
          <div className="flex-1 py-4">
            <h2 className="text-2xl md:text-3xl font-bold">50K+</h2>
            <p className="text-sm mt-1">Active Users</p>
          </div>

     
          <div className="hidden md:block w-px h-12 bg-white opacity-40"></div>
          <div className="block md:hidden w-12 h-px bg-white opacity-40"></div>

          <div className="flex-1 py-4">
            <h2 className="text-2xl md:text-3xl font-bold">200+</h2>
            <p className="text-sm mt-1">Premium Tools</p>
          </div>

          <div className="hidden md:block w-px h-12 bg-white opacity-40"></div>
          <div className="block md:hidden w-12 h-px bg-white opacity-40"></div>
      
          <div className="flex-1 py-4">
            <h2 className="text-2xl md:text-3xl font-bold">4.9</h2>
            <p className="text-sm mt-1">Rating</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default StatsSection;