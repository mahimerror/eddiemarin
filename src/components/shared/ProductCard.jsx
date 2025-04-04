import productImg from "@/assets/images/product-img.jpeg";
import { Button } from "../ui/button";
import { BtnArrow, SliderArrowBack, SliderArrowForward } from "@/assets/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const ProductCard = ({ title, next, prev }) => {
  const items = [productImg, productImg, productImg, productImg];
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg mb-5">
      <figure className="h-[225px] w-full  relative">
        {/* <img
          src={productImg}
          alt=""
          className="h-full w-full object-cover object-center"
        /> */}

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          navigation={{
            prevEl: `.${prev}`,
            nextEl: `.${next}`,
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper tourSwiper !h-full"
        >
          {items?.map((item, index) => (
            <SwiperSlide key={index} className="relative">
              <figure className="h-full w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center"
                  src={item}
                  alt={`Slide ${index}`}
                />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className={`${prev} absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 p-1.5 z-10 cursor-pointer`}
          aria-label="Previous"
        >
          <SliderArrowForward />
        </button>

        <button
          className={`${next} absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 p-1.5 z-10 cursor-pointer`}
          aria-label="Next"
        >
          <SliderArrowBack />
        </button>

        <div className="overlay bg-black/10 absolute top-0 left-0 w-full h-full"></div>
        <div className=" absolute left-5 bottom-2 z-10">
          <p className="text-white font-semibold hover:underline">
            5N409 Eagle Ter. Itasca, IL 60143
          </p>
        </div>
      </figure>
      <div className="p-5">
        <h3 className="text-2xl font-semibold text-[#192A48] mb-1">$215,925</h3>
        <div className="flex items-center gap-2 mb-5">
          <p className="text-[#4F586D] font-semibold">6 Rooms</p>
          <div className="divider w-px bg-black h-4"></div>
          <p className="text-[#4F586D] font-semibold">3 Baths</p>
          <div className="divider w-px bg-black h-4"></div>
          <p className="text-[#4F586D] font-semibold">1000 sq</p>
          <div className="divider w-px bg-black h-4"></div>
          <p className="text-[#4F586D] font-semibold">Built in 1999</p>
        </div>
        <div className="flex justify-between">
          <div className="left flex gap-3">
            <div className="flex flex-col items-center">
              <h3 className="text-[#4F586D] text-xl font-semibold">8.0%</h3>
              <h3 className="text-[#4F586D] font-medium">Gross Yield</h3>
            </div>

            <div className="divider w-px bg-black"></div>

            <div className="flex flex-col items-center">
              <h3 className="text-[#4F586D] text-xl font-semibold">5.7%</h3>
              <h3 className="text-[#4F586D] font-medium">Cap rate</h3>
            </div>
          </div>
          <div className="right">
            <Button className="[&_svg]:size-4 [&_svg]:hover:translate-x-1.5 [&_svg]:hover:scale-125 [&_svg]:transition-all [&_svg]:duration-300 px-[22px]">
              View Property
              <BtnArrow />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
