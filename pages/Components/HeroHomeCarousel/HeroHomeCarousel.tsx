import React from "react";

export default function HeroHomeCarousel() {
  return (
    <>
      <div className="">
        <div className="hero bg-blue-700">
          <div className="hero-content text-start flex-col lg:flex-row bg-red-600">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl h-[600px]"
            />
            <div className="max-w-xl bg-yellow-300 hyphens-manual break-all flex-col space-y-5 px-5">
              <div>
                <h1 className="text-2xl font-bold">Judul</h1>
              </div>
              <div>
                <p className="text-xl font-bold">Penulis</p>
              </div>
              <div>
                <p className=" hyphens-auto">halaman</p>
              </div>
              <div>
                <p className=" hyphens-auto">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id
                  nisi.asdasdasdasdasasdasdasdasdasdasdsadasdasdasdasdasdasdasdasdasdasdasdasdasdasd
                </p>
              </div>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
