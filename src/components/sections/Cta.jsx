import { BtnArrow } from "@/assets/Icons";
import Container from "../shared/Container";
import { Button } from "../ui/button";

const Cta = () => {
  return (
    <Container className="my-20">
      <figure className="w-full h-[400px] rounded-3xl overflow-hidden relative">
        <img
          src="https://i.ibb.co.com/8qWy0YZ/58b4ae4552cef899a73f23d6ccd9e0aa.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="overlay bg-[#07143199] absolute top-0 left-0 w-full h-full"></div>
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center ">
          <h2 className="text-white font-semibold text-[48px] text-nowrap mb-8">
            JOIN OUR EXCLUSIVE BUYERS LIST
          </h2>
          <Button className="[&_svg]:size-4 [&_svg]:hover:translate-x-1.5 [&_svg]:hover:scale-125 [&_svg]:transition-all [&_svg]:duration-300 px-[22px]">
            Sell Your Deal
            <BtnArrow />
          </Button>
        </div>
      </figure>
    </Container>
  );
};

export default Cta;
