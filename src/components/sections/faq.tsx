"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqData = [
  {
    question: "What is Craftwork?",
    answer:
      "Craftwork is a platform providing high-quality design resources, including wireframe kits, UI components, and illustrations for designers and developers. Our products streamline the creation process for various digital projects.",
  },
  {
    question: "How can I use Craftwork products?",
    answer:
      "You can use our products for both personal and commercial projects, including client work, dribbble shots, personal websites, social media accounts, advertising, and physical items. Our resources are versatile and suitable for a wide range of design needs.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes, you can cancel your subscription anytime through your account's subscription management section. Cancellation stops future charges but doesn't refund the current billing period.",
  },
  {
    question: "Can I turn off my auto-renewal?",
    answer:
      "Absolutely. You can disable auto-renewal in your account's subscription settings at any time. This ensures your subscription won't automatically renew at the end of the current billing cycle.",
  },
];

export default function FAQSection() {
  const [activeItem, setActiveItem] = useState<string | undefined>(undefined);
  return (
    <div className="w-full mx-auto py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-start gap-8">
      <div className="w-full lg:max-w-sm">
        <div className="mb-8 flex flex-col space-y-3">
          <span className="inline-block border border-[#0A0F2908] w-fit bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-4">
            F.A.Q
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4">
            Frequently asked question
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7">
            No matter what project you're working on, we've got you covered with
            the best wireframe kits for any platform.
          </p>
        </div>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full lg:max-w-xl space-y-2"
        value={activeItem!}
        onValueChange={setActiveItem}
      >
        {faqData.map((item, index) => {
          const itemValue = `item-${index + 1}`;
          const isActive = activeItem === itemValue;
          return (
            <AccordionItem
              key={index}
              value={itemValue}
              className="border border-gray-200 rounded-sm overflow-hidden"
            >
              <AccordionTrigger
                className={cn(
                  "px-3 sm:px-4 py-2 sm:py-3 hover:no-underline min-h-[3.5rem] sm:h-14",
                  isActive ? "bg-[#f7f7f8]" : "bg-white"
                )}
              >
                <span className="text-left flex-grow text-sm sm:text-base">
                  {item.question}
                </span>
                {isActive ? (
                  <Minus className="text-slate-500 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Plus className="text-slate-500 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </AccordionTrigger>
              <AccordionContent className="bg-[#f7f7f8] text-slate-600 leading-6 sm:leading-7 px-3 sm:px-4 text-sm sm:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
