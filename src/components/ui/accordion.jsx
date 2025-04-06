import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { FaMinus, FaPlus } from "react-icons/fa";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline group [&[data-state=open]]:border",
          className
        )}
        {...props}
      >
        {children}
        <div className="relative size-9 rounded-full shrink-0 border border-[#0B0B0B] text-[#0B0B0B] group-data-[state=open]:text-white bg-transparent group-data-[state=open]:bg-primary group-data-[state=open]:border-primary transition-colors duration-300">
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
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
