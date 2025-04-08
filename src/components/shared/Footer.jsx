import { Link } from "react-router";
import Container from "./Container";
import {
  MailIcon1,
  PhoneIcon1,
  SocialIcon1,
  SocialIcon2,
  SocialIcon3,
  SocialIcon4,
} from "@/assets/Icons";

const Footer = () => {
  return (
    <div className="bg-[#192A48]">
      <Container className="text-white flex justify-between pt-[110px] pb-[75px]">
        <div className="font-manrope">
          <div className="flex items-center gap-5 mb-7">
            <img src="https://i.ibb.co.com/rKCCgtsr/logo.png" alt="" />
            <p className="font-semibold text-4xl">Terms For Sale</p>
          </div>
          <form className="relative w-fit mb-2.5">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#393939] text-white border-none outline-none px-6 py-3.5 w-[420px] rounded-full placeholder:text-[#A6AAB5]"
            />
            <button className="bg-[#FF8C32] text-white font-semibold  absolute top-1 bottom-1 right-1 px-4 rounded-full z-10">
              Subscribe
            </button>
          </form>
          <p className="">
            By subscribing you agree to with our{" "}
            <span className="hover:underline">Privacy Policy</span>
          </p>
        </div>
        <div className="">
          <h3 className="text-xl font-bold font-manrope">Company</h3>
          <ul className="flex flex-col gap-2 mt-5 leading-[150%]">
            <li className="hover:underline">About Us</li>
            <li className="hover:underline">Properties</li>
            <li className="hover:underline">Contact Us</li>
            <li className="hover:underline">Book a Call</li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-xl font-bold font-manrope">Contact</h3>
          <ul className="flex flex-col gap-4 mt-5 leading-[150%]">
            <li>
              <Link to="#" className="hover:underline flex items-center">
                <div className="w-[35px] flex-shrink-0">
                  <PhoneIcon1 className="h-[22px]" />
                </div>{" "}
                (480)637-3117
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline flex items-center">
                <div className="w-[35px] flex-shrink-0">
                  <MailIcon1 className="h-[22px]" />
                </div>
                info@companyname.com
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-xl font-bold font-manrope">Social Media</h3>
          <div className="flex gap-2 mt-5 leading-[150%]">
            <Link
              to="#"
              className="hover:bg-[#FF8C32] hover:border-[#FF8C32] transition-all duration-300 size-9 border rounded-full flex items-center justify-center"
            >
              <SocialIcon1 className="h-[18px]" />
            </Link>
            <Link
              to="#"
              className="hover:bg-[#FF8C32] hover:border-[#FF8C32] transition-all duration-300 size-9 border rounded-full flex items-center justify-center"
            >
              <SocialIcon2 className="h-[18px]" />
            </Link>
            <Link
              to="#"
              className="hover:bg-[#FF8C32] hover:border-[#FF8C32] transition-all duration-300 size-9 border rounded-full flex items-center justify-center"
            >
              <SocialIcon3 className="h-[18px]" />
            </Link>
            <Link
              to="#"
              className="hover:bg-[#FF8C32] hover:border-[#FF8C32] transition-all duration-300 size-9 border rounded-full flex items-center justify-center"
            >
              <SocialIcon4 className="h-[18px]" />
            </Link>
          </div>
        </div>
      </Container>
      <p className="text-center text-[#A6AAB5] text-[15px] py-4 border-t border-[#798090] font-medium">
        2024 company name. Designed in compnay
      </p>
    </div>
  );
};

export default Footer;
