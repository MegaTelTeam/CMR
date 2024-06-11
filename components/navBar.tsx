"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import { usePathname } from "next/navigation";
// import { useSession } from "next-auth/react";
// import { useSupabase } from "@/providers/supabaseProvider";


export default function NavBar() {
  // const {data:session}=useSession()
  // console.log(session)

  // const client = useSupabase()
  // client?.from("users").select("*").then((res)=>{
  //   console.log(res)
  // }).catch((err)=>{
    
  // })



  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathName = usePathname()

  const menuItems = [
    {text:"home", link:"/"},
    {text:"Aktuelles",link:"/actuels"},
    {text:"Kompetenz",link:"/competence"},
    {text : "Über uns", link:"/aboutUs"},
    {text:"Kontakt", link:"/contact"},
    {text:"Datenschutzhinweise", link:"/privacyPolicy"},
  ];

  return (
    <Navbar maxWidth="2xl" position="static" isBlurred={false} className="absolute h-[120px] md:h-[200px]"  onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <div className="flex size-full flex-col text-[#323033] w-[285px]">
          <h1 className="text-end text-3xl">C.M.R.</h1>
              <hr className="border-1 border-[#323033]"/>
              <div className="text-end text-xs">Institut für Communication- & Marketing-Research</div>
              <div className="text-end text-xs">Aktiengesellschaft</div>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="start">
        {
          menuItems.map((item, index) => (
            <NavbarItem key={`${item.text}-${index}`} isActive={pathName===item.link}>
              <Link color="foreground" href={item.link} underline={pathName===item.link ? "always" : "hover"}>
                {item.text}
              </Link>
            </NavbarItem>
          ))
        }
      </NavbarContent>
    
      <NavbarMenu className="mt-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.text}-${index}`}  isActive={pathName===item.link}>
            <Link
              className="w-full"
              color="foreground"
              href={item.link}
              size="lg"
              underline={pathName===item.link ? "always" : "hover"}
            >
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

