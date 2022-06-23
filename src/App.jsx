import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "./styles.css";
import { DownOutlined, HeartOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import "antd/dist/antd.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Scrollbar } from "swiper";

export default function App() {
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a target="_blank" rel="noopener noreferrer" href="">
              Popularity
            </a>
          )
        },
        {
          key: "2",
          label: (
            <a target="_blank" rel="noopener noreferrer" href="">
              High to Low
            </a>
          )
        },
        {
          key: "3",
          label: (
            <a target="_blank" rel="noopener noreferrer" href="">
              Low to High
            </a>
          )
        }
      ]}
    />
  );
  const responsive = {
    Mx: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    Lg: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5
    },
    Md: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.5
    },
    Sm: {
      breakpoint: { max: 464, min: 0 },
      items: 1.7
    },
    VrSm: {
      breakpoint: { max: 280, min: 0 },
      items: 1.3
    }
  };
  return (
    <>
      <div className="App max-w-2xl tracking-tight mx-auto py-2 px-2 sm:py-5u sm:px-6 lg:max-w-3xl lg:px-8">
        <div className="row">
          <div className="flex justify-between card p-1 py-3">
            <div className="text-xl font-semibold">glimpse VIP</div>
            <div>
              <HeartOutlined style={{ fontSize: "150%" }} />
            </div>
          </div>

          <img className="w-full p-1" src="/1.png" alt="123" />
          <div className="flex justify-between card p-1 py-5">
            <div className="text-md">6 products</div>
            <div>
              <Dropdown overlay={menu} className="text-black border p-3">
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Sort By
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
          <div className="border-b m-1 mb-3"></div>
          <div className="column">
            <div className="card">
              <Swiper
                scrollbar={{
                  hide: false
                }}
                modules={[Scrollbar]}
                className="mySwiper"
              >
                <SwiperSlide>
                  {" "}
                  <img
                    src="https://images.ctfassets.net/sa0xzxw55dr7/6DvPKSRuXGsPs6618Ypjov/11632283f2372bea3e2c544839f03b96/hypervolt-go-final-thumbnail.jpg"
                    alt="123"
                    className="w-full h-44 object-center object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://img.imageboss.me/pillowguy/cdn/s/files/1/1496/9422/products/BluePGTowels4stackwithlogo_1400x.jpg?v=1614016322"
                    alt="123"
                    className="w-full h-44 object-center object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0026/5178/3237/products/charcoalBB-4_1080x.png?v=1640930452"
                    alt="123"
                    className="w-full h-44 object-center object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://dl.airtable.com/.attachments/26cf21748c863c9926adacb8789931ce/3c399bae/LuxomePillow1.jpeg"
                    alt="123"
                    className="w-full h-44 object-center object-cover"
                  />
                </SwiperSlide>
              </Swiper>
              <h2 className="text-semibold pt-3 pb-2 text-sm">
                Pillow Guy Bamboo Bath & Hand Towel
              </h2>
              <p>$123.00</p>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <Swiper
                scrollbar={{
                  hide: false
                }}
                modules={[Scrollbar]}
                className="mySwiper"
              >
                <SwiperSlide>
                  {" "}
                  <img
                    src="https://cdn.shopify.com/s/files/1/2034/5801/products/GRV.OriginalWeighted.Grey.PDP1_1800x1800.jpg"
                    alt="123"
                    className="w-full h-44 object-center object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://cdn.shopify.com/s/files/1/2034/5801/products/GRV.OriginalWeighted.Grey.PDP2_1800x1800.jpg?v=1643136825"
                    alt="123"
                    className="w-full h-44 object-center object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://dl.airtable.com/.attachments/26cf21748c863c9926adacb8789931ce/3c399bae/LuxomePillow1.jpeg"
                    alt="123"
                    className="w-full h-44 object-center object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://images.ctfassets.net/sa0xzxw55dr7/6DvPKSRuXGsPs6618Ypjov/11632283f2372bea3e2c544839f03b96/hypervolt-go-final-thumbnail.jpg"
                    alt="123"
                    className="w-full h-44 object-center object-cover"
                  />
                </SwiperSlide>
              </Swiper>
              <h2 className="text-semibold pt-3 pb-2 text-sm">
                Pillow Guy Bamboo Bath & Hand Towel
              </h2>
              <p>$123.00</p>
            </div>
          </div>
          <h1 className="text-xl py-3">Products you may like</h1>
          <Carousel
            responsive={responsive}
            minimumTouchDrag={50}
            arrows={false}
            autoPlay={true}
            infinite
          >
            <div className="tracking-tight">
              <div className="w-48 mr-2">
                <div className="">
                  <img
                    src="https://images.ctfassets.net/sa0xzxw55dr7/6DvPKSRuXGsPs6618Ypjov/11632283f2372bea3e2c544839f03b96/hypervolt-go-final-thumbnail.jpg"
                    alt="123"
                    className="w-full h-44 object-center object-cover group-hover:opacity-75"
                  />
                  <div className="mt-2">
                    <h1 className="mb-1 px-2 text-sm">Lyric Massager</h1>

                    <p className="mb-1 px-2 text-lg font-medium pr-2">
                      $150
                      <span className="line-through text-gray-500 px-2">
                        $180
                      </span>
                    </p>
                    <div className="text-md px-2 blue-navy py-2">20% OFF</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-48 mr-2">
                <div className="">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0026/5178/3237/products/minky-minky-grey-rc-2_1080x.png?v=1640931533"
                    alt="123"
                    className="w-full h-44 object-center object-cover group-hover:opacity-75"
                  />
                  <div className="mt-2">
                    <h1 className="mb-1 px-2 text-sm">Lyric Massager</h1>

                    <p className="mb-1 px-2 text-lg font-medium pr-2">
                      $150
                      <span className="line-through text-gray-500 px-2">
                        $180
                      </span>
                    </p>
                    <div className="text-md px-2 blue-navy py-2">20% OFF</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-48 mr-2">
                <div className="">
                  <img
                    src="https://cdn.shopify.com/s/files/1/2034/5801/products/GRV.OriginalWeighted.Grey.PDP1_1800x1800.jpg"
                    alt="123"
                    className="w-full h-44 object-center object-cover group-hover:opacity-75"
                  />
                  <div className="mt-2">
                    <h1 className="mb-1 px-2 text-sm">Lyric Massager</h1>

                    <p className="mb-1 px-2 text-md font-medium pr-2">
                      $150
                      <span className="line-through text-gray-500 px-2">
                        $180
                      </span>
                    </p>
                    <div className="text-md px-2 blue-navy py-2">20% OFF</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-48 mr-2">
                <div className="">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0026/5178/3237/products/Luxome-LAYRPillow-Lightbox_768x.png?v=1642777005"
                    alt="123"
                    className="w-full h-44 object-center object-cover group-hover:opacity-75"
                  />
                  <div className="mt-2">
                    <h1 className="mb-1 px-2 text-sm">Lyric Massager</h1>

                    <p className="mb-1 text-md px-2 font-medium pr-2">
                      $150
                      <span className="line-through text-gray-500 px-2">
                        $180
                      </span>
                    </p>
                    <div className="text-md px-2 blue-navy py-2">20% OFF</div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
