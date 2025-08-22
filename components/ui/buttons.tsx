"use client";

import { cn } from "@/lib/utils";


export function Button({children, className, ...props}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return(
        <button {...props} className={cn("py-3 px-5 text-cmr-red-400 border-cmr-red-400 border-1 rounded-[10px] text-sm hover:bg-cmr-red-400 hover:text-white transition-all duration-200", className)}>
            {children}
        </button>
    )
}