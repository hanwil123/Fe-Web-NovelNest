import HeroHomeCarousel from "@/pages/Components/HeroHomeCarousel/HeroHomeCarousel";
import { Carousel } from "flowbite-react";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className="">
        <Carousel slideInterval={1000}>
            <HeroHomeCarousel/>
            <HeroHomeCarousel/>
            <HeroHomeCarousel/>
            <HeroHomeCarousel/>
        </Carousel>
      </div>
    </>
  );
}
