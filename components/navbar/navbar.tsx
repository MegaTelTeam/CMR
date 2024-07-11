
import Image from "next/image";
import Link from "next/link";
import NavToolTip from "./navToolTip";
import { Button, Divider } from "@nextui-org/react";
import Humburger from "./humburger";
import { menuItems } from "./menuItems";



export default function NavBar() {

  return (
    <div className="relative w-full h-[124px] shadow-md overflow-x-clip mb-[13px]">
      <div className="h-full w-full relative  gap-[30px] sm:gap-[60px] lg:gap-[20px] xl:gap-[40px]  2xl:gap-[60px] 2xl:text-sm flex items-center justify-center">

        <Humburger/>

        <div className="relative group/logo  ">
          <Image src="/logo.png" alt="C.M.R. Logo" width={99} height={124} className="flex-shrink-0 group-hover/logo:opacity-50 transition-all ease-out duration-200 "/>
          <div className="absolute right-[-20px]  lg:right-[-12px] top-[35px] xl:right-[-20px] opacity-0 group-hover/logo:opacity-100 transition-all ease-out duration-200 flex  flex-col items-end text-[#323033] w-[190px]  lg:w-[150px] xl:w-[190px] ">
              <h1 className="text-end text-2xl lg:text-xl xl:text-2xl">C.M.R</h1>
              <hr className=" border-1 border-[#323033] w-[140px] lg:w-[90px] xl:w-[140px]"/>
              <div className="text-end text-xs lg:text-[8px] xl:text-xs">Institut für Communication-<br/>& Marketing-Research</div>
          </div> 
        </div>

        <div className="hidden h-full lg:flex lg:items-center lg:gap-[20px] xl:gap-[40px]  2xl:gap-[60px]">

        {
          menuItems.map((item, index) => {
            if(item.link && !item.list) return (
              <Link key={`${item.text}-${index}`} className="group text-xs 2xl:text-sm text-forground hover:text-cmr-gray-500 transition-all ease-out duration-200 flex-shrink-0" href={item.link ? item.link : ""}  >
                {item.text}
                <span className="block opacity-0 group-hover:opacity-100 transition-all ease-out duration-200 h-[1px] bg-cmr-red-500"></span>
              </Link>
            )
            return (
              item.list && <NavToolTip key={index} list={item.list} text={item.text}  />
            )
          })
        }

        </div>

        <div className="flex items-center">
          <Button isIconOnly radius="none" disableAnimation className="lg:text-xs xl:text-sm bg-transparent h-fit py-1 text-cmr-red-500 hover:text-cmr-red-500 transition-all ease-out duration-200 ">DE</Button>
          <Divider orientation="vertical" className="bg-cmr-gray-700 w-[2px] h-[27px] "/>
          <Button isIconOnly radius="none" disableAnimation className="lg:text-xs xl:text-sm bg-transparent h-fit py-1 text-cmr-gray-700 hover:text-cmr-red-500 transition-all ease-out duration-200">EN</Button>
        </div>


        </div>
    </div>
  );
}

