import React, { useState } from "react";
import { Pagination } from "antd";
import Guitar2 from "../../assets/images/Guitar2.png";
import Love from "../../assets/images/Love.png";
import DSCF63501 from "../../assets/images/DSCF63501.png";
import DSCF27991 from "../../assets/images/DSCF27991.png";
import DSCF6323 from "../../assets/images/DSCF6323.png";
import DSCF6331 from "../../assets/images/DSCF6331.png";
import Guitar3 from "../../assets/images/Guitar3.png";
import icon10 from "../../assets/images/icon10.png";

const products = [
  {
    id: 1,
    category: "Комбоусилитель",
    name: "Joyo AC - 20",
    price: "₽23 890",
    rating: 5,
    status: "в наличии",
    images: [Guitar2, DSCF6323, DSCF6331, Guitar3],
    isFavorite: true,
  },
  {
    id: 2,
    category: "Комбоусилитель",
    name: "Joyo AC - 20",
    price: "₽24 890",
    rating: 5,
    status: "под заказ",
    images: [DSCF63501, DSCF6323, DSCF6331, Guitar3],
    isFavorite: false,
  },
  {
    id: 3,
    category: "Комбоусилитель",
    name: "Joyo AC - 20",
    price: "₽24 890",
    rating: 5,
    status: "в наличии",
    images: [DSCF27991, DSCF6323, DSCF6331, Guitar3],
    isFavorite: false,
  },
  {
    id: 4,
    category: "Комбоусилитель",
    name: "Joyo AC - 20",
    price: "₽23 890",
    rating: 5,
    status: "в наличии",
    images: [Guitar2, DSCF6323, DSCF6331, Guitar3],
    isFavorite: true,
  },
  {
    id: 5,
    category: "Комбоусилитель",
    name: "Joyo AC - 20",
    price: "₽24 890",
    rating: 5,
    status: "под заказ",
    images: [DSCF63501, DSCF6323, DSCF6331, Guitar3],
    isFavorite: false,
  },
  {
    id: 6,
    category: "Комбоусилитель",
    name: "Joyo AC - 20",
    price: "₽24 890",
    rating: 5,
    status: "в наличии",
    images: [DSCF27991, DSCF6323, DSCF6331, Guitar3],
    isFavorite: false,
  },
];

const CatalogListSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;
  const totalPages = Math.ceil(products.length / pageSize);

  const currentProducts = products.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-16">
      <div className="max-w-[1152px] mx-auto px-4">
        <div className="flex flex-col flex-wrap sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="flex gap-6">
            <span className="font-normal text-lg text-white font-abeeze">
              Каталог
            </span>
            <span className="font-normal text-lg text-orange-400 font-abeeze">
              Фильтры
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="text-[rgba(255,255,255,0.6)] font-abeeze">
              155 товаров
            </span>
            <div className="w-px h-4 bg-[#3b3a40]"></div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="inStock" className="w-4 h-4" />
              <label
                htmlFor="inStock"
                className="text-[rgba(255,255,255,0.6)] font-abeeze"
              >
                В наличии
              </label>
            </div>
            <div className="w-px h-4 bg-[#3b3a40]"></div>
            <div className="relative inline-block w-[200px]">
              <select className="appearance-none w-full bg-[#242424] text-white px-3 py-1 rounded text-sm font-abeeze pr-8">
                <option>Сортировка</option>
                <option>По умолчанию</option>
                <option>Цена: по возрастанию</option>
                <option>Цена: по убыванию</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="w-px h-4 bg-[#3b3a40]"></div>
            <div className="relative inline-block">
              <select className="appearance-none bg-[#242424] text-white px-3 py-1 rounded text-sm font-abeeze pr-8">
                <option>Показывать по</option>
                <option>15</option>
                <option>30</option>
                <option>50</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="w-px h-4 bg-[#3b3a40]"></div>
            <div className="flex gap-1">
              <svg
                width="66"
                height="14"
                viewBox="0 0 66 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="7.43111"
                  height="6.69565"
                  rx="0.2"
                  fill="#EA8305"
                />
                <rect
                  x="15.7911"
                  width="7.43111"
                  height="6.69565"
                  rx="0.2"
                  fill="#EA8305"
                />
                <rect
                  x="7.89551"
                  width="7.43111"
                  height="6.69565"
                  rx="0.2"
                  fill="#EA8305"
                />
                <rect
                  y="7.30435"
                  width="7.43111"
                  height="6.69565"
                  rx="0.2"
                  fill="#EA8305"
                />
                <rect
                  x="15.7911"
                  y="7.30435"
                  width="7.43111"
                  height="6.69565"
                  rx="0.2"
                  fill="#EA8305"
                />
                <rect
                  x="7.89551"
                  y="7.30435"
                  width="7.43111"
                  height="6.69565"
                  rx="0.2"
                  fill="#EA8305"
                />
                <rect
                  x="29.2356"
                  width="7.43111"
                  height="6.69565"
                  rx="0.2"
                  fill="#C4C4C4"
                />
                <rect
                  x="29.2356"
                  y="7.30435"
                  width="7.43111"
                  height="6.69565"
                  rx="0.2"
                  fill="#C4C4C4"
                />
                <rect
                  x="39.1112"
                  width="26.8889"
                  height="6.69565"
                  rx="0.2"
                  fill="#C4C4C4"
                />
                <rect
                  x="39.1112"
                  y="7.30435"
                  width="26.8889"
                  height="6.69565"
                  rx="0.2"
                  fill="#C4C4C4"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col lg:flex-row gap-3 p-4"
            >
              <div className="lg:w-1/4 relative">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="lg:w-full m-auto w-[60%] sm:w-[40%] lg:h-auto object-cover"
                />
              </div>

              <div className="p-5 relative h-[360px] bg-[rgba(255,255,255,0.13)] rounded-[0_0_40px_0] flex flex-col w-full lg:w-auto">
                <div className="horizontal-scroll">
                  <div className="flex flex-nowrap min-w-max justify-between gap-3 lg:gap-3 items-start lg:items-start">
                    <div className="w-full  lg:w-auto">
                      <h3 className="font-normal text-sm leading-[250%] text-white font-abeeze">
                        {product.category}
                      </h3>
                      <h2 className="font-normal text-2xl leading-[146%] text-white font-abeeze">
                        {product.name}
                      </h2>
                      <div className="absolute right-5 top-5">
                        <img src={Love} alt="" />
                      </div>
                      <div className="mt-3">
                        <span className="font-normal text-lg leading-[194%] text-white font-abeeze">
                          {product.price}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(product.rating)].map((_, i) => (
                            <span key={i} style={{ color: "#ffd600" }}>
                              ★
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-2 flex gap-2">
                        {product.images.slice(1, 4).map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt=""
                            className=" object-cover  opacity-60"
                          />
                        ))}
                      </div>
                      <div className="mt-2">
                        {product.status === "в наличии" ? (
                          <span className="font-normal text-sm leading-[250%] text-[rgba(255,214,0,0.6)] font-abeeze">
                            {product.status}
                          </span>
                        ) : (
                          <span className="font-normal text-sm leading-[250%] text-white font-abeeze">
                            {product.status}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 mt-55">
                      <button className="bg-[#3b3a40] flex gap-2 border border-solid border-[rgba(255,255,255,0.6)] items-center justify-center hover:bg-[#4a4950] w-[153px] h-10 px-4 py-2 rounded-[5px] font-normal cursor-pointer text-sm leading-[250%] text-center text-[#adadaf] font-abeeze transition">
                        <img src={icon10} alt="" />В КОРЗИНУ
                      </button>
                      <span className="italic whitespace-nowrap font-normal text-sm leading-[250%] text-center text-[rgba(173,173,175,0.6)] font-abeeze">
                        Добавить к сравнению
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Pagination
            current={currentPage}
            total={products.length}
            pageSize={pageSize}
            onChange={handlePageChange}
            showSizeChanger={false}
            itemRender={(page, type, element) => {
              if (type === "prev") {
                return (
                  <span className="font-normal text-lg leading-[194%] text-center text-[rgba(255,255,255,0.6)] font-abeeze">
                    Первая
                  </span>
                );
              }
              if (type === "next") {
                return (
                  <span className="font-normal text-lg leading-[194%] text-center text-[rgba(255,255,255,0.6)] font-abeeze">
                    Последняя
                  </span>
                );
              }
              return element;
            }}
            className="text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default CatalogListSection;
