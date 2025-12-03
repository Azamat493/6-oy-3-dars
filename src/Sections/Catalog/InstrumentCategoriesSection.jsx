import React from "react";
import Rectangle36 from "../../assets/images/Rectangle36.png";

const InstrumentCategoriesSection = () => {
  return (
    <section className="text-white relative py-12 md:py-16">
      <div className="absolute z-0 left-0 top-[100px]">
        <img src={Rectangle36} alt="" className="w-full max-w-none" />
      </div>

      <div className="border mb-10 md:mb-15 relative w-full max-w-[1170px] h-0 border-solid border-[#242424] mx-auto"></div>

      <div className="max-w-[1083px] relative z-10 w-full mx-auto px-4 flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
        <div className="w-[80%] lg:mt-0 mt-10 sm:mt-20 md:mt-10 lg:w-[568px] h-auto lg:h-[307px] relative z-10">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/Wl76FEWx7Ps?si=zJZ7Gk23XtHEVm79"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="aspect-video w-full"
          ></iframe>
        </div>

        <div className="w-full relative  lg:mt-0 mt-12 sm:mt-25 md:mt-20 z-10 lg:w-1/2 space-y-6 md:space-y-8">
          <h2 className="font-normal text-center lg:text-start text-2xl md:text-3xl lg:text-4xl leading-[97%] text-white font-abeeze">
            У НАС ШИРОКИЙ ВЫБОР ИНСТРУМЕНТОВ
          </h2>

          <ul className="space-y-3 md:space-y-4 w-fit lg:w-full mx-auto">
            {[
              { name: "Акустические", color: "#ea8305", height: "6px" },
              { name: "Трансакустические", color: "#ea8305", height: "6px" },
              { name: "Электроакустические", color: "#ea8305", height: "4px" },
              { name: "Классические", color: "#ea8305", height: "4px" },
              { name: "Тревел-гитары", color: "#ea8305", height: "2px" },
              { name: "Электрогитары", color: "#ea8305", height: "1px" },
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

      <div className="mt-10 md:mt-18 relative z-10 max-w-[1083px] mx-auto w-full px-4 font-normal text-xs md:text-sm leading-[214%] text-[rgba(255,255,255,0.6)] font-abeeze">
        <p className="mb-3 md:mb-4">
          Хорошая акустическая гитара — верный путь к правильному восприятию
          нот, а значит, она способна ускорить процесс обучения игры на
          музыкальном инструменте. Компания Guitar Lovka предлагает купить
          акустическую гитару с доставкой от ведущих производителей — Cort, Enya
          и Sigma Guitars.
        </p>
        <p className="mb-3 md:mb-4">
          Каждая гитара акустическая, цена на которую меньше 5000 рублей
          (дешевые модели), часто искажают качество звука при игре, что
          затрудняет обучение, однако это не означает, что невозможно найти
          недорогую гитару в интернет-магазине Guitar Lovka. В каталоге имеется
          базовая «акустика» (бюджетные модели) стоимостью до 10000 рублей.
          Такие модели лишены дополнительного лоска, но самое главное — они не
          искажают звук и способны правильно научить слушать ритм, ноты и такты
          при обучении.
        </p>
        <a
          href="#"
          className="font-normal text-xs md:text-sm leading-[250%] text-[#ea8305] font-abeeze"
        >
          подробнее...
        </a>
      </div>
    </section>
  );
};

export default InstrumentCategoriesSection;
