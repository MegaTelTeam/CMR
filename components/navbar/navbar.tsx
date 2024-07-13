
import Image from "next/image";
import Link from "next/link";
import NavToolTip from "./navToolTip";
import Humburger from "./humburger";
import {getMenuItems} from "./menuItems";
import LanguageChanger from "./languageButtons";
import  I18nextProvider  from "@/providers/i18nProvider";
import initTranslations from "@/app/i18n";



export default async function NavBar({locale}: {locale: string}) {

  const menuItems = await getMenuItems({locale});

  const { resources } = await initTranslations(locale, ["navbar"]);

  return (
    
    <div className="relative w-full h-[124px] shadow-md overflow-x-clip mb-[13px]">
      <div className="h-full w-full relative  gap-[30px] sm:gap-[60px] lg:gap-[20px] xl:gap-[40px]  2xl:gap-[60px] 2xl:text-sm flex items-center justify-center">

        <Humburger menuItems={menuItems}/>

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
            if( !item.list) return (
              <Link key={`${item.text}-${index}`} className="group text-xs 2xl:text-sm text-forground hover:text-cmr-gray-500 transition-all ease-out duration-200 flex-shrink-0" href={item.link}  >
                {item.text}
                <span className="block opacity-0 group-hover:opacity-100 transition-all ease-out duration-200 h-[1px] bg-cmr-red-500"></span>
              </Link>
            )
            return (
              item.list && <NavToolTip key={index}  list={item.list} text={item.text} link={item.link}  />
            )
          })
        }

        </div>

        <I18nextProvider namespaces={["navbar"]} locale={locale} resources={resources} >
          <LanguageChanger/>
        </I18nextProvider>



        </div>
    </div>
  );
}

