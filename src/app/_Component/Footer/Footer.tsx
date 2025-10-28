import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-4 mt-10 position-fixed bottom-0 w-full ">
      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        </div>
      </div>

      <div className="text-center text-gray100 text-sm font-semibold">
        © Copyright rimel 2025. All right reserved
      </div>

    </footer>
  );
};

export default Footer;
