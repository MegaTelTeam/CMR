import { News, getAllNews } from "@/app/api/addNews.action";
import { useEffect, useState } from "react";

export default function useFetchNews(){
    const [news,setNews]=useState<News[] | null>([])
    const [error, setError] = useState(false)

    useEffect(()=>{
        getAllNews().then(news => {
            setNews(news)
            if(error){
                setError(false)
            }
        })
        .catch(error => {
            console.error(error)
            setError(true)
        }
    )},[])
    return {news,setNews,error}

}