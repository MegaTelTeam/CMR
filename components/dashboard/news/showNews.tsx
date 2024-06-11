"use client"
import useFetchNews from "@/hooks/useFetchNews";

export default function ShowNews() {
    
    const {news,error}=useFetchNews()

    return (
        <div className="w-[50%] ">
            <h1 className="text-red-500">News</h1>
            {!error && news?.map((item, index) => (<div key={index} className="flex flex-col">
                <div  className="mb-2 text-blue-500">{item.title}</div>
                <div >{item.content}</div>
                </div>
            ))}
        </div>
    )
}