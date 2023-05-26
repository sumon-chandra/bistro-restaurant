import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="font-inter">
      <div className="lg:grid grid-cols-2">
        <div className="bg-[#1F2937] text-white text-right lg:p-20 p-8 space-y-3">
          <h3 className="lg:text-2xl font-bold uppercase">Contact Us</h3>
          <p>123 ABC Street, Uni 21, Bangladesh</p>
          <p>+880123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>
        <div className="text-white bg-[#111827] text-left lg:p-20 p-8 space-y-3">
          <h3 className="lg:text-2xl font-bold uppercase">Follow us</h3>
          <p>Join us on social media</p>
          <div className="lg:text-2xl font-bold flex items-center gap-x-6 lg:pt-4">
            <BsFacebook />
            <BsYoutube />
            <BsInstagram />
            <BsTwitter />
          </div>
        </div>
      </div>
      <p className="footer-center p-4 bg-black text-white lg:text-[16px] text-[10px]">
        Copyright © 2023 - All right reserved by{" "}
        <span className="font-bold">BISTRO BOSS</span> Industries Ltd
      </p>
    </footer>
  );
};

export default Footer;
