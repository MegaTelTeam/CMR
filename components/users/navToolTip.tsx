import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

export default function NavToolTip({list,text}:{list:{text:string,link:string,content?:string[]}[],text:string}) {

    return (
        <div className="relative group hover:h-full flex items-center  flex-shrink-0">

            <h3 className="cursor-pointer group text-xs 2xl:text-sm text-forground hover:text-cmr-gray-500 transition-all ease-out duration-200 ">
                {text}
                <FaAngleDown className="inline-block ml-1 group-hover:rotate-180 transition-all ease-out duration-200"/>
            <span className="block opacity-0 group-hover:opacity-100 transition-all ease-out duration-200 h-[1px] bg-cmr-red-500"></span>
            </h3>

            <div className="absolute opacity-0 z-10 hidden group-hover:opacity-100  group-hover:flex flex-col gap-[2rem] shadow-md p-6 xl:p-8 border-1 bg-white top-[calc(100%+2px)]">
                {list.map((item,index)=>{
                    if (!item.content)
                        return (
                        <Link key={`${item.text}-${index}`} className="group/item w-fit text-xs 2xl:text-sm text-forground hover:text-cmr-gray-500 transition-all ease-out duration-200 " href={item.link}>
                            {item.text}
                            <span className="block w-full opacity-0 group-hover/item:opacity-100 transition-all ease-out duration-200 h-[1px] bg-cmr-red-500"></span>
                        </Link>
                    )
                    return(
                        <div key={`${item.text}-${index}`} className="group w-full ">
                            <h3 className="cursor-pointer group/content text-xs 2xl:text-sm text-forground hover:text-cmr-gray-500 transition-all ease-out duration-200 ">
                                {item.text}
                                <FaAngleDown className="inline-block ml-1 group-hover/content:rotate-180 transition-all ease-out duration-200"/>
                            <span className="block opacity-0 group-hover/content:opacity-100 transition-all ease-out duration-200 h-[1px] bg-cmr-red-500"></span>
                            </h3>
                            <div className="absolute left-[calc(100%+1px)]  opacity-0 z-10 hidden group-hover/content:opacity-100  group-hover/content:flex flex-col gap-[2rem] shadow-md p-6 xl:p-8 border-1 bg-white top-[calc(100%-55px)]">
                            {
                                item.content.map((itm,ind)=>{
                                    return(
                                        <Link key={`${itm}-${ind}`} className="w-fit text-xs 2xl:text-sm text-forground hover:text-cmr-gray-500 transition-all ease-out duration-200 " href={item.link}>
                                        {itm}
                                        </Link>
                                    )
                                })
                            }
                            </div>
                        </div>
                    )
                    
                })}
                    
                
            </div>

        </div>
    );
}