import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { Button } from "flowbite-react";
import Hero from "./Views/HeroCarousel/Hero";
import Navbarr from "./Components/NavbarComponent/Navbarr";
import CarouselNovelTrending from "./Components/CarouselNovelTrending/CarouselNovelTrending";
import FooterComponent from "./Components/Footer/FooterComponent";
import CarouselNovelCategory from "./Components/CarouselNovelCategory/CarouselNovelCategory";

export default function Home() {
  return (
    <>
      <Navbarr />
      <div className=" flex-col bg-yellow-300 container mx-auto w-full h-full">
        <div>
          <Hero />
        </div>
        <div className=" py-10">
          <CarouselNovelTrending />
        </div>
        <div className=" py-10">
          <CarouselNovelCategory />
        </div>
      </div>
      <FooterComponent/>
    </>
  );
}
