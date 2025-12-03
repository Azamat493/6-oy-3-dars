import React from "react";
import logo from "../assets/images/logo.png";
import WhatsApp from "../assets/images/WhatsApp.png";
import Telegram from "../assets/images/Telegram.png";
import Vk from "../assets/images/Vk.png";
import Viber from "../assets/images/Viber.png";
import Youtube from "../assets/images/Youtube.png";
import Instagram from "../assets/images/Instagram.png";
import Phone from "../assets/images/Phone.png";
import icons8 from "../assets/images/icons8.png";
import Apple from "../assets/images/Apple.png";
import PP from "../assets/images/PP.png";
import icons9 from "../assets/images/icons9.png";
import yandex from "../assets/images/yandex.png";
import strelka from "../assets/images/strelka.png";
const Footer = () => {
  return (
    <footer class="border-t-2 border-solid border-[#242424] pt-12 pb-8 px-4 sm:px-6 md:px-10 lg:px-20">
      <div class="max-w-[1152px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="space-y-4">
          <a href="/">
            <img src={logo} alt="Guitar Lavka" class="w-full" />
          </a>
          <p class="font-normal text-lg sm:text-base md:text-lg text-[#c4c4c4] font-doppio">
            Мы работаем по всей России,
            <br />
            поэтому можем сделать онлайн-показ инструмента и доставить его до
            вашей двери
          </p>
          <div>
            <div class="mt-[30px]">
              <h3 class="font-normal text-lg sm:text-base md:text-lg text-[#c4c4c4] font-abeeze">
                Остались вопросы?
              </h3>
              <p class="font-normal text-2xl sm:text-xl md:text-2xl text-white font-abeeze">
                8 (800) 100-26-80
              </p>
            </div>
            <div class="mt-4">
              <h3 class="font-normal text-lg sm:text-base md:text-lg text-[#c4c4c4] font-abeeze">
                ЕЖЕДНЕВНО 10:00 - 20:00
              </h3>
              <a
                href="#"
                class="font-normal text-2xl sm:text-xl md:text-2xl text-white font-abeeze hover:text-orange-400"
              >
                info@guitarlavka.ru
              </a>
            </div>
            <div class="flex items-center justify-start gap-[20px] sm:gap-3 mt-4">
              <a
                href="https://www.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:opacity-80 transition duration-200 hover:scale-105"
              >
                <img src={WhatsApp} alt="" class="h-6 w-6 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://t.me/Tolko_Nenado"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:opacity-80 transition duration-200 hover:scale-105"
              >
                <img src={Telegram} alt="" class="h-6 w-6 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://vk.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:opacity-80 transition duration-200 hover:scale-105"
              >
                <img src={Vk} alt="" class="h-6 w-6 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://www.viber.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:opacity-80 transition duration-200 hover:scale-105"
              >
                <img src={Viber} alt="" class="h-6 w-6 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:opacity-80 transition duration-200 hover:scale-105"
              >
                <img src={Youtube} alt="" class="h-6 w-6 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:opacity-80 transition duration-200 hover:scale-105"
              >
                <img src={Instagram} alt="" class="h-6 w-6 sm:h-5 sm:w-5" />
              </a>
            </div>
            <div class="mt-[30px]">
              <h2 class="font-normal text-lg sm:text-base md:text-lg text-[#c4c4c4] font-abeeze">
                СПОСОБЫ ОПЛАТЫ
              </h2>
              <div class="flex items-center gap-[10px] sm:gap-2">
                <a
                  href="https://www.mastercard.uz/ru-uz.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={icons8}
                    alt="Mastercard"
                    class="h-8 w-auto sm:h-6 sm:w-auto transition-transform duration-300 hover:scale-110"
                  />
                </a>
                <a
                  href="https://www.apple.com/apple-pay/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Apple}
                    alt="Apple Pay"
                    class="h-8 w-auto sm:h-6 sm:w-auto transition-transform duration-300 hover:scale-110"
                  />
                </a>
                <a
                  href="https://www.paypal.com/ru/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={PP}
                    alt="PayPal"
                    class="h-8 w-auto sm:h-6 sm:w-auto transition-transform duration-300 hover:scale-110"
                  />
                </a>
                <a
                  href="https://cis.visa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={icons9}
                    alt="Visa"
                    class="h-8 w-auto sm:h-6 sm:w-auto transition-transform duration-300 hover:scale-110"
                  />
                </a>
                <a
                  href="https://yoomoney.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={yandex}
                    alt="ЮMoney"
                    class="h-8 w-auto sm:h-6 sm:w-auto transition-transform duration-300 hover:scale-110"
                  />
                </a>
              </div>
            </div>
            <div>
              <h1 class="mt-[40px] font-normal text-lg sm:text-base md:text-lg text-[#c4c4c4] font-abeeze">
                © 2021 GuitarLavka - музыкальный магазин
                <br />
                Политика конфиденциальности
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-6 mt-[40px] ml-0 justify-items-center">
            <div class="flex flex-col items-start sm:items-center">
              <h3 class="font-normal text-2xl sm:text-xl md:text-2xl text-white font-abeeze">
                КАТАЛОГ
              </h3>
              <ul class="mt-3 space-y-2 text-start font-normal text-lg sm:text-base md:text-lg text-[#c4c4c4] font-abeeze">
                <li>
                  <a href="#" class="hover:text-orange-400">
                    Гитары
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-orange-400">
                    Укулеле
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-orange-400">
                    Аксессуары
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-orange-400">
                    Струны
                  </a>
                </li>
              </ul>
            </div>
            <div class="flex flex-col items-start sm:items-center">
              <h3 class="font-normal text-2xl sm:text-xl md:text-2xl text-white font-abeeze">
                СЕРВИС
              </h3>
              <ul class="mt-3 space-y-2 text-start font-normal text-lg sm:text-base md:text-lg text-[#c4c4c4] font-abeeze">
                <li>
                  <a href="#" class="hover:text-orange-400">
                    Оплата
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-orange-400">
                    Гарантия
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-orange-400">
                    Доставка
                  </a>
                </li>
              </ul>
            </div>
            <div class="flex flex-col items-start sm:items-center">
              <h3 class="font-normal sm:ml-0 ml-[25px] text-2xl sm:text-xl md:text-2xl text-white font-abeeze">
                УСЛУГИ
              </h3>
              <ul class="mt-3 ml-[25px] space-y-2 text-start font-normal text-lg sm:text-base md:text-lg text-[#c4c4c4] font-abeeze">
                <li>
                  <a href="#" class="hover:text-orange-400">
                    Ремонт
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-orange-400">
                    Онлайн подбор
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-orange-400">
                    Обучение
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-orange-400">
                    Комиссионка
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex justify-center mt-[30px]">
            <img
              src={Phone}
              alt="Telegram Guitar Lavka"
              class="max-w-full h-auto rounded-lg shadow-lg w-full max-w-[300px] sm:max-w-[400px]"
            />
          </div>
          <a href="#top" className="fixed bottom-8  z-10 right-8">
            <img src={strelka} alt="" className="w-[108px] h-[108px]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
