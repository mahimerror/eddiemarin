import { ArrowBack, ArrowForward, SearchIcon } from "@/assets/Icons";
import homeBanner from "@/assets/images/home-banner.jpeg";
import Container from "../shared/Container";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/customTabs";
import { useEffect, useRef, useState } from "react";
import SlotCounter from "react-slot-counter";
import SectionTitle from "../shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import ProductCard from "../shared/ProductCard";

const Hero = () => {
  const [activeSearchTab, setActiveSearchTab] = useState("all-deals");
  const [activeDealsTab, setActiveDealsTab] = useState("new-deals");
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [startCounting, setStartCounting] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCounting(true);
            observer.disconnect();
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="relative">
        <Container className="z-10 relative pt-[180px] pb-[130px]">
          <h1 className="text-[48px] text-white font-semibold text-center mb-12 max-w-[1170px] mx-auto">
            Cash and{" "}
            <span className="text-[#FEC100] text-[50px] font-bold">
              Creative Financing Deals
            </span>{" "}
            Tailored for Every Investor
          </h1>
          <div className="py-5 sm:py-10 lg:py-12 px-4 sm:px-12 lg:px-16 border border-[#FFF]/40 bg-gradient-to-r from-[#212121]/[0.16] to-[#878787]/[0.16] mx-auto rounded-[16px] backdrop-blur-[18px] max-w-[730px] w-full space-y-5 lg:space-y-10 ">
            <Tabs
              value={activeSearchTab}
              onValueChange={setActiveSearchTab}
              className="mb-10 w-fit mx-auto"
            >
              <TabsList className="bg-transparent border-0 p-0 h-auto space-x-8">
                <TabsTrigger
                  value="all-deals"
                  className="text-white text-xl font-medium pb-2 relative data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:shadow-none data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:w-full data-[state=active]:after:h-1 data-[state=active]:after:bg-sky-400 data-[state=active]:after:rounded-full"
                >
                  All Deals
                </TabsTrigger>
                <TabsTrigger
                  value="creative"
                  className="text-white text-xl font-medium pb-2 relative data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:shadow-none data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:w-full data-[state=active]:after:h-1 data-[state=active]:after:bg-sky-400 data-[state=active]:after:rounded-full"
                >
                  Creative
                </TabsTrigger>
                <TabsTrigger
                  value="cash"
                  className="text-white text-xl font-medium pb-2 relative data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:shadow-none data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:w-full data-[state=active]:after:h-1 data-[state=active]:after:bg-sky-400 data-[state=active]:after:rounded-full"
                >
                  Cash
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="flex flex-col sm:flex-row justify-between gap-1.5 md:gap-3">
              <input
                type="text"
                placeholder="Enter a Countty, State, City or Zip Code"
                className="outline-none px-8 py-4 bg-[#FFF] text-[#8D8D8D] text-[16px] font-normal w-full rounded-full"
              />
              <Button className="text-xl font-medium">
                <SearchIcon />
                Search
              </Button>
            </div>
          </div>
        </Container>

        {/* overlay */}
        <figure className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <img
            src={homeBanner}
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{ backgroundColor: "#071431", opacity: 0.5 }}
          ></div>
        </figure>
      </div>

      <Container className="my-20">
        <div className="flex justify-between items-center">
          <div className="left w-full max-w-[504px]">
            <p className="text-[#043E5C] text-2xl font-medium text-center">
              For over 30 years, LoopNet has been the trusted brand for
              Commercial Real Estate
            </p>
          </div>
          <div className="right">
            <div className="flex">
              <div className="card">
                <div ref={counterRef} className="flex flex-col items-center">
                  <p className="text-4xl md:text-[40px] lg:text-[48px] font-bold text-secondary inline-flex gap-2 items-center mb-3">
                    <SlotCounter key={startCounting} value={300} duration={2} />
                    K+
                  </p>
                  <p className="font-medium text-lg md:text-xl lg:text-2xl text-nowrap text-[#043E5C]">
                    Active Listings
                  </p>
                </div>
              </div>

              <div className="w-px bg-[#A6AAB5] mx-8"></div>

              <div className="card">
                <div ref={counterRef} className="flex flex-col items-center">
                  <p className="text-4xl md:text-[40px] lg:text-[48px] font-bold text-secondary inline-flex gap-2 items-center mb-3">
                    <SlotCounter key={startCounting} value={13} duration={2} />
                    M+
                  </p>
                  <p className="font-medium text-lg md:text-xl lg:text-2xl text-nowrap text-[#043E5C]">
                    Monthly Visitors
                  </p>
                </div>
              </div>

              <div className="w-px bg-[#A6AAB5] mx-8"></div>

              <div className="card">
                <div ref={counterRef} className="flex flex-col items-center">
                  <p className="text-4xl md:text-[40px] lg:text-[48px] font-bold text-secondary inline-flex gap-2 items-center mb-3">
                    $
                    <SlotCounter key={startCounting} value={106} duration={2} />
                    B+
                  </p>
                  <p className="font-medium text-lg md:text-xl lg:text-2xl text-nowrap text-[#043E5C]">
                    In Transaction Value
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="my-20">
        <SectionTitle>Explore Terms For Sale</SectionTitle>

        <div className="flex justify-between items-center my-6">
          <Tabs
            value={activeDealsTab}
            onValueChange={setActiveDealsTab}
            className=""
          >
            <TabsList className="bg-transparent border-0 p-0 h-auto space-x-8">
              <TabsTrigger
                value="new-deals"
                className="px-0 text-[#5B6477] text-xl font-medium pb-2 relative data-[state=active]:bg-transparent data-[state=active]:text-[#043E5C] data-[state=active]:shadow-none data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:w-full data-[state=active]:after:h-1 data-[state=active]:after:bg-sky-400 data-[state=active]:after:rounded-full"
              >
                New Deals
              </TabsTrigger>
              <TabsTrigger
                value="most-viewed"
                className="px-0 text-[#5B6477] text-xl font-medium pb-2 relative data-[state=active]:bg-transparent data-[state=active]:text-[#043E5C] data-[state=active]:shadow-none data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:w-full data-[state=active]:after:h-1 data-[state=active]:after:bg-sky-400 data-[state=active]:after:rounded-full"
              >
                Most Viewed
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex items-center gap-2">
            <div
              ref={prevRef}
              className={`rounded-full bg-[#EBECEF] size-12 flex justify-center items-center cursor-pointer`}
            >
              <ArrowBack className="h-4 md:h-[22px] -translate-x-0.5" />
            </div>
            <div
              ref={nextRef}
              className={`rounded-full bg-[#EBECEF] size-12 flex justify-center items-center cursor-pointer`}
            >
              <ArrowForward className="h-4 md:h-[22px] translate-x-0.5" />
            </div>
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[FreeMode, Navigation]}
          className="myHomeSwiper"
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
                <div className="w-full h-full">
                  <ProductCard
                    title={`mahim ${idx}`}
                    item={item}
                    next={`next-${idx}`} // Dynamic unique class for inner swiper
                    prev={`prev-${idx}`}
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
    </>
  );
};

export default Hero;
