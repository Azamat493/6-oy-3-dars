import React from "react";
import two from "../../assets/images/two.png";
import Rectangle37 from "../../assets/images/Rectangle37.png";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";

const Service = () => {
  return (
    <>
      <div className="max-w-[1152px] mx-auto w-full px-4 sm:px-6">
        <div className="flex flex-col relative z-10 lg:flex-row justify-center items-center gap-6 py-6">
          <div className="overflow-hidden w-full lg:w-auto flex-shrink-0">
            <img
              src={two}
              alt=""
              className=" h-[500px] object-cover mx-auto lg:mx-0"
            />
          </div>

          <div className="flex-1 w-full max-w-[500px] lg:max-w-none">
            <div className="flex items-center gap-4 font-normal text-sm leading-[250%] text-[#a1a0a3] font-abeeze mb-4">
              <span>&lt;</span>
              <span>вперед</span>
              <span>назад</span>
              <span>&gt;</span>
            </div>

            <h2 className="font-normal text-2xl sm:text-3xl lg:text-4xl leading-[97%] text-white font-abeeze mb-3">
              Текущее обслуживание
            </h2>

            <div className="space-y-2 font-normal text-sm leading-[179%] text-[rgba(255,255,255,0.6)] font-abeeze mb-3">
              <p>Диагностика и консультация - БЕСПЛАТНО</p>
              <p>Замена струн с чисткой накладки и пропиткой маслом - 500</p>
              <p>
                Замена струн с чисткой накладки и пропиткой маслом+полировка
                ладов - 1000
              </p>
              <p>Комплексная чистка акустической/бас/электрогитары - 700</p>
              <p>
                Отстройка акустической/бас/электрогитары без фloyd роуз - 2000
              </p>
              <p>Отстройка электрогитары с фloyd роуз - 2500</p>
              <p>Срочная настройка** - 4000</p>
              <p>Полировка ладов с чисткой накладки пропитка маслом - 1000</p>
              <p>
                Шлифовка ладов (с закаткой и полировкой) - 3500{" "}
                <span className="font-normal text-sm leading-[179%] cursor-pointer text-[#ea8305] font-abeeze">
                  развернуть
                </span>
              </p>
            </div>

            <div className="flex flex-col items-start">
              <div className="font-normal text-xl sm:text-2xl leading-[146%] text-[#ea8305] font-abeeze">
                от 300 ₽
              </div>
              <button className="mt-2 border rounded-[5px] border-solid border-[rgba(255,255,255,0.6)] bg-[#131218] cursor-pointer hover:bg-gray-600 px-4 py-2 font-normal text-base sm:text-[20px] leading-[179%] text-[rgba(255,255,255,0.6)] font-abeeze w-full sm:w-auto">
                записаться
              </button>
            </div>
          </div>
        </div>

        <div className="relative px-4 sm:px-8 pb-6 mt-6">
          <div className="absolute -left-10 -top-24 sm:-left-16 sm:-top-32 z-0 pointer-events-none">
            <img
              src={Rectangle37}
              alt=""
              className="w-[400px] h-auto sm:w-[600px]"
            />
          </div>
          <div className="relative z-10 max-w-2xl pt-12 pb-8 pl-6 pr-6 sm:pl-8 sm:pr-8 font-normal text-base sm:text-lg leading-[167%] text-white font-abeeze">
            <p className="mb-4">
              Никогда не бойтесь принести инструмент, ведь как минимум
              диагностика и осмотр в нашей мастерской всегда бесплатны.
            </p>
            <p className="mb-4">
              Большинство инструментов нуждается в банальном техническом
              обслуживании, чистке, отстройке и полировке.
            </p>
            <p className="mb-4">
              Если про чистку и полировку все ясно, то по отстройке стоит
              пояснить немного подробнее.
            </p>
            <button className="font-normal text-base sm:text-lg text-[rgba(255,255,255,0.6)] cursor-pointer font-abeeze hover:underline">
              читать ещё...
            </button>
          </div>
        </div>
      </div>
      <div className="relative z-10 max-w-[1152px] m-auto w-full">
        <div className="flex items-center justify-center flex-wrap gap-4 px-8 py-6">
          <div className="relative hover:shadow-[0_4px_20px_0_rgba(234,131,5,0.6)] overflow-hidden w-[220px] h-[400px] bg-[#3b3a40]">
            <img src={card1} alt="" />
            <div className="absolute bottom-[-5] left-0 right-0 p-4">
              <h3 className="font-normal text-2xl leading-[146%] text-white font-abeeze">Реставрация</h3>
              <p className="font-normal text-lg leading-[194%] text-white font-abeeze">от 1500₽</p>
            </div>
          </div>
          <div className="relative hover:shadow-[0_4px_20px_0_rgba(234,131,5,0.6)] overflow-hidden w-[220px] h-[400px] bg-[#3b3a40]">
            <img src={card2} alt="" />
            <div className="absolute bottom-[-5] left-0 right-0 p-4">
              <h3 className="font-normal text-2xl leading-[146%] text-white font-abeeze">Реставрация</h3>
              <p className="font-normal text-lg leading-[194%] text-white font-abeeze">от 1500₽</p>
            </div>
          </div>
          <div className="relative hover:shadow-[0_4px_20px_0_rgba(234,131,5,0.6)] overflow-hidden w-[220px] h-[400px] bg-[#3b3a40]">
            <img src={card3} alt="" />
            <div className="absolute bottom-[-5] left-0 right-0 p-4">
              <h3 className="font-normal text-2xl leading-[146%] text-white font-abeeze">Реставрация</h3>
              <p className="font-normal text-lg leading-[194%] text-white font-abeeze">от 1500₽</p>
            </div>
          </div>
          <div className="relative hover:shadow-[0_4px_20px_0_rgba(234,131,5,0.6)] overflow-hidden w-[220px] h-[400px] bg-[#3b3a40]">
            <img src={card2} alt="" />
            <div className="absolute bottom-[-5] left-0 right-0 p-4">
              <h3 className="font-normal text-2xl leading-[146%] text-white font-abeeze">Реставрация</h3>
              <p className="font-normal text-lg leading-[194%] text-white font-abeeze">от 1500₽</p>
            </div>
          </div>
          <div className="relative hover:shadow-[0_4px_20px_0_rgba(234,131,5,0.6)] overflow-hidden w-[220px] h-[400px] bg-[#3b3a40]">
            <img src={card3} alt="" />
            <div className="absolute bottom-[-5] left-0 right-0 p-4">
              <h3 className="font-normal text-2xl leading-[146%] text-white font-abeeze">Реставрация</h3>
              <p className="font-normal text-lg leading-[194%] text-white font-abeeze">от 1500₽</p>
            </div>
          </div>
          <div className="relative hover:shadow-[0_4px_20px_0_rgba(234,131,5,0.6)] overflow-hidden w-[220px] h-[400px] bg-[#3b3a40]">
            <img src={card2} alt="" />
            <div className="absolute bottom-[-5] left-0 right-0 p-4">
              <h3 className="font-normal text-2xl leading-[146%] text-white font-abeeze">Реставрация</h3>
              <p className="font-normal text-lg leading-[194%] text-white font-abeeze">от 1500₽</p>
            </div>
          </div>
          <div className="relative hover:shadow-[0_4px_20px_0_rgba(234,131,5,0.6)] overflow-hidden w-[220px] h-[400px] bg-[#3b3a40]">
            <img src={card1} alt="" />
            <div className="absolute bottom-[-5] left-0 right-0 p-4">
              <h3 className="font-normal text-2xl leading-[146%] text-white font-abeeze">Реставрация</h3>
              <p className="font-normal text-lg leading-[194%] text-white font-abeeze">от 1500₽</p>
            </div>
          </div>
          <div className="relative hover:shadow-[0_4px_20px_0_rgba(234,131,5,0.6)] overflow-hidden w-[220px] h-[400px] bg-[#3b3a40]">
            <img src={card2} alt="" />
            <div className="absolute bottom-[-5] left-0 right-0 p-4">
              <h3 className="font-normal text-2xl leading-[146%] text-white font-abeeze">Реставрация</h3>
              <p className="font-normal text-lg leading-[194%] text-white font-abeeze">от 1500₽</p>
            </div>
          </div>

        </div>
        <div className="px-8 pb-6 font-normal mt-5 text-lg leading-[139%] text-[rgba(255,255,255,0.13)] font-abeeze space-y-1">
          <p>* - цены указаны без учета материалов и комплектующих;</p>
          <p>** - срочная отстройка инструмента – 3 часа;</p>
          <p>
            *** - сроки ремонта указываются мастером в зависимости от
            конкретного случая;
          </p>
          <p>
            **** - срочный ремонт (покраска, склейка, перепайка) – коэффициент
            Х2.
          </p>
        </div>
      </div>
    </>
  );
};

export default Service;
