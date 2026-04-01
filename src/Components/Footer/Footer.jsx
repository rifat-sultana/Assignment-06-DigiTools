import SocialLinkImg from "../../assets/assets/products/Social Links.png";

const Footer = () => {
  return (
    <div className="bg-[#0B1220] text-gray-300 px-6 py-12">

      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Logo + Text */}
        <div className="md:col-span-2">
          <h2 className="text-white text-2xl font-bold mb-4">DigiTools</h2>
          <p className="text-sm text-gray-400">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Blog</li> {/* ✅ FIXED */}
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        {/* Resources + Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>

          <h3 className="text-white font-semibold mb-3">Social Links</h3>
          <div className="flex gap-3">
            <div className="bg-gray-800 p-2 rounded-full">
              <img src={SocialLinkImg} alt="social" className="h-6" />
            </div>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto border-t border-gray-700 my-8"></div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">

        {/* Left */}
        <p className="text-center md:text-left">
          © 2026 Digitools. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          <p className="cursor-pointer hover:text-white">Privacy Policy</p>
          <p className="cursor-pointer hover:text-white">Terms of Service</p>
          <p className="cursor-pointer hover:text-white">Cookies</p>
        </div>

      </div>

    </div>
  );
};

export default Footer;