import { cn } from "@/lib/utils";

const Container = ({ className, children }) => {
  return (
    <div
      className={cn(
        "container mx-auto max-w-[1384px] px-4 md:px-6 lg:px-7 xl:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
