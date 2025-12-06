import React from "react";
import { NavLink } from "react-router-dom";
import WhatsApp from "../assets/images/WhatsApp.png";
import Telegram from "../assets/images/Telegram.png";
import Vk from "../assets/images/Vk.png";
import Viber from "../assets/images/Viber.png";
import Youtube from "../assets/images/Youtube.png";
import Instagram from "../assets/images/Instagram.png";
import trubka from "../assets/images/trubka.png";
import Poisk from "../assets/images/Poisk.png";
import Screenshot6 from "../assets/images/Screenshot6.png";
import Izbrannoe from "../assets/images/Izbrannoe.png";
import Korzina from "../assets/images/Korzina.png";
const Header = () => {
  return (
    <header classNames="">
      <div id="top"></div>
      <div className="border border-solid border-[#242424]">
        <div className=" max-w-[1405px] px-2 w-full mx-auto  py-2  flex justify-center gap-[15px] md:gap-0 md:justify-between items-center flex-wrap">
          <div className="flex items-center gap-6">
            <span className="font-normal text-[13px] text-center text-[rgba(255,255,255,0.13)] font-abeeze">
              Ваш город:
              <strong className="font-normal text-[13px] text-center text-[rgba(255,255,255,0.6)] font-abeeze">
                Самара
              </strong>
            </span>
          </div>
          <div className="flex items-center m-[10px_0px] gap-6 ml-0 md:m-0 md:ml-[200px]">
            <a
              href="https://www.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition duration-200 hover:scale-105"
            >
              <img src={WhatsApp} alt="" />
            </a>
            <a
              href="https://t.me/Tolko_Nenado"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition duration-200 hover:scale-105"
            >
              <img src={Telegram} alt="" />
            </a>
            <a
              href="https://vk.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition duration-200 hover:scale-105"
            >
              <img src={Vk} alt="" />
            </a>
            <a
              href="https://www.viber.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition duration-200 hover:scale-105"
            >
              <img src={Viber} alt="" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition duration-200 hover:scale-105"
            >
              <img src={Youtube} alt="" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition duration-200 hover:scale-105"
            >
              <img src={Instagram} alt="" />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[10px]">
            <div className="flex items-center gap-[10px]">
              <img src={trubka} alt="" />
              <span className="font-normal text-sm text-[rgba(255,255,255,0.6)] font-abeeze whitespace-nowrap">
                8 (800) 100 26 80
              </span>
            </div>
            <div className="font-normal text-sm text-[rgba(255,255,255,0.6)] font-abeeze whitespace-nowrap">
              ЕЖЕДНЕВНО 10:00–20:00
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 px-6 flex justify-around items-center max-w-[1600px] mx-auto">
        <div className="hidden md:flex items-center gap-2 text-gray-300 cursor-pointer hover:text-white hover:scale-105 transition duration-200">
          <img src={Poisk} alt="" />
          <span>поиск</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="/">
            <img src={Screenshot6} alt="" />
          </a>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            <button className="cursor-pointer hover:scale-110 transition duration-200">
              <img src={Izbrannoe} alt="" />
            </button>
            <button className="cursor-pointer hover:scale-110 transition duration-200">
              <img src={Korzina} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden px-6 pb-4 flex items-center justify-around gap-4">
        <div className="flex items-center gap-2 text-gray-300 cursor-pointer hover:text-white hover:scale-105 transition duration-200">
          <img src={Poisk} alt="" />
          <span>поиск</span>
        </div>

        <div className="block md:hidden">
          <input
            type="checkbox"
            id="mobile-menu-toggle"
            className="hidden peer"
          />
          <label
            for="mobile-menu-toggle"
            className="cursor-pointer p-2 rounded-md bg-white border border-gray-300 z-50 relative"
          >
            <i className="fas fa-bars text-lg"></i>
          </label>
          <label
            for="mobile-menu-toggle"
            className="fixed inset-0 z-40 bg-transparent cursor-pointer peer-checked:block hidden"
          ></label>
          <div className="fixed top-0 right-0 z-50 w-full max-w-xs h-screen bg-gradient-to-b from-[#1a1725] to-[#24202f] shadow-2xl p-6 pt-16 overflow-y-auto transform translate-x-full peer-checked:translate-x-0 transition-transform duration-300 ease-in-out">
            <label
              htmlFor="mobile-menu-toggle"
              className="absolute top-4 right-4 cursor-pointer p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-shadow shadow-md"
            >
              <i className="fas fa-times text-lg text-gray-800"></i>
            </label>

            <nav className="mt-8 space-y-3">
              {[
                { name: "Главная", path: "/" },
                { name: "Каталог", path: "/catalog" },
                { name: "Новый каталог", path: "/newcatalog" },
                { name: "Товары", path: "/products" },
                { name: "Обслуживание", path: "/service" },
                { name: "Отзывы", path: "/reviews" },
                { name: "Обучение", path: "/training" },
                { name: "Контакты", path: "/contacts" },
                { name: "ОПТ", path: "/opt" },
              ].map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-orange-500 text-white font-semibold shadow-lg"
                        : "text-white hover:bg-orange-600 hover:text-white hover:shadow-md"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="cursor-pointer hover:scale-110 transition duration-200">
            <img src={Izbrannoe} alt="" />
          </button>
          <button className="cursor-pointer hover:scale-110 transition duration-200">
            <img src={Korzina} alt="" />
          </button>
        </div>
      </div>
      <nav className="hidden md:block px-6 pb-4">
        <ul className="flex justify-center flex-wrap gap-6 uppercase tracking-wider font-normal text-sm text-center text-white font-abeeze">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-orange-400 font-semibold"
                    : "text-white hover:text-orange-400"
                }`
              }
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-orange-400 font-semibold"
                    : "text-white hover:text-orange-400"
                }`
              }
            >
              Каталог
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newcatalog"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-orange-400 font-semibold"
                    : "text-white hover:text-orange-400"
                }`
              }
            >
              Новый каталог
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-orange-400 font-semibold"
                    : "text-white hover:text-orange-400"
                }`
              }
            >
              Товары
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-orange-400 font-semibold"
                    : "text-white hover:text-orange-400"
                }`
              }
            >
              Обслуживание
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-orange-400 font-semibold"
                    : "text-white hover:text-orange-400"
                }`
              }
            >
              Отзывы
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/training"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-orange-400 font-semibold"
                    : "text-white hover:text-orange-400"
                }`
              }
            >
              Обучение
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-orange-400 font-semibold"
                    : "text-white hover:text-orange-400"
                }`
              }
            >
              Контакты
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/opt"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-orange-400 font-semibold"
                    : "text-white hover:text-orange-400"
                }`
              }
            >
              ОПТ
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
