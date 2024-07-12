"use client"
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useRouter } from "next/router";

export default function MenuToolTip({list,text,link,setOpen}:{list:{text:string,link?:string,content?:{text:string,link:string}[]}[],text:string,link:string,setOpen:React.Dispatch<React.SetStateAction<boolean>>}) {

    const [rotate,setRotate]=useState([-180,-180])

    const rotation = (index:number) => {
        setRotate((prev) => {
            index === 0 ? prev = [-prev[0], prev[1]] : prev = [prev[0], -prev[1]];
            return prev
          });
    }

    const OnClose = () => { 
        setOpen(false)
    }

    return (
        <div className="relative flex flex-col flex-shrink-0  ">

            <Accordion showDivider={false} className=" w-fit p-0" hideIndicator  isCompact itemClasses={{base: "py-0 w-full",title: "w-fit text-xs 2xl:text-sm text-forground hover:text-cmr-gray-500 transition-all ease-out duration-200 "}} >
                <AccordionItem aria-label="Accordion 1" onPress={() => rotation(0)}  title={<div className="flex gap-2 items-center"><Link href={link} onClick={OnClose}>{text}</Link><FaAngleDown className={`inline-block ml-1 rotate-${rotate[0]} transition-all ease-out duration-200`}/></div> }  >
                    <div className="flex flex-col ml-[30px] gap-[25px] mt-[17px] break-words">
                    {list.map((item,index)=>{
                        if (!item.content && item.link){
                            return (
                                <Link key={`${item.text}-${index}`} onClick={OnClose} className="w-fit text-xs 2xl:text-sm text-forground hover:text-cmr-gray-500 transition-all ease-out duration-200 " href={item.link}>
                                {item.text}
                                </Link>
                            )
                        }
                        return(
                            <Accordion key={`${item.text}-${index}`}  showDivider={false} className="w-fit p-0" isCompact  hideIndicator itemClasses={{base: "py-0 w-full",title: "w-fit text-xs 2xl:text-sm text-forground hover:text-cmr-gray-500 transition-all ease-out duration-200 "}}>
                                <AccordionItem aria-label="Accordion 2" onPress={() => rotation(1)} title={<p>{item.text} <FaAngleDown className={`inline-block ml-1 rotate-${rotate[1]} transition-all ease-out duration-200`}/></p> }>
                                <div className="flex flex-col ml-[30px] gap-[25px] mt-[17px] break-words mr-2">
                                    {
                                    item.content!.map((itm,ind)=>{
                                        return(
                                            <Link key={`${itm}-${ind}`} onClick={OnClose} className=" w-fit text-xs 2xl:text-sm text-forground hover:text-cmr-gray-500 transition-all ease-out duration-200 " href={itm.link}>
                                            {itm.text}
                                            </Link>
                                            )
                                        })
                                    }
                                </div>
                                </AccordionItem>
                            </Accordion>
                        )
                    })}
                    </div>
                </AccordionItem>
            </Accordion>

        </div>
    )
}