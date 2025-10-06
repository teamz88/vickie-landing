"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import VoiceCallButton from "../components/VoiceCallButton";

type CardData = {
  [key: number]: {
    image: string;
  };
};

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function Missed() {
  const handleScheduleCall = () => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/zforsythe-omadligroup/unlock-ai-for-your-business-book-a-free-30-min-clone",
      });
    }
  };

  const [selectedCard, setSelectedCard] = useState(1);

  const cardData: CardData = {
    1: {
      image: "/right1.png",
    },
    2: {
      image: "/right2.png",
    },
    3: {
      image: "/right3.png",
    },
  };

  const handleCardClick = (cardNumber: number, event: React.MouseEvent) => {
    // Prevent card selection if clicking on the CTA button inside the card
    const target = event.target as HTMLElement;
    if (target.closest(".book-demo")) {
      return;
    }
    setSelectedCard(cardNumber);
  };

  const handleKeyDown = (cardNumber: number, event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelectedCard(cardNumber);
    }
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto my-5 px-4 sm:px-6 md:px-7 lg:px-7 xl:px-8 mb-16 md:mb-20 lg:mb-24 xl:mb-[130px]">
      {/* Header */}
      <div className="flex items-center justify-center mb-8 md:mb-10 lg:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] text-center w-full md:w-4/5 lg:w-3/4 xl:w-2/3 font-bold text-[#19331B] leading-tight md:leading-tight lg:leading-tight xl:leading-[62px] px-4">
          Stop Losing Jobs to Missed Calls — Let AI Vickie Voice Handle It
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5 md:gap-6 lg:gap-6 xl:gap-7 mt-8 md:mt-10 lg:mt-12 xl:mt-[50px]">
        <div className="grid grid-cols-1 gap-5 md:gap-6 lg:gap-6 xl:gap-7">
          {/* Card 1 */}
          <button
            type="button"
            className={`bg-[#F8F8F9] text-[#19331B] px-6 md:px-8 lg:px-10 xl:px-[45px] pt-6 pb-6 md:pt-7 md:pb-7 lg:pt-8 lg:pb-8 xl:pt-[32px] pr-6 md:pr-8 lg:pr-12 xl:pr-[64px] rounded-[20px] cursor-pointer transition-all duration-500 ease-in-out transform text-left w-full
              ${
                selectedCard === 1
                  ? "scale-100 opacity-100 max-h-none"
                  : "scale-95 opacity-70 max-h-[120px] md:max-h-[130px] lg:max-h-[140px] overflow-hidden"
              }`}
            onClick={(e) => handleCardClick(1, e)}
            onKeyDown={(e) => handleKeyDown(1, e)}
            aria-pressed={selectedCard === 1}
          >
            <h3 className="font-semibold text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-[30px] w-full md:w-3/4 lg:w-2/3 xl:w-2/3 leading-tight md:leading-tight lg:leading-tight xl:leading-[40px]">
              The Problem: Missed Calls = Missed Revenue
            </h3>
            <div
              className={`transition-all duration-500 ease-in-out ${
                selectedCard === 1
                  ? "opacity-100 max-h-none"
                  : "opacity-0 max-h-0 overflow-hidden"
              }`}
            >
              <p className="text-base md:text-base lg:text-lg leading-relaxed mt-5 md:mt-6 lg:mt-6">
                Every missed call is a lost opportunity. Studies show that <span className="font-bold text-orange-500">27%</span>
                of potential customers won't call back if they reach voicemail.
                That's revenue walking out the door.
              </p>
              <div className="flex h-20 relative justify-center lg:justify-start xl:justify-start">
                <VoiceCallButton
                  className="scale-75 lg:absolute lg:-left-16"
                  apiKey="5c2e1220-d870-46c4-9088-240fb4a0c7cb"
                  assistantId="e83457ac-5b83-4293-b68d-3057cab52a16"
                />
              </div>
            </div>
          </button>

          {/* Card 2 */}
          <button
            type="button"
            className={`bg-[#F8F8F9] text-[#19331B] cursor-pointer px-6 md:px-8 lg:px-10 xl:px-[45px] pt-6 md:pt-7 lg:pt-8 xl:pt-[32px] pb-6 md:pb-7 lg:pb-8 xl:pb-[32px] pr-6 md:pr-8 lg:pr-12 xl:pr-[64px] rounded-[20px] transition-all duration-500 ease-in-out transform text-left w-full ${
              selectedCard === 2
                ? "scale-100 opacity-100 max-h-none"
                : "scale-95 opacity-70 max-h-[120px] md:max-h-[130px] lg:max-h-[140px] overflow-hidden"
            }`}
            onClick={(e) => handleCardClick(2, e)}
            onKeyDown={(e) => handleKeyDown(2, e)}
            aria-pressed={selectedCard === 2}
          >
            <h3 className="font-semibold text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-[30px] w-full md:w-3/4 lg:w-2/3 xl:w-2/3 leading-tight md:leading-tight lg:leading-tight xl:leading-[40px]">
              The Solution: AI Vickie Voice
            </h3>
            <div
              className={`transition-all duration-500 ease-in-out ${
                selectedCard === 2
                  ? "opacity-100 max-h-none"
                  : "opacity-0 max-h-0 overflow-hidden"
              }`}
            >
              <p className="text-base md:text-base lg:text-lg leading-relaxed mt-5 md:mt-6 lg:mt-6">
                AI Vickie Voice is your <span className="font-bold text-orange-500">24/7</span> virtual receptionist that never
                misses a call. It answers professionally, captures leads, books
                appointments, and routes urgent calls to your team.
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
          </button>

          {/* Card 3 */}
          <button
            type="button"
            className={`bg-[#F8F8F9] text-[#19331B] cursor-pointer px-6 md:px-8 lg:px-10 xl:px-[45px] pt-6 md:pt-7 lg:pt-8 xl:pt-[32px] pb-6 md:pb-7 lg:pb-8 xl:pb-[32px] pr-6 md:pr-8 lg:pr-12 xl:pr-[64px] rounded-[20px] transition-all duration-500 ease-in-out transform text-left w-full ${
              selectedCard === 3
                ? "scale-100 opacity-100 max-h-none"
                : "scale-95 opacity-70 max-h-[120px] md:max-h-[130px] lg:max-h-[140px] overflow-hidden"
            }`}
            onClick={(e) => handleCardClick(3, e)}
            onKeyDown={(e) => handleKeyDown(3, e)}
            aria-pressed={selectedCard === 3}
          >
            <h3 className="font-semibold text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-[30px] w-full md:w-3/4 lg:w-2/3 xl:w-2/3 leading-tight md:leading-tight lg:leading-tight xl:leading-[40px]">
              The Results: More Bookings, Less Stress
            </h3>
            <div
              className={`transition-all duration-500 ease-in-out ${
                selectedCard === 3
                  ? "opacity-100 max-h-none"
                  : "opacity-0 max-h-0 overflow-hidden"
              }`}
            >
              <p className="text-base md:text-base lg:text-lg leading-relaxed mt-5 md:mt-6 lg:mt-6">
                With AI Vickie Voice, you'll capture every lead, book more
                appointments, and free up your team to focus on what they do
                best. No more missed opportunities.
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
          </button>
        </div>

        {/* Right side - Image */}
        <div className="flex items-center justify-center">
          <div
            className={`relative w-full h-[300px] md:h-[400px] lg:h-[500px] ${selectedCard === 1 ? "lg:w-[700px] lg:h-[500px] xl:w-[900px] xl:h-[600px]" : "lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]"}`}
          >
            <Image
              src={cardData[selectedCard].image}
              alt={`Illustration for card ${selectedCard}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 500px, 600px"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
