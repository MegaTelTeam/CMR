"use client"
import { cn } from "@/lib/utils"
import { Button } from "@nextui-org/react"
import { motion } from "framer-motion"
import React, { useState, createContext, useContext } from "react"

const PageSwitcherContext = createContext<{currentPage:number,setPage:React.Dispatch<React.SetStateAction<number>>}>({currentPage:0,setPage:()=>{}})

export function usePageSwitcher() {
    const context = useContext(PageSwitcherContext)
    if(!context) {
        throw new Error("usePageSwitcher must be used within a PageSwitcherProvider")
    }
    return context
}

export default function PageSwitcher({children, className}:{children:React.ReactNode, className?:string}) {
    const [page, setPage] = useState(0)
    
    return(
        <PageSwitcherContext.Provider value={{currentPage:page, setPage}}>
            <div className={cn("w-full flex overflow-hidden min-h-[calc(90vh-124px-200px)]", className)}>
                {children}
            </div>
            <motion.div 
                className="w-full flex justify-center"
                variants={{
                    left:{
                        x:"-50%"
                    },
                    right:{
                        x:"50%"
                    }
                }}
                initial="left"
                animate={page===0 ? "right" : "left"}
                transition={{duration:0.3, ease:"easeInOut"}}
            >
                <Button
                    variant="light"
                    onClick={()=>{
                        setPage(page===0 ? 1 : 0)
                    }}
                    size="lg"
                    radius="sm"
                    color="default"
                    className={cn("w-[120px] font-semibold hover:text-cmr-gray-500 hover:border-cmr-red-500 hover:border-1 hover:rounded-sm text-black trasition-all ease-in-out duration-300", page===0 ? "translate-x-[-50%]" : "translate-x-[50%]")}
                >
                    <div className="absolute bg-cmr-red-500 opacity-10 size-full -z-50"/>
                    <span className={cn("absolute trasition-all ease-in-out duration-300",page===0 ? "opacity-100" : "opacity-0")}>Weiter</span>
                    <span className={cn("absolute trasition-all ease-in-out duration-300",page===1 ? "opacity-100" : "opacity-0")}>Zurück</span>
                </Button>
            </motion.div>
        </PageSwitcherContext.Provider>
    )
}