"use client";
import Image from "next/image";

export default function Video() {
  return (
    <div id="demo" className="w-full min-h-[300px] xl:h-[1050px] bg-[#e3ffe5] py-12 sm:py-16 xl:py-[100px] relative px-4 sm:px-6">
      <div className="flex items-center justify-center pb-8 sm:pb-12 xl:pb-[50px] w-full sm:w-5/6 xl:w-2/3 mx-auto relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-[62px] text-center font-bold text-[#19331B] leading-tight sm:leading-normal xl:leading-[69px]">
          We recently deployed Vickie for an HVAC services company.
        </h2>
      </div>
      <div className="video-box rounded-[20px] xl:rounded-[40px] w-full max-w-[420px] sm:max-w-[600px] md:max-w-[800px] xl:max-w-[1200px] h-[240px] sm:h-[340px] md:h-[450px] xl:h-[707px] mx-auto p-3 sm:p-4 xl:p-6 relative z-10">
        <div className="rounded-[10px] xl:rounded-[20px] overflow-hidden w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/QVWbW4hhd0E"
            title="Vickie Video"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="absolute top-5 sm:top-10 -left-[200px] sm:-left-[300px] xl:-left-[400px] z-0 opacity-50 xl:opacity-100">
        <Image 
          src="/icons/Pattern.svg" 
          alt="Decorative pattern" 
          width={350} 
          height={350}
          className="sm:w-[500px] sm:h-[500px] xl:w-[700px] xl:h-[700px]"
          loading="lazy"
          sizes="(max-width: 640px) 350px, (max-width: 1280px) 500px, 700px"
        />
      </div>
      <div className="absolute bottom-5 sm:bottom-10 -right-[200px] sm:-right-[300px] xl:-right-[400px] z-0 opacity-50 xl:opacity-100">
        <Image 
          src="/icons/Pattern.svg" 
          alt="Decorative pattern" 
          width={350} 
          height={350}
          className="sm:w-[500px] sm:h-[500px] xl:w-[700px] xl:h-[700px]"
          loading="lazy"
          sizes="(max-width: 640px) 350px, (max-width: 1280px) 500px, 700px"
        />
      </div>
    </div>
  );
}
