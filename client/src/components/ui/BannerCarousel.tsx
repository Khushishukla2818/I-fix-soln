import { useEffect, useState } from "react";
import banners from "../data/banner";

const BannerCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[1196px] h-[343px] overflow-hidden rounded-xl">
      <img
        src={banners[index].image}
        alt="banner"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default BannerCarousel;
