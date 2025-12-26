import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const serviceCards = [
  {
    image: "/figmaAssets/rectangle-66.png",
    title: "Mobile Repair",
  },
  {
    image: "/figmaAssets/rectangle-66-1.png",
    title: "Ipad Repair",
  },
  {
    image: "/figmaAssets/rectangle-66-2.png",
    title: "MacBook Repair",
  },
  {
    image: "/figmaAssets/rectangle-66-3.png",
    title: "SmartWatches Repair",
  },
];

const brandLogos = [
  { src: "/figmaAssets/rectangle-63.png", alt: "Brand 1" },
  { src: "/figmaAssets/rectangle-63-1.png", alt: "Brand 2" },
  { src: "/figmaAssets/rectangle-63-2.png", alt: "Brand 3" },
  { src: "/figmaAssets/rectangle-63-3.png", alt: "Brand 4" },
  { src: "/figmaAssets/rectangle-63-4.png", alt: "Brand 5" },
  { src: "/figmaAssets/rectangle-63-5.png", alt: "Brand 6" },
  { src: "/figmaAssets/rectangle-63-6.png", alt: "Brand 7" },
  { src: "/figmaAssets/rectangle-63-7.png", alt: "Brand 8" },
  { src: "/figmaAssets/rectangle-63-8.png", alt: "Brand 9" },
  { src: "/figmaAssets/rectangle-63-9.png", alt: "Brand 10" },
  { src: "/figmaAssets/rectangle-63-10.png", alt: "Brand 11" },
  { src: "/figmaAssets/rectangle-63-11.png", alt: "Brand 12" },
  { src: "/figmaAssets/rectangle-63-12.png", alt: "Brand 13" },
  { src: "/figmaAssets/rectangle-63-13.png", alt: "Brand 14" },
  { src: "/figmaAssets/rectangle-63-14.png", alt: "Brand 15" },
  { src: "/figmaAssets/rectangle-63-15.png", alt: "Brand 16" },
  { src: "/figmaAssets/rectangle-63-16.png", alt: "Brand 17" },
  { src: "/figmaAssets/rectangle-63-17.png", alt: "Brand 18" },
  { src: "/figmaAssets/rectangle-63-18.png", alt: "Brand 19" },
  { src: "/figmaAssets/rectangle-63-19.png", alt: "Brand 20" },
];

const processSteps = [
  {
    number: "1",
    icon: "/figmaAssets/currency-rupee-circle.svg",
    title: "Check Price",
    description:
      "Pick your device and update us about its current condition. And in seconds, you'll have the best pricing for your phone repair with no hidden costs.",
  },
  {
    number: "2",
    icon: "/figmaAssets/vector.svg",
    title: "Book Appointment",
    description:
      "Book a certified technician visit at your location and at your preferred time. Get your phone services at your convenience.",
  },
  {
    number: "3",
    icon: "/figmaAssets/group-7.png",
    title: "Sit Back & Relax",
    description:
      "Get your phone repaired by our highly skilled technician. Our Superfast repairs will make your phone as good as new.",
  },
];

const features = [
  {
    icon: "/figmaAssets/award-star.png",
    title: "Genuine Parts",
    description:
      "We use original spare parts to ensure long-lasting performance with 90 days warranty",
  },
  {
    icon: "/figmaAssets/verified-user.png",
    title: "Doorstep Service",
    description:
      "Get professional repairs at your home or office with no hidden charges",
  },
  {
    icon: "/figmaAssets/group-14.png",
    title: "Expert Technicians",
    description:
      "Trained professionals with deep expertise in major brands, ensuring both device care and complete data safety.",
  },
  {
    icon: "/figmaAssets/approval-delegation.png",
    title: "Certified Warranty",
    description:
      "Every repair comes with a certificate-backed warranty for peace of mind.",
  },
];

const bottomFeatures = [
  {
    icon: "/figmaAssets/payments.svg",
    title: "Value for Money",
    description:
      "Doorstep mobile repair by certified experts - genuine parts, transparent pricing, and premium service.",
  },
  {
    icon: "/figmaAssets/media-output.png",
    title: "12x7 support",
    description:
      "Get 12x7 support from Ongofix - call us or WhatsApp us anytime for quick and professional assistance.",
  },
  {
    icon: "/figmaAssets/beenhere.png",
    title: "90 Days warranty",
    description:
      "I fix Solutions offers a 90-day warranty on mobile repairs, covering both parts and service, for your peace of mind.",
  },
];

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-white w-full relative">
      <header className="fixed top-0 left-0 right-0 bg-[#fffefe] shadow-[0px_4px_4px_#00000040] z-50 h-16 md:h-[71px]">
        <div className="flex items-center justify-between h-full px-4 md:px-8">
          <img
            className="w-32 md:w-[232px] h-10 md:h-14 object-contain"
            alt="Asset"
            src="/figmaAssets/asset-2-1.png"
          />

          <nav className="hidden md:flex items-center gap-8 md:gap-[52px]">
            <Button
              variant="ghost"
              className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg md:text-[21px] h-auto p-0 hover:bg-transparent"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg md:text-[21px] h-auto p-0 hover:bg-transparent"
            >
              About us
            </Button>
            <Button
              variant="ghost"
              className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg md:text-[21px] h-auto p-0 hover:bg-transparent"
            >
              Our Services
            </Button>
          </nav>

          <img
            className="w-10 md:w-12 h-10 md:h-12 object-cover"
            alt="Ellipse"
            src="/figmaAssets/ellipse-1.png"
          />
        </div>
      </header>

      <main className="pt-16 md:pt-[71px]">
        <section className="relative px-4 md:px-8">
          <div className="mt-2 md:mt-[11px] mx-auto max-w-4xl md:max-w-5xl shadow-[0px_4px_4px_#00000040]">
            <img
              className="w-full h-40 md:h-80 rounded-[20px] object-cover"
              alt="Element banner"
              src="/figmaAssets/989351ogf-banner-4.png"
            />
          </div>

          <div className="text-center mt-4 md:mt-[17px]">
            <h1 className="[font-family:'Poppins',Helvetica] font-medium text-black text-2xl md:text-[40px] tracking-[0] leading-[normal]">
              DOORSTEP PHONE REPAIRS
            </h1>
            <p className="[font-family:'Poppins',Helvetica] font-medium text-black text-base md:text-xl tracking-[0] leading-[normal] mt-4 md:mt-[26px]">
              The fastest doorstep mobile repair services
            </p>
          </div>

        </section>

        <section className="mt-12 md:mt-[89px] px-4 md:px-8 lg:px-[122px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[21px]">
            {serviceCards.map((card, index) => (
              <Card
                key={index}
                className="bg-[#fffefe] rounded-[10px] shadow-[0px_0px_4px_#00000040] border-0"
              >
                <CardContent className="p-0 h-64 md:h-[277px] flex flex-col">
                  <div className="flex-1 flex items-center justify-center p-4 md:p-8">
                    <img
                      className="w-32 md:w-[158px] h-32 md:h-[166px] object-cover"
                      alt={card.title}
                      src={card.image}
                    />
                  </div>
                  <div className="h-auto md:h-[27px] [font-family:'Poppins',Helvetica] font-medium text-black text-base md:text-lg text-center tracking-[0] leading-[normal] mb-4 md:mb-6">
                    {card.title}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-8 md:mt-[31px] px-4 md:px-8 lg:px-[122px]">
          <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-xl md:text-3xl tracking-[0] leading-[normal] text-center">
            50+ BRANDS WE CAN FIX ALL TYPE OF ISSUES
          </h2>

          <img
            className="w-full h-px object-cover mt-8 md:mt-[57px]"
            alt="Line"
            src="/figmaAssets/line-2.svg"
          />

          <div className="mt-8 md:mt-[47px] grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-x-[43px] md:gap-y-[35px]">
            {brandLogos.map((logo, index) => (
              <div
                key={index}
                className="flex w-20 md:w-[111px] h-20 md:h-[111px] items-center justify-center p-2 md:p-[13px] bg-white rounded-[10px] shadow-[0px_0px_4px_#00000040]"
              >
                <img
                  className="flex-1 h-16 md:h-[85px] object-cover"
                  alt={logo.alt}
                  src={logo.src}
                />
              </div>
            ))}
          </div>

          <img
            className="w-full h-px object-cover mt-6 md:mt-[33px]"
            alt="Line"
            src="/figmaAssets/line-2.svg"
          />
        </section>

        <section className="mt-6 md:mt-[28px] px-4 md:px-8 lg:px-[122px]">
          <div className="bg-[#f5f5f580] rounded-[10px] h-auto md:h-[73px] flex flex-col md:flex-row items-center justify-center gap-4 p-4 md:p-0">
            <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg md:text-3xl text-center tracking-[0] leading-[normal]">
              Trusted by 50,000+ Happy users and major brands.
            </h3>
            <img
              className="w-20 md:w-[88px] h-auto md:h-[29px] object-cover flex-shrink-0"
              alt="Google new"
              src="/figmaAssets/google-2015-new-seeklogo-1.png"
            />
            <div className="flex gap-[2px] flex-shrink-0">
              {[1, 2, 3, 4].map((_, index) => (
                <img
                  key={index}
                  className="w-5 md:w-6 h-5 md:h-6"
                  alt="StarIcon half"
                  src="/figmaAssets/star-half.png"
                />
              ))}
              <img
                className="w-5 md:w-6 h-5 md:h-6"
                alt="StarIcon half"
                src="/figmaAssets/star-half.png"
              />
            </div>
          </div>
        </section>

        <section className="mt-4 md:mt-[10px] text-center px-4 md:px-8 lg:px-[122px]">
          <h2 className="[font-family:'Poppins',Helvetica] font-medium text-black text-xl md:text-[32px] tracking-[0] leading-[normal] md:leading-[62.1px]">
            OUR MAGICAL PROCESS
          </h2>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-base md:text-2xl tracking-[0] leading-[normal] md:leading-[46.6px]">
            Mobile repairing at home in just 3 easy steps
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[52px] mt-8 md:mt-[67px]">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-20 md:w-[102px] h-20 md:h-[102px] flex items-center justify-center">
                  {index === 0 && (
                    <div className="w-16 md:w-[65px] h-16 md:h-[65px] rounded-full border-4 md:border-[7px] border-solid border-black flex items-center justify-center">
                      <img
                        className="w-5 md:w-[22px] h-6 md:h-[29px]"
                        alt="Currency rupee"
                        src={step.icon}
                      />
                    </div>
                  )}
                  {index === 1 && (
                    <div className="flex items-center justify-center">
                      <img
                        className="w-16 md:w-[68px] h-16 md:h-[68px]"
                        alt="Vector"
                        src="/figmaAssets/vector.svg"
                      />
                      <img
                        className="absolute w-3 md:w-[15px] h-6 md:h-[23px]"
                        alt="Vector"
                        src="/figmaAssets/vector-2.svg"
                      />
                    </div>
                  )}
                  {index === 2 && (
                    <img
                      className="w-16 md:w-[75px] h-16 md:h-[79px]"
                      alt="Group"
                      src={step.icon}
                    />
                  )}
                </div>

                <div className="relative mt-1 md:mt-[6px]">
                  <div className="w-6 md:w-[27px] h-6 md:h-[27px] mx-auto">
                    <div className="absolute top-px left-0 w-6 md:w-[25px] h-6 md:h-[25px] bg-[#ff5900] rounded-[12.67px]" />
                    <div className="absolute top-0 left-1.5 md:left-[9px] w-1 md:w-1.5 [font-family:'Poppins',Helvetica] font-bold text-white text-base md:text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
                      {step.number}
                    </div>
                  </div>
                </div>

                <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg md:text-[25px] text-center tracking-[0] leading-[normal] mt-6 md:mt-[34px]">
                  {step.title}
                </h3>

                <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm text-center tracking-[0] leading-[normal] mt-4 md:mt-[46px] max-w-xs md:w-[345px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 md:mt-[113px] px-4 md:px-8 lg:px-[122px] grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-[18px]">
          <div className="space-y-4 md:space-y-[18px]">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white rounded-[10px] shadow-[0px_0px_4px_#00000040] border-0 h-auto md:h-[111px]"
              >
                <CardContent className="p-4 md:p-0 h-full flex flex-col md:flex-row items-start md:items-center gap-4">
                  <img
                    className="w-12 md:w-[65px] h-12 md:h-[65px] ml-0 md:ml-[18px] flex-shrink-0"
                    alt={feature.title}
                    src={feature.icon}
                  />
                  <div className="ml-0 md:ml-[43px] flex-1 pr-0 md:pr-4">
                    <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-base md:text-[22px] tracking-[0] leading-[normal] md:leading-[25px]">
                      {feature.title}
                    </h3>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-xs md:text-sm tracking-[0] leading-[normal] md:leading-[25px] mt-1">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col">
            <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-lg md:text-[27px] text-center tracking-[0] leading-[normal]">
              Our Team will Fix Issues at Your Home
            </h2>
            <img
              className="w-full h-px object-cover mt-6 md:mt-[41px]"
              alt="Line"
              src="/figmaAssets/line-4.svg"
            />
            <div className="relative mt-4 md:mt-[22px]">
              <img
                className="w-full h-40 md:h-[438px] rounded-[20px] object-cover"
                alt="Rectangle"
                src="/figmaAssets/rectangle-75.png"
              />
              <div className="absolute top-6 md:top-[61px] left-1/4 md:left-[157px] w-1/2 md:w-[275px] h-24 md:h-[177px]">
                <img
                  className="w-full h-full"
                  alt="Rectangle"
                  src="/figmaAssets/rectangle-76.svg"
                />
                <img
                  className="absolute top-4 md:top-[25px] left-6 md:left-[27px] w-32 md:w-[222px] h-20 md:h-[129px] object-cover"
                  alt="Asset"
                  src="/figmaAssets/asset-1-1.png"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 md:mt-[69px] px-4 md:px-8 lg:px-[122px] mb-8">
          <div className="bg-[#f5f5f54c] rounded-[20px] shadow-[0px_0px_4px_#00000040] w-full p-6 md:py-8 md:px-[74px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[52px]">
              {bottomFeatures.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <img
                    className="w-12 md:w-[60px] h-12 md:h-[60px] mx-auto flex-shrink-0"
                    alt={feature.title}
                    src={feature.icon}
                  />
                  <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-base md:text-[25px] text-center tracking-[0] leading-tight mt-3 md:mt-6 break-words">
                    {feature.title}
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-xs md:text-sm text-center tracking-[0] leading-relaxed mt-2 md:mt-4 overflow-hidden">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <aside className="hidden md:block fixed top-60 right-6 md:right-[30px] w-8 h-40 md:h-[165px] shadow-[-7px_2px_4px_#00000040]">
        <div className="w-[30px] h-full bg-[#ff5900] rounded-l-[10px] flex items-center justify-center">
          <div className="w-2.5 [font-family:'Poppins',Helvetica] font-bold text-white text-xs md:text-sm text-center tracking-[0] leading-[18px]">
            F<br />e<br />e<br />d<br />b<br />a<br />c<br />k
          </div>
        </div>
      </aside>

      <div className="hidden md:flex fixed top-96 right-4 md:right-[23px] flex-col gap-6 md:gap-[26px]">
        <img
          className="w-12 md:w-[52px] h-12 md:h-[52px] object-cover cursor-pointer"
          alt="Ellipse"
          src="/figmaAssets/ellipse-5.png"
        />
        <img
          className="w-12 md:w-[52px] h-12 md:h-[52px] object-cover cursor-pointer"
          alt="Ellipse"
          src="/figmaAssets/ellipse-4.png"
        />
        <img
          className="w-12 md:w-[52px] h-12 md:h-[52px] object-cover cursor-pointer"
          alt="Ellipse"
          src="/figmaAssets/ellipse-6.png"
        />
      </div>
    </div>
  );
};
