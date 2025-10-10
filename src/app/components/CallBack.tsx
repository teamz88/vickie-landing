import Image from "next/image";
import TalkVickie from "./TalkVickie";
import VoiceCallButton from "./VoiceCallButton";

export default function CallBack() {
  return (
    <div className="w-full overflow-hidden -mt-[200px] sm:-mt-[250px] md:-mt-[280px] lg:-mt-[300px] xl:-mt-[320px] h-auto min-h-[400px] sm:min-h-[500px] md:min-h-[520px] lg:min-h-[540px] xl:h-[568px] rounded-[30px] sm:rounded-[40px] md:rounded-[45px] lg:rounded-[48px] xl:rounded-[50px] bg-[#1c5e20] p-6 sm:p-12 md:p-16 lg:p-20 xl:p-24 flex flex-col lg:flex-row xl:flex-row items-center justify-between">
      <div className="w-full lg:w-1/2 xl:w-1/2 text-center lg:text-left xl:text-left mb-8 lg:mb-0 xl:mb-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold text-white leading-tight sm:leading-normal md:leading-snug lg:leading-tight xl:leading-[74px]">
          Start Automating Your Calls Today
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-[26px] xl:text-[30px] font-medium text-white py-4 sm:py-6 md:py-7 lg:py-8 xl:py-[30px] leading-relaxed md:leading-relaxed lg:leading-[32px] xl:leading-[36px]">
          Turn every customer who calls into an appointment
        </p>
        <div className="flex justify-center relative lg:justify-start xl:justify-start">
          <VoiceCallButton
          className="scale-80 lg:absolute lg:-left-14"
            apiKey="5c2e1220-d870-46c4-9088-240fb4a0c7cb"
            assistantId="ead8169d-c224-4ab6-8b3d-6d0d6570b16b"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 xl:w-1/2 flex items-center justify-center relative min-h-[300px] md:min-h-[350px] lg:min-h-[380px] xl:min-h-[400px]">
        <div className="hidden lg:block xl:block rg-box absolute -bottom-[150px] md:-bottom-[200px] lg:-bottom-[250px] xl:-bottom-[300px] -right-[150px] md:-right-[200px] lg:-right-[250px] xl:-right-[300px] z-10"></div>
        <Image
          src="/icons/magicLogo.svg"
          alt="Logo"
          className="absolute w-[200px] md:w-[220px] lg:w-[260px] xl:w-[300px] -top-[50px] md:-top-[70px] lg:-top-[85px] xl:-top-[100px] -left-[40px] md:-left-[45px] lg:-left-[50px] z-20"
          width={200}
          height={200}
          sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, (max-width: 1024px) 250px, (max-width: 1280px) 280px, 300px"
        />
        <Image
          src="/schedulecall.png"
          alt="chart"
          className="max-w-none w-[500px] md:w-[600px] lg:w-[700px] xl:w-[823px] absolute -bottom-[30px] md:-bottom-[60px] lg:-bottom-[85px] xl:-bottom-[110px] -right-[220px] md:-right-[250px] lg:-right-[275px] xl:-right-[300px] shrink-0"
          width={823}
          height={497}
          sizes="(max-width: 640px) 400px, (max-width: 768px) 500px, (max-width: 1024px) 600px, (max-width: 1280px) 700px, 823px"
        />
      </div>
    </div>
  );
}
