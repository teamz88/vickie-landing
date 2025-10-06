'use client'
import Image from "next/image";
import CallBack from "../components/CallBack";
import NavLogo from "../components/NavLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full min-h-[400px] xl:h-[787px] bg-[#e3ffe5] pt-1 relative">
      <div className="max-w-[1440px] mx-auto relative z-10 px-4 sm:px-6">
        <CallBack />
        <div className="flex flex-col xl:flex-row items-start justify-between py-8 xl:py-14 xl:pt-[120px] gap-8 xl:gap-0">
          <div className="space-y-3 xl:space-y-5 w-full lg:w-[325px] shrink-0 lg:mr-10">
            <NavLogo />
            <p className="text-base text-center xl:text-left sm:text-lg xl:text-[20px]">AI that converts leads into money</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-12 w-full xl:w-auto">
            <div className="space-y-4 xl:space-y-6">
              <p className="font-semibold text-xl sm:text-2xl xl:text-[30px]">Quick Links</p>
              <ul className="space-y-2 xl:space-y-4 text-base sm:text-lg xl:text-[20px]">
                <li>
                  <a href="/" className="hover:text-green-600 transition-colors">Home</a>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => {
                      window.scrollTo({ top: document.getElementById('features')?.offsetTop, behavior: 'smooth' });
                    }}
                    className="hover:text-green-600 transition-colors cursor-pointer"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      window.scrollTo({ top: document.getElementById('demo')?.offsetTop, behavior: 'smooth' });
                    }}
                    className="hover:text-green-600 transition-colors cursor-pointer"
                  >
                    Demo
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4 xl:space-y-6">
              <p className="font-semibold text-xl sm:text-2xl xl:text-[30px]">Helpful Info</p>
              <ul className="space-y-2 xl:space-y-4 text-base sm:text-lg xl:text-[20px]">
                <li>
                  <a
                    href="/terms-and-conditions/"
                    className="hover:text-green-600 transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy/"
                    className="hover:text-green-600 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4 xl:space-y-6">
              <p className="font-semibold text-xl sm:text-2xl xl:text-[30px]">Contact Us</p>
              <ul className="space-y-3 xl:space-y-4">
                <li className="flex items-start justify-start gap-3 xl:gap-4.5">
                  <Image
                    src="/icons/MapPin.svg"
                    alt="Map Pin"
                    width={20}
                    height={20}
                    className="xl:w-[30px] xl:h-[30px] mt-1 flex-shrink-0"
                  />
                  <a 
                    href="/#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base xl:text-[20px] hover:text-green-600 transition-colors"
                  >
                    1 Washington St #1417, Boston, MA 02108
                  </a>
                </li>
                <li className="flex items-center justify-start gap-3 xl:gap-4.5">
                  <Image
                    src="/icons/Phone.svg"
                    alt="Phone"
                    width={18}
                    height={18}
                    className="xl:w-[24px] xl:h-[24px] flex-shrink-0"
                  />
                  <a 
                    href="tel:+16177625230" 
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base xl:text-[20px] hover:text-green-600 transition-colors"
                  >
                    +1 (617) 762-5230
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="flex justify-center xl:justify-start">
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex flex-col items-center justify-center gap-2 xl:gap-4.5 cursor-pointer hover:opacity-80 transition-opacity"
                aria-label="Back to top"
              >
                <Image
                  src="/icons/Back2Top.svg"
                  alt="Back to top"
                  width={60}
                  height={60}
                  className="sm:w-[80px] sm:h-[80px] xl:w-[108px] xl:h-[108px]"
                  loading="lazy"
                />
                <p className="font-medium text-sm sm:text-base">Back to top</p>
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 xl:gap-4.5 rounded-4xl xl:rounded-full border px-4 sm:pl-6 xl:pl-9 sm:pr-4 xl:pr-6 py-4 xl:py-6">
          <p className="text-sm sm:text-base xl:text-xl text-center sm:text-left">
            © {currentYear} Vickie Voice AI Agent. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
            <p className="text-lg sm:text-xl xl:text-[26px]">Follow Us</p>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61557942777211"
                className="size-[40px] sm:size-[50px] xl:size-[60px] bg-[#1c5e20] hover:bg-[#3e8842] transition-all duration-300 ease-in rounded-full flex items-center justify-center"
              >
                <Image
                  src="/icons/Facebook.svg"
                  alt="Facebook"
                  width={8}
                  height={16}
                  className="sm:w-[9px] sm:h-[18px] xl:w-[10px] xl:h-[20px]"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/zulfiyaforsythe/"
                className="size-[40px] sm:size-[50px] xl:size-[60px] bg-[#1c5e20] hover:bg-[#3e8842] transition-all duration-300 ease-in rounded-full flex items-center justify-center"
              >
                <Image
                  src="/icons/Instagram.svg"
                  alt="Instagram"
                  width={16}
                  height={16}
                  className="sm:w-[18px] sm:h-[18px] xl:w-[20px] xl:h-[20px]"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/zulfiya-forsythe-akbarova-cpa-0214b98/"
                className="size-[40px] sm:size-[50px] xl:size-[60px] bg-[#1c5e20] hover:bg-[#3e8842] transition-all duration-300 ease-in rounded-full flex items-center justify-center"
              >
                <Image
                  src="/icons/Linkedin.svg"
                  alt="Linkedin"
                  width={16}
                  height={16}
                  className="sm:w-[18px] sm:h-[18px] xl:w-[20px] xl:h-[20px]"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.youtube.com/@zulfiyaforsythe/featured"
                className="size-[40px] sm:size-[50px] xl:size-[60px] bg-[#1c5e20] hover:bg-[#3e8842] transition-all duration-300 ease-in rounded-full flex items-center justify-center"
              >
                <Image
                  src="/icons/Youtube.svg"
                  alt="Youtube"
                  width={16}
                  height={16}
                  className="sm:w-[18px] sm:h-[18px] xl:w-[20px] xl:h-[20px]"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -left-[50px] xl:-left-[100px] z-0 footer-pattern opacity-50 xl:opacity-100"></div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-[50px] xl:-right-[100px] z-0 footer-pattern opacity-50 xl:opacity-100"></div>
    </footer>
  );
}
