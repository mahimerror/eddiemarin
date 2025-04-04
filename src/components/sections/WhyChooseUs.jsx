import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import icon1 from "@/assets/icons/icon1.png";
import icon2 from "@/assets/icons/icon2.png";
import icon3 from "@/assets/icons/icon3.png";
import icon4 from "@/assets/icons/icon4.png";
import icon5 from "@/assets/icons/icon5.png";
import icon6 from "@/assets/icons/icon6.png";

const chooseCards = [
  {
    title: "Book with Arabic Language",
    description:
      "Full Arabic support makes booking easy and inviting for those more comfortable in Arabic.",
    image: icon1,
  },
  {
    title: "Trust and Transparency",
    description:
      "Verified listings, transparent profiles, and direct communication make customers feel secure.",
    image: icon2,
  },
  {
    title: "Locally Focused Rewards",
    description:
      "The loyalty program includes rewards and benefits tailored to Arab Israelis, with special offers around popular vacation periods.",
    image: icon3,
  },
  {
    title: "Family and Privacy-Focused Accommodations",
    description:
      "Our properties prioritize privacy and family-friendly environments, meeting specific customer needs.",
    image: icon4,
  },
  {
    title: "Personalized Customer Service",
    description:
      "Arabic-speaking customer service that responds to questions quickly and professionally, improving customer trust.",
    image: icon5,
  },
  {
    title: "Community and Cultural Connection",
    description:
      "Through campaigns and partnerships with local influencers, we’re part of the community, understanding and speaking their language.",
    image: icon6,
  },
];

const WhyChooseUs = () => {
  return (
    <Container className="my-20">
      <SectionTitle className="mb-[56px]">Why Choose Us</SectionTitle>
      <div className="grid grid-cols-3 gap-[30px]">
        {chooseCards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 p-4 bg-white rounded-2xl shadow-[0px_8px_24px_0px_rgba(0,66,153,0.08)]"
          >
            <img src={card.image} alt={card.title} className="size-[54px]" />
            <h3 className="text-xl text-[#1D2635] font-semibold">{card.title}</h3>
            <p className="text-[#6A7283] font-medium">{card.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WhyChooseUs;
