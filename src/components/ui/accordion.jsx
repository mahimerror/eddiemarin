import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { FaMinus, FaPlus } from "react-icons/fa";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "p-6 [&[data-state=open]]:shadow-[0px_8px_24px_0px_rgba(0,66,153,0.08)] rounded-xl",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between transition-all group text-[#043E5C] font-semibold text-2xl leading-[150%]",
          className
        )}
        {...props}
      >
        {children}
        <div className="relative size-9 rounded-full shrink-0 border-2 border-primary text-primary group-data-[state=open]:text-white bg-transparent group-data-[state=open]:bg-primary group-data-[state=open]:border-primary transition-colors duration-300">
          <FaPlus className="absolute size-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-data-[state=closed]:opacity-100 group-data-[state=closed]:rotate-0 group-data-[state=open]:opacity-0 group-data-[state=open]:rotate-180   " />
          <FaMinus className="absolute size-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-data-[state=closed]:opacity-0 group-data-[state=closed]:-rotate-180 group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-0" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-lg font-medium transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down leading-[150%] text-[#6A7283]"
      {...props}
    >
      <div className={cn("pt-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
