import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

export default async function NavToolTip({list,text,link}:{list:{text:string,link?:string,content?:{text:string,link:string}[]}[],text:string,link:string}) {


    return (
        <div className="relative group hover:h-full flex items-center  flex-shrink-0">

            <Link href={link} className="cursor-pointer group text-xs 2xl:text-sm text-forground hover:text-cmr-gray-500 transition-all ease-out duration-200 ">
                {text}
                <FaAngleDown className="inline-block ml-1 group-hover:rotate-180 transition-all ease-out duration-200"/>
            <span className="block opacity-0 group-hover:opacity-100 transition-all ease-out duration-200 h-[1px] bg-cmr-red-500"></span>
            </Link>
            <div className="absolute top-full z-10 ">
            <div className="opacity-0 min-w-[207px] z-10 hidden group-hover:opacity-100  group-hover:flex flex-col gap-[2rem] shadow-md py-6 xl:py-8 border-1 bg-white ">
                {list.map((item,index)=>{
                    if (!item.content && item.link){
                        
                    
                        return (
                        <Link key={`${item.text}-${index}`} className="group/item px-6 xl:px-8  w-fit text-xs 2xl:text-sm text-forground hover:text-cmr-gray-500 transition-all ease-out duration-200 " href={item.link}>
                            {item.text}
                            <span className="block w-full opacity-0 group-hover/item:opacity-100 transition-all ease-out duration-200 h-[1px] bg-cmr-red-500"></span>
                        </Link>
                    )
                    }
                    return(
                        <div key={`${item.text}-${index}`} className="group/content ">
                            <h3 className="cursor-pointer w-fit group/content px-6 xl:px-8 text-xs 2xl:text-sm text-forground hover:text-cmr-gray-500 transition-all ease-out duration-200 ">
                                {item.text}
                                <FaAngleDown className="inline-block ml-1 group-hover/content:rotate-180 transition-all ease-out duration-200"/>
                            <span className="block opacity-0 group-hover/content:opacity-100 transition-all ease-out duration-200 h-[1px] bg-cmr-red-500"></span>
                            </h3>
                            <div className="absolute left-[100%] w-[400px]  opacity-0 z-10 hidden group-hover/content:opacity-100  group-hover/content:flex flex-col gap-[2rem] shadow-md p-6 xl:p-8 border-1 bg-white top-[calc(100%-70px)]">
                            {
                                item.content!.map((itm,ind)=>{
                                    return(
                                        <Link key={`${item.text}-${ind}`} className="group/item  w-fit text-xs 2xl:text-sm text-forground hover:text-cmr-gray-500 transition-all ease-out duration-200 " href={itm.link}>
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
                    
                
            </div>

            </div>

        </div>
    );
}