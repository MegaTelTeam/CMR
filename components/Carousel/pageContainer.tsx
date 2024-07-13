"use client"
import { cn } from "@/lib/utils"
import {motion} from "framer-motion"
import { usePageSwitcher } from "./pageSwitcher"
import { Button } from "@nextui-org/react"

export default function PageContainer({children, className, pageNumber}:{children:React.ReactNode, className?:string, pageNumber:number}) {
    const {currentPage, setPage} = usePageSwitcher()
    
    return(
        <motion.div variants={{
            hidden:{
                opacity:0,
                x:pageNumber === 0 ? "-100%" : "100%",
                scale:0.9
            },
            visible:{
                opacity:1,
                x:pageNumber === 0 ? 0 : "-100%",
                scale:1
            }
        }} 
        initial="hidden"
        animate={currentPage === pageNumber ? "visible" : "hidden"} 
        transition={{duration:0.3, ease:"easeInOut"}}
        className={cn("w-full flex-shrink-0", className)}
        >
            {children}
        </motion.div>
    )
}

