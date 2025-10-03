"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { Providers } from "../providers";
import { useState } from "react";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const faqData = [
    {
      key: "1",
      title: "We offer AI receptionist",
      content: "We offer Vickie, a 24/7 multilingual voice AI receptionist for service businesses. Vickie answers and routes inbound calls, books jobs, updates your CRM, and also makes outbound follow-up calls so no lead or quote ever slips through."
    },
    {
      key: "2", 
      title: "How long does a typical project take?",
      content: "Project timelines vary depending on complexity and scope. A simple website typically takes 2-4 weeks, while more complex applications can take 2-3 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      key: "3",
      title: "Do you provide ongoing support?",
      content: "Yes, we offer comprehensive ongoing support and maintenance packages. This includes regular updates, security monitoring, performance optimization, and technical support to ensure your digital assets continue to perform at their best."
    },
    {
      key: "4",
      title: "What is your pricing structure?",
      content: "Our pricing is project-based and depends on your specific requirements. We offer transparent pricing with no hidden fees. Contact us for a free consultation and detailed quote tailored to your needs."
    },
    {
      key: "5",
      title: "Can you work with existing systems?",
      content: "Absolutely! We have extensive experience integrating with existing systems, databases, and third-party services. We'll assess your current setup and recommend the best approach for seamless integration."
    }
  ];

  const handleSelectionChange = (keys: any) => {
    setOpenItems(new Set(keys));
  };

  const PlusIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>Expand</title>
      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const MinusIcon = () => (
    <svg width="24" height="24" className="rotate-90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>Collapse</title>
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <Providers>
      <div className="py-6 w-full max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-8 my-16 xl:my-32">
        <div className="flex flex-col items-center justify-center pb-8 xl:pb-16">
          <h2 className="text-3xl sm:text-4xl xl:text-[62px] font-bold text-[#19331B] leading-tight xl:leading-[74px] text-center px-4">
          Frequently Asked Questions
        </h2>
          <p className="text-lg xl:text-xl font-medium text-[#4C4C4C] leading-relaxed xl:leading-[24px] text-center max-w-2xl mt-4 px-4">
            Got questions? We've got answers.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto">
          <Accordion 
            variant="splitted"
            selectionMode="multiple"
            onSelectionChange={handleSelectionChange}
            className="gap-4 w-full"
          >
            {faqData.map((item) => (
              <AccordionItem 
                key={item.key} 
                aria-label={item.title} 
                title={item.title}
                className={`rounded-[20px] border-none transition-all duration-200 ${
                  openItems.has(item.key) 
                    ? 'bg-[#1C5E20] text-white' 
                    : 'bg-[#F8F8F9] text-[#19331B]'
                }`}
                indicator={({ isOpen }) => (
                  <div className={`transition-colors duration-200 ${
                    isOpen ? 'text-white' : 'text-[#19331B]'
                  }`}>
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                  </div>
                )}
                classNames={{
                  trigger: "py-4 xl:py-6 px-4 xl:px-6 hover:bg-opacity-90 transition-all duration-200 min-h-[60px] xl:min-h-[80px] flex items-center",
                  title: `text-xl xl:text-[30px] font-medium ${openItems.has(item.key) ? 'text-white' : 'text-[#19331B]'}`,
                  content: "px-4 xl:px-6 pb-4 xl:pb-6",
                  base: "shadow-none border-none"
                }}
              >
                <p className="text-base leading-relaxed text-white">
                  {item.content}
                </p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Providers>
  );
}
