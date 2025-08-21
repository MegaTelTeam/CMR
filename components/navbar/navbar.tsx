"use client";
import Image from "next/image";
import Link from "next/link";
import NavToolTip from "./navToolTip";
import Humburger from "./humburger";
import {getMenuItems} from "./menuItems";
import LanguageChanger from "./languageButtons";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavBar() {
  const { t } = useTranslation()
  const menuItems = getMenuItems({t});
  const rawPathName = usePathname() ?? "/"
  // remove locale prefix (e.g. /en or /de) so item.link comparisons work
  const pathName = rawPathName.replace(/^\/(en|de)(?=\/|$)/, "") || "/"
  
  return (
    
  <div className="fixed w-full h-[96px] top-0 backdrop-blur-sm z-50 bg-[#f6f6f6]/50 shadow-sm">
      <div className="h-full w-full relative flex items-center justify-between px-4 container mx-auto">

        <Humburger menuItems={menuItems}/>

        <Image src="/cmr-logo.png" alt="C.M.R. Logo" width={149} height={75} className="flex-shrink-0"/>

        <div className="hidden h-full lg:flex items-center gap-4">

        {
          menuItems.map((item, index) =>{
            if(!item.list) return (
                <Link  key={`${item.text}-${index}`} className={cn("text-xs 2xl:text-sm text-forground flex-shrink-0 px-3 py-2 hover:text-white hover:bg-cmr-red-400 rounded-[10px] transition-all ease-out duration-200", pathName === item.link ? "text-white bg-cmr-red-400" : "")} href={item.link}  >
                  {item.text}
                </Link>
            ) 
            return (
              item.list && <NavToolTip key={index}  list={item.list} text={item.text} link={item.link}  />
            )
          })
        }

        </div>
          <LanguageChanger/>
        </div>
    </div>
  );
}