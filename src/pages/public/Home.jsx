import AssignmentJourney from "@/components/sections/AssignmentJourney";
import Cta from "@/components/sections/Cta";
import Hero from "@/components/sections/Hero";
import Review from "@/components/sections/Review";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <AssignmentJourney />
      <Review />
      <Cta/>
    </>
  );
}

export default Home;
