import {
  ChooseIcon1,
  ChooseIcon2,
  ChooseIcon3,
  ChooseIcon4,
  ChooseIcon5,
  ChooseIcon6,
} from "@/assets/Icons";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
const chooseCards = [
  {
    title: "Integrity First",
    description:
      "We value transparency in every deal. Our contract marketplace is built for clarity , not confusion.",
    image: ChooseIcon1,
  },
  {
    title: "Trust and Transparency",
    description:
      "Verified listings, transparent profiles, and direct communication make customers feel secure.",
    image: ChooseIcon2,
  },
  {
    title: "Growth-Minded Platform",
    description:
      "We're here to support your journey - whether you're scaling your portfolio or seeking your next investment-ready contract.",
    image: ChooseIcon3,
  },
  {
    title: "Collaborative Approach",
    description:
      "We believe in building long-term partnerships - not just transactions.",
    image: ChooseIcon4,
  },
  {
    title: "Adaptive by Nature",
    description:
      "Markets shift. We stay nimble to support how you search, evaluate, and engage.",
    image: ChooseIcon5,
  },
  {
    title: "Numbers That Matter",
    description:
      "Each opportunity comes with essential deal data—so you can independently evaluate and move forward on your terms.",
    image: ChooseIcon6,
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
            className="flex flex-col gap-4 pb-8 p-6 bg-white rounded-2xl shadow-[0px_8px_24px_0px_rgba(0,66,153,0.08)]"
          >
            {/* <img src={card.image} alt={card.title} className="size-[54px]" /> */}
            {<card.image className="h-[56px] w-fit" />}
            <h3 className="text-xl text-[#1D2635] font-semibold">
              {card.title}
            </h3>
            <p className="text-[#6A7283] font-medium">{card.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WhyChooseUs;
