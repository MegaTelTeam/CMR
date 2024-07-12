"use client"
import { Cross as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import {motion} from "framer-motion"
import { menuItems } from "./menuItems";
import Link from 'next/link';
import MenuToolTip from './menuToolTip';


export default function Humburger() {

    const [isOpen, setOpen] = useState(false)
    const onToggle = () => setOpen(!isOpen)
    

    return ( 
        <div className='lg:hidden z-10 mr-2'>
            <Hamburger color="black" direction='right' size={25} easing='ease-out' duration={0.2} rounded={true} toggled={isOpen} toggle={setOpen} onToggle={onToggle} />
            <motion.div 
            variants={{hidden:{opacity:0 , x:"-100%"},visible:{opacity:1 , x:0 }}} 
            transition={{duration:0.2 , ease:"easeOut"}}  
            animate={isOpen ? "visible" : "hidden"} 
            initial="hidden" 
            className="absolute top-[124px] left-0 w-full h-fit min-h-[calc(100dvh-124px)] bg-cmr-gray-900 z-10 text-xs pl-[85px] py-[45px] overflow-y-hidden ">
                <div className='flex flex-col w-fit gap-[17px]'>
                {
                    menuItems.map((item,index)=>{
                        if(!item.list) return (
                            <Link key={`${item.text}-${index}`} className="group text-xs 2xl:text-sm text-forground hover:text-cmr-gray-500 transition-all ease-out duration-200 flex-shrink-0 py-[8px]" href={item.link ? item.link : ""}  >
                              {item.text}
                            </Link>
                          )
                          return (
                            item.list && <MenuToolTip key={`${item.text}-${index}`} list={item.list} text={item.text} link={item.link} setOpen={setOpen}  />
                          )
                    })
                }
                </div>
            </motion.div>
        </div>
    )
}