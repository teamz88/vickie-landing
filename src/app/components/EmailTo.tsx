import { ArrowRight } from "lucide-react";

export default function EmailTo() {
  return (
    <a
      href="mailto:info@omadligroup.com"
      className="flex items-center justify-between gap-3 sm:gap-4 md:gap-4 lg:gap-4 py-3 sm:py-3.5 md:py-3.5 lg:py-3.5 px-4 sm:px-5 md:px-5 lg:px-5 book-demo transition-all duration-300 ease-in rounded-full w-full"
    >
      <h1 className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl font-semibold text-white">Info@OmadliGroup.com</h1>
      <div className="w-8 sm:w-9 md:w-9 lg:w-9 h-8 sm:h-9 md:h-9 lg:h-9 bg-white flex items-center justify-center rounded-full shrink-0">
        <ArrowRight className="w-3 sm:w-4 md:w-4 lg:w-4 text-black"/>
      </div>
    </a>
  );
}
