import React from "react";
import Link from "next/link";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
export default function Navbarr() {
  return (
    <>
      <Navbar fluid rounded className=" bg-black">
        <NavbarBrand href="https://flowbite-react.com">
          <img
            src="/novelnestlogo.png"
            className="mr-3 h-6 sm:h-9"
            alt="Novel Nest Logo"
          />
        </NavbarBrand>
        <div className="flex md:order-2">
          <Button>Login</Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="#">Kategori</NavbarLink>
          <NavbarLink href="#">Penulis</NavbarLink>
          <NavbarLink href="#">Blog</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </>
  );
}
