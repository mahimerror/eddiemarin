import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import ReactStars from "react-rating-stars-component";
import { ArrowBack, ArrowForward } from "@/assets/Icons";
import { FaStar } from "react-icons/fa";

const Review = () => {
  const secondExample = {
    size: 20,
    color: "#6A7283",
    activeColor: "#FF8002",
    value: 2,
    edit: false,
    emptyIcon: <FaStar />,
    halfIcon: <FaStar />,
    filledIcon: <FaStar />,
  };

  return (
    <Container className="my-20">
      <div className="mb-[56px] flex justify-between items-center">
        <SectionTitle className="">What our Customer are saying</SectionTitle>
        <div className="flex items-center gap-2">
          <div
            className={`prev2 rounded-full bg-[#EBECEF] size-12 flex justify-center items-center cursor-pointer`}
          >
            <ArrowBack className="h-4 md:h-[22px] -translate-x-0.5" />
          </div>
          <div
            className={`next2 rounded-full bg-[#EBECEF] size-12 flex justify-center items-center cursor-pointer`}
          >
            <ArrowForward className="h-4 md:h-[22px] translate-x-0.5" />
          </div>
        </div>
      </div>
      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={{
            prevEl: `.prev2`, // Unique navigation class
            nextEl: `.next2`,
          }}
          modules={[FreeMode, Navigation]}
          className="myReviewSwiper !px-5 !-mx-5"
          breakpoints={{
            560: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            850: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {Array(9)
            .fill(null)
            .map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="w-full h-full shadow-lg rounded-2xl p-6 mb-5">
                  <div className="flex gap-3 mb-5">
                    <figure className="size-[60px] rounded-full overflow-hidden shrink-0">
                      <img
                        src="https://i.ibb.co.com/0RnHzRTY/profile-3.png"
                        alt=""
                        className="w-full h-full object-cover obcect-center"
                      />
                    </figure>
                    <div className="">
                      <h3 className="text-[#1D2635] text-2xl font-bold">
                        Jack Smith
                      </h3>
                      <h4 className="text-[#6A7283] text-lg font-medium">
                        UI UX Designer
                      </h4>
                    </div>
                  </div>

                  <div className="">
                    <div className="flex gap-6 mb-2">
                      <ReactStars {...secondExample} />
                      <p className="text-[#6A7283] font-medium">Oct 28, 2024</p>
                    </div>
                    <p className="text-[#1D2635] text-lg font-medium">
                      We had an unforgettable stay at one of the top villas
                      listed on this site. From the seamless booking experience.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Review;
