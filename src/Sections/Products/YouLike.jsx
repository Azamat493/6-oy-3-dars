import React, { useRef, useEffect } from "react";
import Guitar from "../../assets/images/Guitar.png";

const YouLike = () => {
  const carouselRef = useRef(null);
  const slideWidth = 242; 
  const intervalRef = useRef(null);
  let index = 0;

  useEffect(() => {
    const carousel = carouselRef.current;
    const slides = Array.from(carousel.children);

    slides.forEach((slide) => {
      const clone = slide.cloneNode(true);
      carousel.appendChild(clone);
    });

    function nextSlide() {
      index++;
      carousel.style.transition = "transform 0.7s linear";
      carousel.style.transform = `translateX(-${index * slideWidth}px)`;

      if (index >= slides.length) {
        setTimeout(() => {
          carousel.style.transition = "none";
          index = 0;
          carousel.style.transform = `translateX(0px)`;
        }, 700); 
      }
    }

    intervalRef.current = setInterval(nextSlide, 2500);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="text-white pb-12 px-4 sm:px-6 max-w-[1152px] w-full mx-auto">
      <div className="mb-12">
        <h2 className="font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[97%] text-center text-white font-abeeze mb-6">
          Популярные товары
        </h2>
        <div className="max-w-[300px] w-full h-0 border-2 border-solid border-[#d87700] mx-auto"></div>
      </div>

      <div className="relative w-full flex justify-center overflow-hidden">
        <div ref={carouselRef} id="carousel" className="flex">
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="min-w-[242px] rounded-lg overflow-hidden relative flex flex-col mx-2 flex-shrink-0"
            >
              <div className="absolute bottom-0 left-0 w-full h-[60%] bg-[#3b3a40] z-0"></div>
              <div className="relative z-10 flex flex-col items-start">
                <img src={Guitar} alt="Enya EUC-MAD" className="w-full object-cover h-auto" />
                <div className="p-4 w-full">
                  <h2 className="font-normal text-sm sm:text-base text-white font-abeeze">Укулеле</h2>
                  <h3 className="font-normal text-2xl sm:text-3xl text-white font-abeeze">Enya EUC-MAD</h3>
                  <div className="flex items-center justify-between w-full mt-4">
                    <div>
                      <h2 className="font-normal text-sm sm:text-base text-[rgba(255,255,255,0.6)] font-abeeze line-through">
                        ₽24 890
                      </h2>
                      <h2 className="font-normal text-lg sm:text-xl text-white font-abeeze">₽24 890</h2>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <h2 className="text-yellow-400">★★★★★</h2>
                      <h3 className="font-normal text-sm sm:text-base text-center text-[rgba(255,255,255,0.6)] font-abeeze">
                        7 отзывов
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouLike;
