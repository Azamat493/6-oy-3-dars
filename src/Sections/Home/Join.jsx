import React from 'react'
import mujik from "../../assets/images/mujik.png";
import iconTelegram from "../../assets/images/iconTelegram.png";
const Join = () => {
  return (
   <section
        class="relative mb-6 h-[300px] w-full max-w-[1600px] mx-auto rounded-[0_150px_150px_0] bg-cover bg-center sm:mb-[40px] sm:h-[343px] sm:rounded-[0_171px_171px_0]"
      style={{ backgroundImage: `url(${mujik})` }}>
        <div
          class="absolute inset-0 rounded-[0_150px_150px_0] bg-[rgba(216,119,0,0.6)] sm:rounded-[0_171px_171px_0]"
        ></div>
        <div
          class="club-form absolute top-1/2 w-full max-w-[620px] -translate-y-1/2 transform left-1/2 -translate-x-1/2 /* мобила <640px */ sm:left-1/2 sm:-translate-x-1/2 sm:right-auto /* 640px–952px */ lg:left-auto lg:right-[-120px] xl:right-[-180px] /* >952px */ bg-[#fcf7f2] rounded-[30px] p-6 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] h-auto"
        >
          <div
            class="font-doppio text-center text-base font-normal text-[#3b3a40] sm:text-lg"
          >
            ВСТУПАЙ В КЛУБ
          </div>
          <h1
            class="font-doppio mb-2 text-center text-4xl font-normal text-[#cc7408] sm:text-5xl"
          >
            GUITAR LAVKA
          </h1>
          <p
            class="font-doppio mb-4 text-center text-xs font-normal text-[#bfb9b1] sm:mb-6 sm:text-sm"
          >
            Полезные письма об инструментах и мероприятиях
          </p>
          <form class="flex flex-col gap-3 sm:flex-row sm:gap-2">
            <input
              type="email"
              placeholder="Ваш email ..."
              class="w-full rounded-md border border-gray-300 bg-[#f2eae0] px-4 py-2 text-base font-normal text-[rgba(59,58,64,0.6)] focus:outline-none focus:ring-2 focus:ring-orange-500 sm:flex-1 sm:text-lg"
            />
            <a
              href="https://t.me/Tolko_Nenado"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center rounded-md bg-[#cc7408] px-4 py-2 text-white transition-colors hover:bg-orange-700 hover:opacity-80 hover:scale-105 sm:py-2"
            >
              <img
                src={iconTelegram}
                alt="Telegram"
                class="h-5 w-5"
              />
            </a>
          </form>
          <div
            class="mt-3 text-center text-xs italic font-normal leading-[143%] text-[rgba(196,196,196,0.6)] sm:text-sm"
          >
            Я даю согласие на обработку своих персональных данных
          </div>
        </div>
      </section>
  )
}

export default Join