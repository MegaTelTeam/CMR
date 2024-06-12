import CreateNews from "@/components/dashboard/news/createNews";
import ShowNews from "@/components/dashboard/news/showNews";
import FileUploader from "@/lib/uppyInstance";



export default function News() {
    
    
    return (
        <div className="w-[50%] h-full p-4 flex flex-col overflow-y-scroll">
            {/* <CreateNews/>
            <ShowNews/> */}
            <FileUploader/>
        </div>
    )
}