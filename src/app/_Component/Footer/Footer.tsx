import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-4 mt-20">
      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Exclusive</h3>
            <p className="mb-4">Subscribe</p>
            <p className="mb-4">Get 10% off your first order</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border border-gray-600 rounded-sm py-2 px-4 focus:outline-none"
              />
              <button className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 00.187.855A.999.999 0 003.5 18h13a1 1 0 00.894-1.447l-7-14z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Column 2: Support */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>

          {/* Column 3: Account */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Account</h3>
            <ul className="space-y-2">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>

          {/* Column 4: Quick Link */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Column 5: Download App + Social */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Download App</h3>
            <p className="mb-4 text-sm">Save $3 with App New User Only</p>

            {/* QR + Store Buttons */}
            <div className="flex items-center gap-4 mb-6">
              {/* QR Code */}
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=HelloWorld"
                alt="QR Code"
                className="h-24 w-24"
              />

              {/* Store Buttons */}
              <div className="flex flex-col gap-3">
                <a href="#" aria-label="Google Play">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-12"
                  />
                </a>
                <a href="#" aria-label="App Store">
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="App Store"
                    className="h-12 ml-1"
                  />
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 text-white text-xl justify-center lg:justify-start">
              <a href="#" aria-label="Facebook" className="hover:text-blue-500">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-sky-400">
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-pink-500"
              >
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-400">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 mt-16 mb-6" />
        <div className="text-center text-gray-500 text-sm">
          © Copyright rimel 2022. All right reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
