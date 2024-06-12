"use client"
import {  addNews } from "@/app/api/addNews.action"
import { Button, Input, Textarea } from "@nextui-org/react"
import { useState } from "react"

export default function CreateNews() {
    
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const [attachement,setAttachement]=useState <string[]>([])

    const AddNews=()=>{
        if(title==="" || content===""){
            console.log("missing title or content")
            return
        }
        const news = {
            title,
            content,
            attachement
        }
        addNews(news)
        setTitle("")
        setContent("")
        setAttachement([])
    }
    
    return (
        <div className="w-[50%]  p-4">
            <Input label="title" className="mb-4" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <Textarea label="content" className="mb-4" value={content} onChange={(e)=>setContent(e.target.value)}/>
            <Input label="attachement" className="mb-4" onChange={(e)=>setAttachement((prev:string[])=>[...prev,e.target.value])}/>
            <Button className="mt-4" onClick={AddNews}>Create</Button>
        </div>
    )
}