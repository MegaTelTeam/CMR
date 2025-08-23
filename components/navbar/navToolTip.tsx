"use client"
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export default function NavToolTip({list,text,link}:{list:{text:string,link:string,content?:{text:string,link:string}[]}[],text:string,link:string}) {
    const [currentHover, setCurrentHover] = useState<boolean>()
    const pathName = usePathname()
    return (
        <div 
            onMouseEnter={()=>{
                setCurrentHover(true)
            }}
            onMouseLeave={()=>{
                setCurrentHover(false)
            }} 
            className="relative group hover:h-full h-fit flex items-center  flex-shrink-0"
        >

            <button className={cn("cursor-pointer text-xs 2xl:text-sm text-forground group-hover:text-white group-hover:bg-cmr-red-400 rounded-[10px] transition-all ease-out duration-200 px-3 py-2 ", pathName.includes(link) ? "text-white bg-cmr-red-400" : "")}>
                {text}
                <FaAngleDown className="inline-block ml-1 group-hover:rotate-180 transition-all ease-out duration-200"/>
            </button>
            { currentHover && (
            <div 
                className="absolute top-full border-transparent border-t-4 z-10 max-w-[377px] min-w-[200px]">
                <motion.div initial={
                    { opacity: 0 }
                } animate={
                    { opacity: 1 }
                } className="opacity-0 z-10 group-hover:flex flex-col shadow-md border-1 p-5 gap-5 bg-white rounded-[10px] transition-all ease-out duration-200">
                    {list.map((item,index)=>{
                        if (!item.content){
                            return (
                            <Link key={`${item.text}-${index}`} className={cn("w-fit text-xs 2xl:text-sm text-forground px-3 py-2 hover:text-white hover:bg-cmr-red-400 rounded-[10px] transition-all ease-out duration-200", pathName.includes(item.link) ? "text-white bg-cmr-red-400" : "")} href={item.link}>
                                {item.text}
                            </Link>
                        )
                        }
                        return(
                            <div key={`${item.text}-${index}`} className="group/content flex   pb-[2rem] h-full ">
                                <Link href={item.link} className={cn(" cursor-pointer min-w-fit group/content  text-xs 2xl:text-sm text-forground hover:text-cmr-gray-500 transition-all ease-out duration-200 px-6 xl:px-8 whitespace-nowrap", pathName.includes(item.link) ? "text-cmr-gray-500" : "")}>
                                    {item.text}
                                    <FaAngleDown className="inline-block ml-1 group-hover/content:rotate-180 transition-all ease-out duration-200"/>
                                    <span className="block w-full opacity-0 group-hover/content:opacity-100 transition-all ease-out duration-200 h-[1px] bg-cmr-red-500"></span>
                                </Link>
                                <div className="absolute left-[100%] whitespace-nowrap  opacity-0 z-10 hidden group-hover/content:opacity-100  group-hover/content:flex flex-col gap-[2rem] shadow-md p-6 xl:p-8 border-1 bg-white top-[calc(100%-70px)]">
                                {
                                    item.content!.map((itm,ind)=>{
                                        return(
                                            <Link key={`${item.text}-${ind}`} className="group/item w-fit text-xs 2xl:text-sm text-forground hover:text-cmr-gray-500 transition-all ease-out duration-200 whitespace-nowrap" href={itm.link}>
                                            {itm.text}
                                            <span className="block w-full opacity-0 group-hover/item:opacity-100 transition-all ease-out duration-200 h-[1px] bg-cmr-red-500"></span>
                                        </Link>
                                        )
                                    })
                                }
                                </div>
                            </div>
                        )
                        
                    })}
                </motion.div>
            </div>
            )}
        </div>
    );
}