import dynamic from "next/dynamic";
import Hero from "./section/hero";

// Dynamic imports for better code splitting
const FAQ = dynamic(() => import("./section/faq"), {
  loading: () => <div className="min-h-[200px] animate-pulse bg-gray-100 rounded-lg" />,
});
const TouchForm = dynamic(() => import("./section/form"), {
  loading: () => <div className="min-h-[300px] animate-pulse bg-gray-100 rounded-lg" />,
});
const Video = dynamic(() => import("./section/video"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100 rounded-lg" />,
});
const Call = dynamic(() => import("./section/call"), {
  loading: () => <div className="min-h-[300px] animate-pulse bg-gray-100 rounded-lg" />,
});
const Impact = dynamic(() => import("./section/impact"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100 rounded-lg" />,
});
const What = dynamic(() => import("./section/what"), {
  loading: () => <div className="min-h-[300px] animate-pulse bg-gray-100 rounded-lg" />,
});
// const Schedule = dynamic(() => import("./section/schedule"), {
//   loading: () => <div className="min-h-[200px] animate-pulse bg-gray-100 rounded-lg" />,
// });
const Missed = dynamic(() => import("./section/missed"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100 rounded-lg" />,
});
const ROICalculator = dynamic(() => import("./section/roi"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100 rounded-lg" />,
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Missed />
      {/* <Schedule /> */}
      <ROICalculator />
      <What />
      <Impact />
      <Call />
      <Video />
      <FAQ />
      <TouchForm />
      <div className="w-full h-[260px] md:h-[320px] lg:h-[390px] xl:h-[460px]"></div>
    </div>
  );
}
