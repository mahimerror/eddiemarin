import { cn } from "@/lib/utils";

const SectionTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-[#043E5C] text-4xl font-semibold", className)}>
      {children}
    </h4>
  );
};

export default SectionTitle;
