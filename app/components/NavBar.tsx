"use client"
import React from 'react'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className='dark:bg-black'>
      

   
    <Navbar fluid rounded className='bg-black'>
      <NavbarBrand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">All In One Rebuild</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          
        </NavbarLink>
        <NavbarLink href="#"></NavbarLink>
        <NavbarLink href="#"></NavbarLink>
        <NavbarLink href="#"></NavbarLink>
      </NavbarCollapse>
    </Navbar>
     </div>
  )
}

export default NavBar