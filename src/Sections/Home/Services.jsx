import React from 'react'
import Photo1 from "../../assets/images/Photo1.png";
import Photo2 from "../../assets/images/Photo2.png";
import Photo3 from "../../assets/images/Photo3.png";
const Services = () => {
  return (
    <section>
        <div class="max-w-[1152px] w-full mx-auto mb-12">
          <h2
            class="font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-[50px] text-center text-white font-abeeze mb-6"
          >
            Услуги
          </h2>
          <div
            class="max-w-[300px] w-full h-0 border-2 border-solid border-[#d87700] mx-auto"
          ></div>
          <div
            class="grid grid-cols-1 w-max mx-auto lg:grid-cols-3 justify-center gap-[20px] mt-[40px]"
          >
            <div
              class="flex items-end w-[240px] sm:w-[300px] lg:w-[260px] xl:w-[280px] h-[320px] sm:h-[399px] lg:h-[360px] xl:h-[380px]  bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${Photo1})` }}>
              <div
                class="flex items-center justify-center bg-[rgba(19,18,24,0.8)] w-full h-[70px] sm:h-[98px]"
              >
                <h2
                  class="font-normal text-lg sm:text-2xl leading-[146%] text-center text-white font-abeeze"
                >
                  ОБУЧЕНИЕ
                </h2>
              </div>
            </div>
            <div
              class="flex relative items-end w-[240px] sm:w-[300px] lg:w-[260px] xl:w-[280px] h-[320px] sm:h-[399px] lg:h-[360px] xl:h-[380px] bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${Photo2})` }}>
              <div class="absolute inset-0 bg-black/50 z-10"></div>

              <p
                class="absolute top-[4%] left-4 sm:left-6 md:left-8 font-normal text-sm sm:text-base md:text-lg lg:text-base xl:text-lg leading-[150%] sm:leading-[160%] md:leading-[167%] text-white font-abeeze z-20 max-w-[85%] sm:max-w-[80%] md:max-w-[75%]"
              >
                В нашей гитарной <br />
                мастерской мы<br />
                оказываем полный<br />
                спектр услуг по ремонту<br />
                и обслуживанию<br />
                музыкальных<br />
                инструментов, в том<br />
                числе и изготовление на<br />
                заказ.
              </p>

              <div
                class="flex items-center justify-center bg-[rgba(19,18,24,0.8)] w-full h-[70px] sm:h-[98px]"
              >
                <h2
                  class="font-normal text-base sm:text-lg leading-[167%] text-center text-[#ea8305] font-abeeze"
                >
                  ПОКАЗАТЬ ЕЩЁ
                </h2>
              </div>
            </div>

            <div
              class="flex items-end w-[240px] sm:w-[300px] lg:w-[260px] xl:w-[280px] h-[320px] sm:h-[399px] lg:h-[360px] xl:h-[380px] bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${Photo3})` }}>
              <div
                class="flex items-center justify-center bg-[rgba(19,18,24,0.8)] w-full h-[70px] sm:h-[98px]"
              >
                <h2
                  class="font-normal text-lg sm:text-2xl leading-[146%] text-center text-white font-abeeze"
                >
                  РЕМОНТ
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Services