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
        <NavbarBrand href="/">
          <img
            src="/novelnestlogo.png"
            className="mr-3 h-6 sm:h-9"
            alt="Novel Nest Logo"
          />
        </NavbarBrand>
        <div className="flex md:order-2">
          <Button><Link href="/Components/LoginForm/LoginForm">Login</Link></Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="/Views/ListBookByCategory/ListBookByCategory">Kategori</NavbarLink>
          <NavbarLink href="#">Penulis</NavbarLink>
          <NavbarLink href="#">Blog</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </>
  );
}
