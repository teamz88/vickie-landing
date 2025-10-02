import Image from "next/image";
import ScheduleCall from "../components/ScheduleCall";

export default function Call() {
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
        <ScheduleCall />
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
