import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div>
      <SectionTitle className="text-center mb-12 mt-[180px]">
        Frequently Asked Questions
      </SectionTitle>
      <Container>
        <Accordion type="single" defaultValue="item-1" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              1. What does an Earnest Money Deposit (EMD) mean to ‘Terms For
              Sale’?
            </AccordionTrigger>
            <AccordionContent>
              A: The Earnest Money Deposit is a deposit made by the buyer after
              accepting the terms of the assignment. This is the only way to
              secure their interest in the property once they have signed the
              binding contract.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              2. Why is the EMD non-refundable when working with ‘Terms For
              sale’?{" "}
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>3. Why is it important to send the EMD promptly? </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Container>
    </div>
  );
};

export default Faq;
