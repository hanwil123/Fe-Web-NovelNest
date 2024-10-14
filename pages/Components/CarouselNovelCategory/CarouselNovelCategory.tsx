import React from "react";
import { Card } from "flowbite-react";
import { FaArrowRight } from "react-icons/fa";
export default function CarouselNovelCategory() {
  return (
    <>
      <div className=" flex flex-col bg-slate-800 px-4 md:px-20">
        <div className=" my-5">
          <h5 className=" text-xl font-bold text-black">
            Kumpulan Novel By Category
          </h5>
        </div>
        <div className=" flex md:flex-row flex-col  space-x-5">
          <div className=" bg-zinc-600 px-5 w-auto h-auto rounded-lg justify-between md:items-start items-center flex md:flex-row flex-col md:space-x-5">
            <div>
              <h5 className=" text-xl font-bold text-black">Romance</h5>
            </div>
            <div className=" bg-yellow-400">
              <FaArrowRight className=" my-2 text-black" />
            </div>
          </div>

          <div className="carousel carousel-center rounded-box">
            <div className="carousel-item">
              <Card
                className="max-w-sm bg-emerald-500"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              >
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Judul Buku
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
            <div className="carousel-item">
              <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              >
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Judul Buku
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
            <div className="carousel-item">
              <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              >
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Judul Buku
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
            <div className="carousel-item">
              <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              >
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Judul Buku
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
            <div className="carousel-item">
              <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              >
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Judul Buku
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
            <div className="carousel-item">
              <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              >
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Judul Buku
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
            <div className="carousel-item">
              <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              >
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Judul Buku
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
            <div className="carousel-item">
              <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              >
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Judul Buku
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
