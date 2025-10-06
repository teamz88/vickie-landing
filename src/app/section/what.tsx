"use client";

import Image from "next/image";
import { Providers } from "../providers";
import { ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function What() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScheduleCall = () => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/zforsythe-omadligroup/unlock-ai-for-your-business-book-a-free-30-min-clone",
      });
    }
  };

  const items = [
    {
      key: "1",
      icon: "clock",
      title: "Available 24/7",
      content:
        "Get calls at 2 AM? Vickie answers every call, captures leads, sends quotes, and routes urgent ones, day or night. Never miss a customer again.",
    },
    {
      key: "2",
      icon: "calendar1",
      title: "Book Appointments",
      content:
        "Vickie books appointments directly into your calendar: no back-and-forth, no missed slots, just smooth scheduling.",
    },
    {
      key: "3",
      icon: "globe",
      title: "Multilingual",
      content:
        "Our Vickie speaks your customers’ language: English, Spanish, so every caller feels understood and supported.",
    },
    {
      key: "4",
      icon: "roundUp",
      title: "Follow-Ups",
      content:
        "Vickie stays on top of every lead, sending timely follow-up texts or calls to keep the conversation going and boost your chances of closing the deal, without lifting a finger.",
    },
    {
      key: "5",
      icon: "call2",
      title: "Urgent calls routing",
      content:
        "Vickie identifies emergencies and immediately routes the call to the on-call technician—so urgent jobs get handled fast.",
    },
    {
      key: "6",
      icon: "chat",
      title: "Texting",
      content:
        "Vickie sends and replies to texts: confirm appointments, share quotes, and follow up automatically, all through SMS.",
    },
    {
      key: "7",
      icon: "calendar3",
      title: "CRM",
      content:
        "Connects effortlessly with Jobber, GHL, QuickBooks, Housecall Pro, and more, syncing calls, appointments, payments, and lead data in real time.",
    },
    {
      key: "8",
      icon: "chart",
      title: "Analytics Dashboard",
      content:
        "Track calls, leads, bookings, and revenue in real time with a live dashboard, see what’s working and where to improve.",
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }
  };

  const prevSlide = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Providers>
      <div
        id="features"
        className="px-4 sm:px-6 xl:px-20 py-8 xl:py-20 w-full max-w-[1440px] mx-auto my-16 xl:my-32 what-box relative"
      >
        <div className="rounded-box w-[200px] h-[200px] xl:w-[344px] xl:h-[344px] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

        <div className="flex flex-col items-center justify-center pb-8 xl:pb-16">
          <h2 className="text-3xl xl:text-[62px] font-bold text-[#19331B] leading-tight xl:leading-[74px] text-center px-4">
            What makes Vickie different?
          </h2>
          <p className="text-lg xl:text-xl font-medium text-[#4C4C4C] leading-6 xl:leading-[24px] text-center max-w-2xl mt-4 px-4">
            Human-Like AI Voice Agents — Multilingual, 24/7
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden xl:grid grid-cols-4 gap-4 relative z-10">
          {items.map((item) => (
            <div
              key={item.key}
              className="group cursor-pointer bg-white hover:bg-[#1C5E20] hover:text-white rounded-[20px] px-[30px] py-[42px] relative transition-all duration-300 ease"
            >
              <Image
                src={`/icons/${item.icon}.svg`}
                alt={item.title}
                className="transition-all mb-[52px] duration-300 ease group-hover:brightness-0 group-hover:invert"
                width={64}
                height={64}
              />
              <h2 className="text-[30px] font-semibold leading-[32px]">
                {item.title}
              </h2>
              <p className="text-xl font-normal mt-4">{item.content}</p>
            </div>
          ))}
        </div>

        {/* Mobile Swipable Layout */}
        <div className="xl:hidden relative z-10 w-full">
          {/* Swipable Container */}
          <div ref={scrollContainerRef} className="w-[334px] h-full">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {items.map((item) => (
                <div key={item.key} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white rounded-[20px] h-full px-6 py-8 shadow-lg">
                    <div className="flex flex-col items-center text-center">
                      <Image
                        src={`/icons/${item.icon}.svg`}
                        alt={item.title}
                        className="mb-6"
                        width={48}
                        height={48}
                      />
                      <h2 className="text-2xl font-semibold leading-tight mb-4 text-[#19331B]">
                        {item.title}
                      </h2>
                      <p className="text-base font-normal text-[#4C4C4C] leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center mt-6">
            <div className="flex space-x-2">
              {items.map((item, index) => (
                <button
                  key={`dot-${item.key}`}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-[#1C5E20]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Touch/Swipe Support */}
          <div
            className="absolute inset-0"
            onTouchStart={(e) => {
              const touch = e.touches[0];
              const startX = touch.clientX;

              const handleTouchMove = (moveEvent: TouchEvent) => {
                const currentTouch = moveEvent.touches[0];
                const diffX = startX - currentTouch.clientX;

                if (Math.abs(diffX) > 50) {
                  if (diffX > 0) {
                    nextSlide();
                  } else {
                    prevSlide();
                  }
                  document.removeEventListener("touchmove", handleTouchMove);
                  document.removeEventListener("touchend", handleTouchEnd);
                }
              };

              const handleTouchEnd = () => {
                document.removeEventListener("touchmove", handleTouchMove);
                document.removeEventListener("touchend", handleTouchEnd);
              };

              document.addEventListener("touchmove", handleTouchMove);
              document.addEventListener("touchend", handleTouchEnd);
            }}
          />
        </div>

        <div className="flex items-center justify-center mt-8 xl:mt-[16px]">
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
      </div>
    </Providers>
  );
}
