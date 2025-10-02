import Image from "next/image";

export default function NavLogo() {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-4">
      <Image
        src="/logo.png"
        alt="Vickie Voice AI Agent"
        width={60}
        height={65}
        className="sm:w-[70px] sm:h-[76px] md:w-[72px] md:h-[78px] lg:w-[74px] lg:h-[80px] xl:w-[76px] xl:h-[83px]"
        priority
        sizes="(max-width: 640px) 60px, (max-width: 768px) 70px, (max-width: 1024px) 74px, 76px"
      />
      <h1 className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl font-bold">Vickie Voice AI Agent</h1>
    </div>
  );
}
