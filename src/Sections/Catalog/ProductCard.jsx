import React, { useRef, useState } from "react";
import { Pagination } from "antd";
import Guitar from "../../assets/images/Guitar.png";

const ProductCard = ({ product }) => {
  return (
    <div className="min-w-[242px] rounded-lg overflow-hidden relative flex flex-col mx-2 flex-shrink-0">
      <div className="absolute bottom-0 left-0 w-full h-[60%] bg-[#3b3a40] z-0"></div>
      <div className="relative z-10 flex flex-col items-start">
        <img
          src={Guitar}
          alt={product.title}
          className="w-full object-cover h-auto"
        />
        <div className="p-4 w-full">
          <h2 className="font-normal text-sm text-white font-abeeze">
            {product.category}
          </h2>
          <h3 className="font-normal text-2xl text-white font-abeeze">
            {product.title}
          </h3>
          <div className="flex items-center justify-between w-full mt-4">
            <div>
              <h2 className="font-normal text-sm text-[rgba(255,255,255,0.6)] font-abeeze line-through">
                {product.originalPrice}
              </h2>
              <h2 className="font-normal text-lg text-white font-abeeze">
                {product.price}
              </h2>
            </div>
            <div className="flex flex-col items-center gap-1">
              <h2 className="text-yellow-400">★★★★★</h2>
              <h3 className="font-normal text-sm text-center text-[rgba(255,255,255,0.6)] font-abeeze">
                {product.reviews} отзывов
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CatalogGrid = () => {
  const carouselRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  const products = [
    {
      id: 1,
      category: "Укулеле",
      title: "Enya EUC-MAD",
      originalPrice: "₽24 890",
      price: "₽24 890",
      reviews: 7,
    },
    {
      id: 2,
      category: "Укулеле",
      title: "Enya EUC-MAD",
      originalPrice: "₽24 890",
      price: "₽24 890",
      reviews: 7,
    },
    {
      id: 3,
      category: "Укулеле",
      title: "Enya EUC-MAD",
      originalPrice: "₽24 890",
      price: "₽24 890",
      reviews: 7,
    },
    {
      id: 4,
      category: "Укулеле",
      title: "Enya EUC-MAD",
      originalPrice: "₽24 890",
      price: "₽24 890",
      reviews: 7,
    },
    {
      id: 5,
      category: "Укулеле",
      title: "Enya EUC-MAD",
      originalPrice: "₽24 890",
      price: "₽24 890",
      reviews: 7,
    },
    {
      id: 6,
      category: "Укулеле",
      title: "Enya EUC-MAD",
      originalPrice: "₽24 890",
      price: "₽24 890",
      reviews: 7,
    },
    {
      id: 7,
      category: "Укулеле",
      title: "Enya EUC-MAD",
      originalPrice: "₽24 890",
      price: "₽24 890",
      reviews: 7,
    },
    {
      id: 8,
      category: "Укулеле",
      title: "Enya EUC-MAD",
      originalPrice: "₽24 890",
      price: "₽24 890",
      reviews: 7,
    },
    {
      id: 9,
      category: "Укулеле",
      title: "Enya EUC-MAD",
      originalPrice: "₽24 890",
      price: "₽24 890",
      reviews: 7,
    },
    {
      id: 10,
      category: "Укулеле",
      title: "Enya EUC-MAD",
      originalPrice: "₽24 890",
      price: "₽24 890",
      reviews: 7,
    },
    {
      id: 11,
      category: "Укулеле",
      title: "Enya EUC-MAD",
      originalPrice: "₽24 890",
      price: "₽24 890",
      reviews: 7,
    },
    {
      id: 12,
      category: "Укулеле",
      title: "Enya EUC-MAD",
      originalPrice: "₽24 890",
      price: "₽24 890",
      reviews: 7,
    },
    {
      id: 13,
      category: "Укулеле",
      title: "Enya EUC-MAD",
      originalPrice: "₽24 890",
      price: "₽24 890",
      reviews: 7,
    },
    {
      id: 14,
      category: "Укулеле",
      title: "Enya EUC-MAD",
      originalPrice: "₽24 890",
      price: "₽24 890",
      reviews: 7,
    },
    {
      id: 15,
      category: "Укулеле",
      title: "Enya EUC-MAD",
      originalPrice: "₽24 890",
      price: "₽24 890",
      reviews: 7,
    },
  ];

  const pageSize = 12;
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
    <div className="w-full mb-10 max-w-[1152px] mt-5 mx-auto px-4">
      <div className="flex flex-wrap flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
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
          <div className="relative">
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
                  xmlns="http://www.w3.org/2000/svg"
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
          </div>
          <div className="w-px h-4 bg-[#3b3a40]"></div>
          <div className="relative">
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
                  xmlns="http://www.w3.org/2000/svg"
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
              <rect width="7.43111" height="6.69565" rx="0.2" fill="#EA8305" />
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

      <div className="md:grid flex overflow-x-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center">
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
  );
};

export default CatalogGrid;
