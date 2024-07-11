"use client"
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export default function MenuToolTip({list,text}:{list:{text:string,link:string,content?:string[]}[],text:string}) {

    const [rotate,setRotate]=useState([-180,-180])

    const rotation = (index:number) => {
        setRotate((prev) => {
            index === 0 ? prev = [-prev[0], prev[1]] : prev = [prev[0], -prev[1]];
            return prev
          });
    }

    return (
        <div className="relative flex flex-col flex-shrink-0  ">

            <Accordion showDivider={false} className=" w-fit p-0" hideIndicator  isCompact itemClasses={{base: "py-0 w-full",title: "w-fit text-xs 2xl:text-sm text-forground hover:text-cmr-gray-500 transition-all ease-out duration-200 "}} >
                <AccordionItem aria-label="Accordion 1" onPress={() => rotation(0)}  title={<p>{text} <FaAngleDown className={`inline-block ml-1 rotate-${rotate[0]} transition-all ease-out duration-200`}/></p> }  >
                    <div className="flex flex-col ml-[30px] gap-[25px] mt-[17px] break-words">
                    {list.map((item,index)=>{
                        if (!item.content){
                            return (
                                <Link key={`${item.text}-${index}`} className="w-fit text-xs 2xl:text-sm text-forground hover:text-cmr-gray-500 transition-all ease-out duration-200 " href={item.link}>
                                {item.text}
                                </Link>
                            )
                        }
                        return(
                            <Accordion key={`${item.text}-${index}`}  showDivider={false} className="w-fit p-0" isCompact  hideIndicator itemClasses={{base: "py-0 w-full",title: "w-fit text-xs 2xl:text-sm text-forground hover:text-cmr-gray-500 transition-all ease-out duration-200 "}}>
                                <AccordionItem aria-label="Accordion 2" onPress={() => rotation(1)} title={<p>{item.text} <FaAngleDown className={`inline-block ml-1 rotate-${rotate[1]} transition-all ease-out duration-200`}/></p> }>
                                <div className="flex flex-col ml-[30px] gap-[25px] mt-[17px] break-words mr-2">
                                    {
                                    item.content.map((itm,ind)=>{
                                        return(
                                            <Link key={`${itm}-${ind}`} className=" w-fit text-xs 2xl:text-sm text-forground hover:text-cmr-gray-500 transition-all ease-out duration-200 " href={item.link}>
                                            {itm}
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