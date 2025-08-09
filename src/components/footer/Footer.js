import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1e2024] text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo and Social Links */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h1 className='text-white font-bold'>Digital Creative</h1>

          <div className="flex gap-4">
            <span className="bannerIcon" onClick={() => window.open(window.links.facebook, "_blank")}><FaFacebookF /></span>
            <span className="bannerIcon" onClick={() => window.open(window.links.whatsapp, "_blank")}><FaWhatsapp /></span>
            <span className="bannerIcon" onClick={() => window.open(window.links.linkedIn, "_blank")}><FaLinkedinIn /></span>
          </div>
        </div>

        {/* Community Buttons */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          <button
            onClick={() => window.open("https://chat.whatsapp.com/YOUR_GROUP_LINK", "_blank")}
            className="px-5 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors duration-300 flex items-center gap-2"
          >
            <FaWhatsapp size={18} /> Join WhatsApp Community
          </button>

          <button
            onClick={() => window.open("https://www.facebook.com/groups/YOUR_GROUP_LINK", "_blank")}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
          >
            <FaFacebookF size={18} /> Join Facebook Community
          </button>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-gray-500 mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Muhammad Ahad | All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
