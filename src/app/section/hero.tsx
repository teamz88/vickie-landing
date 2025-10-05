"use client";

import { Select, SelectItem } from "@heroui/react";
// import { DotIcon } from "lucide-react";
import Image from "next/image";
import VoiceCallButton from "../components/VoiceCallButton";

export default function Hero() {
  // const scrollToNext = () => {
  //   const nextSection = document.querySelector("#next-section");
  //   if (nextSection) {
  //     nextSection.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   } else {
       // If no specific section, scroll down by viewport height
  //     window.scrollBy({
  //       top: window.innerHeight,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-7 lg:px-7 xl:px-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-6 xl:gap-0 mt-8 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-[130px] mb-16 sm:mb-24 md:mb-28 lg:mb-32 xl:mb-[180px]">
      <div className="space-y-6 md:space-y-7 lg:space-y-7 xl:space-y-8">
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row items-start sm:items-center md:items-center lg:items-center gap-3 md:gap-3 lg:gap-3">
          <p className="text-lg md:text-lg lg:text-xl xl:text-[20px] leading-6 md:leading-6 lg:leading-6 xl:leading-[24px] text-[#929292]">
            Select your industry:
          </p>
          <Select
            variant="bordered"
            placeholder="Choose your industry"
            defaultSelectedKeys={["hvac"]}
            className="w-full lg:w-64"
            classNames={{
              base: "w-full",
              trigger: "h-12 rounded-full border-2 border-[#43A047] bg-white hover:border-[#2a5a2d] focus:border-[#43A047] transition-all duration-200 shadow-sm hover:shadow-md",
              value: "text-[#43A047] font-medium",
              selectorIcon: "text-[#43A047]",
              popoverContent: "rounded-2xl border-2 border-[#43A047] shadow-xl bg-white",
              listbox: "p-2",
            }}
            popoverProps={{
              classNames: {
                base: "rounded-2xl",
                content: "rounded-2xl border-2 border-[#2a5a2d] shadow-xl bg-white p-0",
              },
            }}
            listboxProps={{
              itemClasses: {
                base: "rounded-xl mx-1 my-0.5 hover:bg-[#f0f7f0] focus:bg-[#e8f5e8] data-[selected=true]:bg-[#19331B] data-[selected=true]:text-white transition-colors duration-200",
                title: "font-medium",
              },
            }}
          >
            <SelectItem key="hvac">
              HVAC Services
            </SelectItem>
            <SelectItem key="healthcare">
              Fire Alarms System Companies
            </SelectItem>
            <SelectItem key="legal">
              Home Services & Cleaning
            </SelectItem>
            <SelectItem key="automotive">
              Junk Removal
            </SelectItem>
            <SelectItem key="home-services">
              Moving
            </SelectItem>
          </Select>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-[#19331B] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[79px]">
          AI that stops missed calls and books more jobs
        </h1>
        <VoiceCallButton 
          apiKey="5c2e1220-d870-46c4-9088-240fb4a0c7cb"
          assistantId="e83457ac-5b83-4293-b68d-3057cab52a16"
        />
        <p className="text-lg md:text-lg lg:text-xl xl:text-xl font-medium text-[#19331B] py-6 md:py-7 lg:py-8 xl:py-[30px]">
          Turn every customer who calls into an appointment
        </p>
        {/* <div className="flex flex-col lg:items-start xl:items-start items-center space-y-4">
          <button
            type="button"
            className="flex gap-3 items-center justify-center cursor-pointer group transition-all duration-300 hover:transform hover:scale-105 bg-transparent border-none p-0 focus:outline-none focus:ring-0 focus:ring-[#19331B] focus:ring- rounded-lg"
            onClick={scrollToNext}
            aria-label="Scroll to next section"
          >
            <div className="relative">
              <div className="w-7 h-12 rounded-full border border-[#007aff] flex items-center justify-center bg-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:border-[#2a5a2d]">
                <DotIcon className="w-6 h-6 text-[#007aff] group-hover:text-[#007aff] animate-bounce" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-base font-medium text-[#007aff] transition-colors">
                Keep scrolling to see how it works!
              </span>
            </div>
          </button>
        </div> */}
      </div>
      <div className="flex items-center justify-center relative z-0 h-[713px]">
        <iframe 
          src="/player.html" 
          className="w-full max-w-[334px] h-[713px] border-0 z-10 xl:absolute xl:right-28" 
          title="Vickie AI Player"
        />
        <Image
          src="/heroright.png"
          alt="AI voice assistant analytics dashboard showing call conversion metrics"
          className="hidden lg:block max-w-none shrink-0 absolute -right-[450px] xl:-right-[350px] w-[1200px] h-auto"
          width={1200}
          height={488}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUREiExkbHB8f/aAAwDAQACEQMRAD8A0XYobhLFXUvjvQdJjlk+vHnUMTvwjRR+B2ELuM17kAiJmfLvZMwPvzSfBKy2C9Cxk+XsVBnk5EgAv//Z"
        />
      </div>
    </div>
  );
}
