import { ArrowRight } from "lucide-react";

export default function TalkVickie() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="flex cursor-pointer call-back items-center justify-center w-full sm:w-fit md:w-fit lg:w-fit gap-3 sm:gap-4 md:gap-4 lg:gap-4 py-3 sm:py-3.5 md:py-3.5 lg:py-3.5 px-4 sm:px-5 md:px-5 lg:px-5 bg-white rounded-full"
    >
      <h1 className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl font-semibold">Talk to Vickie + HVAC</h1>
      <div className="w-8 sm:w-9 md:w-9 lg:w-9 h-8 sm:h-9 md:h-9 lg:h-9 book-demo flex items-center justify-center rounded-full shrink-0">
        <ArrowRight className="w-3 sm:w-4 md:w-4 lg:w-4 text-white" />
      </div>
    </button>
  );
}
