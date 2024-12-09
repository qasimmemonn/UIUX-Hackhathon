import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto  py-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* First Column */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-6">FIND A STORE</h3>
          <ul className="space-y-4">
            <li>BECOME A MEMBER</li>
            <li>SIGN UP FOR EMAIL</li>
            <li>Send Us Feedback</li>
            <li>STUDENT DISCOUNTS</li>
          </ul>
        </div>

        {/* Second Column */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-6">GET HELP</h3>
          <ul className="space-y-4">
            <li>Order Status</li>
            <li>Delivery</li>
            <li>Returns</li>
            <li>Payment Options</li>
            <li>Contact Us On Nike.com Inquiries</li>
            <li>Contact Us On All Other Inquiries</li>
          </ul>
        </div>

        {/* Third Column */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-6">ABOUT NIKE</h3>
          <ul className="space-y-4">
            <li>News</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Sustainability</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end space-x-4  ">
        <a
                href="https://www.facebook.com"
                className="text-gray-400 hover:text-blue-600 "
                aria-label="Facebook"
              >
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com"
                className="text-gray-400 hover:text-pink-600"
                aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.twitter.com"
                className="text-gray-400 hover:text-blue-400"
                aria-label="Twitter"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com"
                className="text-gray-400 hover:text-red-600"
                aria-label="YouTube"
              >
                <FaYoutube className="h-6 w-6" />
              </a>

        </div>
      </div>

      {/* Bottom Section */}
      <div className=" border-gray-700 py-4 pt-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0 flex">
           <span className="flex pr-3 text-md"> <FaLocationDot /> India</span> &copy; 2023 Nike, Inc. All Rights Reserved
          </div>
          <div className="space-x-4">
            <a href="#" className="hover:text-gray-300">Guides</a>
            <a href="#" className="hover:text-gray-300">Terms of Sale</a>
            <a href="#" className="hover:text-gray-300">Terms of Use</a>
            <a href="#" className="hover:text-gray-300">Nike Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
