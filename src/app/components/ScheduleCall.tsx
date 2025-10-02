"use client";

import { ArrowRight } from "lucide-react";

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function ScheduleCall() {
  const handleScheduleCall = () => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/zforsythe-omadligroup/unlock-ai-for-your-business-book-a-free-30-min-clone",
      });
    }
  };

  return (
    <button
      type="button"
      className="flex cursor-pointer call-back items-center justify-center w-full sm:w-fit md:w-fit lg:w-fit gap-3 sm:gap-4 md:gap-4 lg:gap-4 py-3 sm:py-3.5 md:py-3.5 lg:py-3.5 px-4 sm:px-5 md:px-5 lg:px-5 bg-white rounded-full"
      onClick={handleScheduleCall}
    >
      <h1 className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl font-semibold">
        Schedule a Call
      </h1>
      <div className="w-8 sm:w-9 md:w-9 lg:w-9 h-8 sm:h-9 md:h-9 lg:h-9 book-demo flex items-center justify-center rounded-full shrink-0">
        <ArrowRight className="w-3 sm:w-4 md:w-4 lg:w-4 text-white" />
      </div>
    </button>
  );
}
