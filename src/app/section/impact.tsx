import Image from "next/image";

export default function Impact() {
  return (
    <div className="w-full max-w-[1440px] mx-auto my-5 px-4 sm:px-6 xl:px-8">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-4xl xl:text-[62px] font-bold text-[#19331B] leading-tight xl:leading-[79px] text-center px-4">
          Real Impact, Real Results
        </h2>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-5 mt-8 xl:mt-[50px]">
        <div className="bg-[#ECFEEC] rounded-[20px] p-6 xl:p-12 relative">
          <h2 className="text-2xl sm:text-3xl xl:text-[40px] font-semibold text-[#2A2147] leading-tight xl:leading-[42px]">
            <span className="text-[#1C5E20]">+30%</span> Revenue from Captured
            Inbound Calls
          </h2>
          <p className="text-lg xl:text-xl font-normal text-[#535353] leading-relaxed xl:leading-[24px] mt-4 xl:mt-6">
            Boost your business with a 30% revenue increase by effectively
            capturing and converting inbound calls into sales opportunities.
          </p>
          <div className="flex items-center justify-center relative mt-8 xl:mt-12 w-full h-[250px] sm:h-[300px] xl:h-[412px]">
            <Image
              src="/impact1.png"
              alt="Chart showing 3x increase in qualified leads"
              className="max-w-none shrink-0 object-contain"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 80vw, 60vw"
              loading="lazy"
            />
          </div>
          <div className="shadow-box absolute bottom-0 w-full h-[150px] xl:h-[235px] left-0"></div>
        </div>
        <div className="bg-[#ECFEEC] rounded-[20px] p-6 xl:p-12 relative">
          <h2 className="text-2xl sm:text-3xl xl:text-[40px] font-semibold text-[#2A2147] leading-tight xl:leading-[42px]">
            <span className="text-[#1C5E20]">2x</span> Faster
            lead-to-customer conversion (7 days → 3.5 days)
          </h2>
          <p className="text-lg xl:text-xl font-normal text-[#535353] leading-relaxed xl:leading-[24px] mt-4 xl:mt-6">
            Accelerate your sales pipeline with a 2x faster lead-to-customer
            conversion, slashing the process from 7 days to just 3.5 days.
          </p>
          <div className="flex items-center justify-center relative mt-8 xl:mt-12 w-full h-[250px] sm:h-[300px] xl:h-[412px]">
            <Image
              src="/impact2.png"
              alt="Chart showing 2x faster lead-to-customer conversion"
              className="max-w-none shrink-0 object-contain"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 80vw, 60vw"
              loading="lazy"
            />
          </div>
          <div className="shadow-box absolute bottom-0 w-full h-[150px] xl:h-[235px] left-0"></div>
        </div>
      </div>
    </div>
  );
}
