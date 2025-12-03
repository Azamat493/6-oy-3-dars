import React from "react";
import IMG66551 from "../../assets/images/IMG66551.png";
import mediator from "../../assets/images/mediator.png";
import L2020021 from "../../assets/images/L2020021.png";
import Snimok from "../../assets/images/Snimok.png";
import struni1 from "../../assets/images/struni1.jpg";
import brand1 from "../../assets/images/brand1.png";
import brand2 from "../../assets/images/brand2.png";
import brand3 from "../../assets/images/brand3.png";
import brand4 from "../../assets/images/brand4.png";
import brand5 from "../../assets/images/brand5.png";
import brand6 from "../../assets/images/brand6.png";
import brand7 from "../../assets/images/brand7.png";
import brand8 from "../../assets/images/brand8.png";
import brand9 from "../../assets/images/brand9.png";
import brand10 from "../../assets/images/brand10.png";
const Brands = () => {
  return (
    <section class="max-w-[1600px] w-full mx-auto mt-0 mb-0 md:mb-[620px] md:mt-[150px] relative">
      <div class="grid grid-cols-1 sm:grid-cols-2 justify-center gap-[20px] w-max mx-auto h-auto md:h-[305px] lg:h-[400px]">
        <div class="relative w-[320px] sm:w-[520px] md:w-[420px] xl:w-[520px] card h-[250px] sm:h-[305px] hidden md:block">
          <div class="absolute inset-0 bg-black/50 z-10"></div>
          <div
            class="w-full h-full bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${IMG66551})` }}
          ></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
            <img src={mediator} alt="" />
            <h2 class="font-normal text-2xl text-center text-white font-abeeze mt-[40px]">
              гитары
            </h2>
          </div>
        </div>
        <div class="relative w-[320px] sm:w-[520px] md:w-[420px] xl:w-[520px] card h-[250px] sm:h-[305px] hidden md:block">
          <div class="absolute inset-0 bg-black/50 z-10"></div>
          <div
            class="w-full h-full bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${L2020021})` }}
          ></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
            <img src={mediator} alt="" />
            <h2 class="font-normal text-2xl text-center text-white font-abeeze mt-[40px]">
              укулеле
            </h2>
          </div>
        </div>
        <div class="relative w-[320px] sm:w-[520px] md:w-[420px] xl:w-[520px] card h-[250px] sm:h-[305px] hidden md:block z-10">
          <div class="absolute inset-0 bg-black/50 z-10"></div>
          <div
            class="w-full h-full bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${Snimok})` }}
          ></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
            <img src={mediator} alt="" />
            <h2 class="font-normal text-2xl text-center text-white font-abeeze mt-[40px]">
              аксессуары
            </h2>
          </div>
        </div>
        <div class="relative w-[320px] sm:w-[520px] md:w-[420px] xl:w-[520px] card h-[250px] sm:h-[305px] hidden md:block z-10">
          <div class="absolute inset-0 bg-black/50 z-10"></div>
          <div
            class="w-full h-full bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${struni1})` }}
          ></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
            <img src={mediator} alt="" />
            <h2 class="font-normal text-2xl text-center text-white font-abeeze mt-[40px]">
              струны
            </h2>
          </div>
        </div>
      </div>
      <div class="w-full hidden md:flex h-[520px] lg:h-[550px] bg-[#cc7408] z-0 mt-[50px] absolute justify-center items-end">
        <div>
          <div class="flex items-center justify-center gap-[30px] sm:gap-[50px] flex-wrap px-4 card2">
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
            <img src={brand3} alt="" />
            <img src={brand4} alt="" />
            <img src={brand5} alt="" />
          </div>
          <div class="flex items-center justify-center gap-[30px] sm:gap-[50px] flex-wrap px-4 mt-4 card2">
            <img src={brand6} alt="" />
            <img src={brand7} alt="" />
            <img src={brand8} alt="" />
            <img src={brand9} alt="" />
            <img src={brand10} alt="" />
          </div>
        </div>
      </div>
      <div class="w-full hidden md:flex h-[350px] sm:h-[498px] md:h-[520px] lg:h-[550px] bg-[#cc7408] z-0 mt-[50px] sm:mt-[70px] absolute justify-center items-end">
        <div>
          <div class="flex items-center justify-center gap-[30px] sm:gap-[50px] flex-wrap px-4 card2">
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
            <img src={brand3} alt="" />
            <img src={brand4} alt="" />
            <img src={brand5} alt="" />
          </div>
          <div class="flex items-center justify-center gap-[30px] sm:gap-[50px] flex-wrap px-4 mt-4 card2">
            <img src={brand6} alt="" />
            <img src={brand7} alt="" />
            <img src={brand8} alt="" />
            <img src={brand9} alt="" />
            <img src={brand10} alt="" />
          </div>
          <div>
            <div class="flex items-center justify-center gap-[30px] sm:gap-[50px] flex-wrap px-4 card3">
              <img
                src={brand1}
                class="w-full max-w-[100px] h-auto object-contain"
              />
              <img
                src={brand2}
                class="w-full max-w-[100px] h-auto object-contain"
              />
              <img
                src={brand3}
                class="w-full max-w-[100px] h-auto object-contain"
              />
              <img
                src={brand4}
                class="w-full max-w-[100px] h-auto object-contain"
              />
              <img
                src={brand5}
                class="w-full max-w-[100px] h-auto object-contain"
              />
            </div>
            <div class="flex items-center justify-center gap-[30px] sm:gap-[50px] flex-wrap px-4 mt-4 card3">
              <img
                src={brand6}
                class="w-full max-w-[100px] h-auto object-contain"
              />
              <img
                src={brand7}
                class="w-full max-w-[100px] h-auto object-contain"
              />
              <img
                src={brand8}
                class="w-full max-w-[100px] h-auto object-contain"
              />
              <img
                src={brand9}
                class="w-full max-w-[100px] h-auto object-contain"
              />
              <img
                src={brand10}
                class="w-full max-w-[100px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="block md:hidden w-full px-4 mt-[40px] pt-0">
        <div class="grid grid-cols-1 gap-4">
          <div class="relative w-full h-[220px]">
            <div class="absolute inset-0 bg-black/50 z-10"></div>
            <div
              class="w-full h-full bg-no-repeat bg-center bg-cover"
              style={{ backgroundImage: `url(${IMG66551})` }}
            ></div>
            <div class="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
              <img src={mediator} alt="" class="w-[50px] h-[50px]" />
              <h2 class="font-normal text-xl text-center text-white font-abeeze mt-0">
                гитары
              </h2>
            </div>
          </div>
          <div class="relative w-full h-[220px]">
            <div class="absolute inset-0 bg-black/50 z-10"></div>
            <div
              class="w-full h-full bg-no-repeat bg-center bg-cover"
              style={{ backgroundImage: `url(${L2020021})` }}
            ></div>
            <div class="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
              <img src={mediator} alt="" class="w-[50px] h-[50px]" />
              <h2 class="font-normal text-xl text-center text-white font-abeeze mt-0">
                укулеле
              </h2>
            </div>
          </div>
          <div class="relative w-full h-[220px]">
            <div class="absolute inset-0 bg-black/50 z-10"></div>
            <div
              class="w-full h-full bg-no-repeat bg-center bg-cover"
              style={{ backgroundImage: `url(${Snimok})` }}
            ></div>
            <div class="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
              <img src={mediator} alt="" class="w-[50px] h-[50px]" />
              <h2 class="font-normal text-xl text-center text-white font-abeeze mt-0">
                аксесуары
              </h2>
            </div>
          </div>
          <div class="relative w-full h-[220px]">
            <div class="absolute inset-0 bg-black/50 z-10"></div>
            <div
              class="w-full h-full bg-no-repeat bg-center bg-cover"
              style={{ backgroundImage: `url(${struni1})` }}
            ></div>
            <div class="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
              <img src={mediator} alt="" class="w-[50px] h-[50px]" />
              <h2 class="font-normal text-xl text-center text-white font-abeeze mt-0">
                струны
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div class="md:hidden w-full bg-[#cc7408] z-0 mt-4 flex flex-row items-center justify-center py-6">
        <div class="flex items-center justify-center gap-[20px] flex-wrap px-4 mb-4">
          <img
            src={brand1}
            alt=""
            class="w-[60px] h-auto"
          />
          <img src={brand2} alt="" class="w-[60px] h-auto" />
          <img
            src={brand3}
            alt=""
            class="w-[60px] h-auto"
          />
          <img src={brand4} alt="" class="w-[60px] h-auto" />
          <img src={brand5} alt="" class="w-[60px] h-auto" />
        </div>
        <div class="flex items-center justify-center gap-[20px] flex-wrap px-4">
          <img
            src={brand6}
            alt=""
            class="w-[60px] h-auto"
          />
          <img src={brand7} alt="" class="w-[60px] h-auto" />
          <img
            src={brand8}
            alt=""
            class="w-[60px] h-auto"
          />
          <img src={brand9} alt="" class="w-[60px] h-auto" />
          <img
            src={brand10}
            alt=""
            class="w-[60px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Brands;
