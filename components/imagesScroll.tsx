"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

export default function ImagesScroll({images}:{
    images: StaticImageData[]
}){
    const [currentVisible, setCurrentVisible] = useState(0)
    const duration = 0.5

    useEffect(()=>{
        const interval = setInterval(() => {
            setCurrentVisible(prev=>(prev + 1) % images.length)
        }, duration * 1000 * 2)

        return () => clearInterval(interval)
    },[images])

    return (
        <>
            {
                images.map((image,index) => (
                    <motion.div key={index} className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-full w-[250px] h-[200px] flex justify-center items-center"
                        variants={{
                            hidden:{
                                opacity:0
                            },
                            visible:{
                                opacity:1
                            }
                        }}
                        initial="hidden"
                        animate={currentVisible === index ? "visible" : "hidden"}
                        transition={{duration:duration, ease:"easeInOut"}}
                    >
                        <Image src={image} alt="" width={122}/>
                    </motion.div>
                ))
            }
        </>
    )
}