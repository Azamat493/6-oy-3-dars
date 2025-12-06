import React from "react";
import DSCF6357 from "../../assets/images/DSCF6357.png";
import DSCF6364 from "../../assets/images/DSCF6364.png";
import DSCF6369 from "../../assets/images/DSCF6369.png";
import PLAY from "../../assets/images/PLAY.png";
import С360 from "../../assets/images/360С.png";
import main from "../../assets/images/main.png";
import button from "../../assets/images/button.png";
import Vk1 from "../../assets/images/Vk1.png";
import ok from "../../assets/images/ok.png";
import Facebook from "../../assets/images/Facebook.png";
import twitter from "../../assets/images/twitter.png";

const ProductSection = () => {
  return (
    <div className="max-w-[1152px] mx-auto w-full px-4 sm:px-6">
      <div className="flex flex-col  lg:flex-row gap-6 items-start lg:items-center py-6">
        <div className="flex flex-row justify-center lg:flex-col gap-2 lg:gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 lg:w-auto w-full">
          {[DSCF6357, DSCF6364, DSCF6369].map((img, idx) => (
            <div key={idx} className="relative flex-shrink-0 w-[80px] h-[80px] lg:w-[80px] lg:h-[80px] overflow-hidden rounded">
              <img src={img} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-white/20 pointer-events-none"></div>
            </div>
          ))}
          <div className="relative flex-shrink-0 w-[80px] h-[80px] lg:w-[80px] lg:h-[80px] overflow-hidden rounded flex items-center justify-center">
            <img src={DSCF6369} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-white/20 pointer-events-none"></div>
            <img src={PLAY} alt="" className="absolute w-6 h-6" />
          </div>
          <div className="relative flex-shrink-0 w-[80px] h-[80px] lg:w-[80px] lg:h-[80px] overflow-hidden rounded flex items-center justify-center">
            <img src={DSCF6369} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-white/20 pointer-events-none"></div>
            <img src={С360} alt="" className="absolute w-6 h-6" />
          </div>
        </div>
        <div className="overflow-hidden w-full lg:w-[400px] flex-shrink-0">
          <img src={main} alt="" className="lg:w-full w-[50%] m-auto h-auto object-cover" />
        </div>

        <div className="flex-1 w-full lg:max-w-[500px]">
          <h1 className="font-normal text-sm text-white leading-[250%] font-abeeze">
            Комбоусилитель
          </h1>
          <h2 className="font-normal text-2xl sm:text-3xl lg:text-4xl leading-[97%] text-white font-abeeze mb-3">
            Joyo AC - 20
          </h2>

          <div className="mb-3">
            <img src={button} alt="" className="w-full max-w-[300px]" />
          </div>

          <p className="font-normal text-sm leading-[143%] text-[rgba(255,255,255,0.6)] font-abeeze mb-6">
            Гитара которая удивляет своим звуком и качеством, отлично лежит в
            руках. Верхняя дека из ели, нижняя и обечайка из красного дерева,
            классический набор который делает звук ярким и объемным...{" "}
            <span className="font-normal cursor-pointer text-sm leading-[250%] text-[rgba(255,214,0,0.6)] font-abeeze">
              подробнее в наличии
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4">
            <div>
              <div className="font-abeeze font-normal text-xl sm:text-2xl lg:text-4xl leading-[97%] text-white">
                ₽24 890
              </div>
              <div className="font-abeeze font-normal text-xs sm:text-sm leading-[250%] text-[rgba(255,214,0,0.6)]">
                В РАССРОЧКУ ОТ 2489 ₽
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-1">
                {/* Иконки рейтинга — оставлены как есть, но если бы были SVG — их бы убрали */}
                {/* SVG удалены по вашему требованию */}
              </div>
              <div className="flex gap-2">
                <a
                  href="https://m.vk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Vk1} alt="VK" className="w-6 h-6" />
                </a>
                <a
                  href="https://ok.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={ok} alt="OK" className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/?locale=ru_RU"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Facebook} alt="Facebook" className="w-6 h-6" />
                </a>
                <a
                  href="https://x.com/?lang=ru"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitter} alt="Twitter" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <button className="bg-[rgba(255,214,0,0.6)] cursor-pointer hover:bg-yellow-600 px-4 py-2 rounded-md font-normal text-base text-center font-second-DmSans text-white w-full sm:w-auto">
              В КОРЗИНЕ
            </button>
            <button className="bg-[rgba(196,196,196,0.13)] hover:bg-gray-600 px-4 py-2 rounded-md font-normal text-base leading-[167%] text-center cursor-pointer text-[rgba(255,255,255,0.6)] font-abeeze w-full sm:w-auto">
              КУПИТЬ В 1 КЛИК
            </button>
          </div>

          <div className="flex items-center justify-between max-w-[330px] gap-4 text-sm">
            <div className="flex items-center gap-1">
              <span className="font-normal text-sm leading-[250%] text-[#a1a0a3] font-abeeze">&lt;</span>
              <span className="font-normal text-sm leading-[250%] text-[#a1a0a3] font-abeeze">вперед</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-normal text-sm leading-[250%] text-[#a1a0a3] font-abeeze">назад</span>
              <span className="font-normal text-sm leading-[250%] text-[#a1a0a3] font-abeeze">&gt;</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 pb-6">
        <div className="flex overflow-x-auto gap-2 mb-4 whitespace-nowrap">
          {["ОПИСАНИЕ", "ХАРАКТЕРИСТИКИ", "ГАРАНТИЯ", "ДОСТАВКА И ОПЛАТА", "ВОЗВРАТ"].map((tab, idx) => (
            <button
              key={idx}
              className="px-4 py-2 cursor-pointer font-normal text-sm text-center text-[rgba(255,255,255,0.6)] rounded-lg border border-transparent hover:border-white/60 hover:bg-white/10 transition w-full sm:w-auto"
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="border bg-[#131218] rounded-[30px] border-solid border-white p-4 sm:p-6">
          <ul className="space-y-2 font-normal text-base sm:text-lg leading-[139%] text-[rgba(255,255,255,0.6)] font-abeeze">
            <li>• Мощность в 20Вт</li>
            <li>• Два динамика диаметром в 5см</li>
            <li>• Вес 4,8 кг.</li>
            <li>• Эквалайзер: Treble, Middle, Bass</li>
            <li>• Цифровые эффекты: Chorus, Delay</li>
            <li>• Максимальное время задержки 500ms</li>
            <li>• Reverb</li>
            <li>• Регулятор громкости</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;