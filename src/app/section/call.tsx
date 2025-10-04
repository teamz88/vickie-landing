'use client';

import Image from "next/image";
import { ArrowRight } from "lucide-react";

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function Call() {

  const handleScheduleCall = () => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/zforsythe-omadligroup/unlock-ai-for-your-business-book-a-free-30-min-clone",
      });
    }
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto overflow-hidden min-h-[300px] xl:h-[468px] gap-6 xl:gap-[150px] rounded-[20px] xl:rounded-[50px] bg-[#1c5e20] p-6 xl:p-10 xl:pl-14 flex flex-col xl:flex-row items-center justify-between mb-16 xl:mb-32">
      <div className="w-full xl:w-1/2">
        <h1 className="text-2xl sm:text-3xl xl:text-[42px] font-semibold text-white leading-tight xl:leading-[47px]">
          Team focus on Billable Work while Vickie covers Every Call
        </h1>
        <p className="text-lg xl:text-xl font-normal text-white py-4 xl:py-[30px]">
          Maximize productivity with Vickie handling every call, freeing your
          team to focus on high-value billable work.
        </p>
        <button
          type="button"
          onClick={handleScheduleCall}
          className="flex mt-6 md:mt-7 lg:mt-8 xl:mt-9 items-center justify-center gap-4.5 py-4 md:py-4 lg:py-4 px-4 md:px-5 lg:px-5 book-demo transition-all duration-300 ease-in w-full md:w-full lg:w-fit xl:w-fit rounded-full cursor-pointer"
        >
          <h1 className="text-lg md:text-lg lg:text-xl xl:text-xl font-semibold text-white flex-auto text-center">
            Book a Demo
          </h1>
          <div className="w-8 md:w-8 lg:w-9 xl:w-9 h-8 md:h-8 lg:h-9 xl:h-9 bg-white flex items-center justify-center rounded-full shrink-0">
            <ArrowRight className="w-4 text-black" />
          </div>
        </button>
      </div>
      <div className="flex items-center justify-center relative w-full xl:w-auto">
        <Image
          src="/call2.png"
          alt="Chart showing team productivity increase with Vickie handling calls"
          className="max-w-full xl:max-w-none shrink-0 mt-4 xl:mt-[60px]"
          width={700}
          height={488}
          sizes="(max-width: 1280px) 100vw, 700px"
          loading="lazy"
        />
      </div>
    </div>
  );
}
