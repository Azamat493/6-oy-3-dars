import React from "react";
import Rectangle361 from "../../assets/images/Rectangle361.png";
import Chat from "../../assets/images/Chat.png";
const YouWillLike = () => {
  return (
    <section className="text-white relative py-12 md:py-16">
      <div className="absolute z-0 left-0 top-[150px]">
        <img src={Rectangle361} alt="" className="w-full max-w-none" />
      </div>
      <div className="absolute z-0 right-10 top-[180px]">
        <img src={Chat} alt="" className="w-full max-w-none" />
      </div>
      <div className="max-w-[1083px] mt-40 relative z-10 w-full mx-auto px-4 flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
        <div className="w-[60%] md:block hidden lg:mt-0 mt-10 sm:mt-20 md:mt-10 lg:w-[568px] h-auto lg:h-[307px] relative z-10">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/vdICvagZMLI?si=f0waX6Go7A2dNLxi"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-full md:hidden mt-30 block lg:w-[568px] max-w-[600px] mx-auto relative z-10">
          <div className="relative w-full pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/vdICvagZMLI?si=f0waX6Go7A2dNLxi"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="w-full relative lg:mt-0 mt-12 sm:mt-25 md:mt-20 z-10 space-y-6 md:space-y-8">
          <h2 className="font-normal text-center lg:text-start text-2xl md:text-3xl lg:text-4xl leading-[97%] text-white font-abeeze">
            БЕРЕЖНО УПАКОВЫВАЕМ КАЖДЫЙ ИНСТУМЕНТ
          </h2>

          <ul className="space-y-3 md:space-y-4 w-fit lg:w-full mx-auto">
            {[
              { name: "Термопакет", color: "#ea8305", height: "6px" },
              { name: "Чехол", color: "#ea8305", height: "6px" },
              {
                name: "3 слоя пузырчатой бумаги",
                color: "#ea8305",
                height: "4px",
              },
              { name: "Картонная коробка", color: "#ea8305", height: "4px" },
              { name: "Страхуем груз", color: "#ea8305", height: "2px" },
              { name: "Бережная доставка", color: "#ea8305", height: "1px" },
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div
                  className="flex-shrink-0 w-[68px]"
                  style={{
                    backgroundColor: item.color,
                    height: item.height,
                  }}
                ></div>
                <span className="font-normal text-lg md:text-xl lg:text-2xl leading-[146%] text-[rgba(255,255,255,0.6)] font-abeeze">
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default YouWillLike;
