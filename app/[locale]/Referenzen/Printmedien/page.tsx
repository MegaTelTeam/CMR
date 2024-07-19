import images1 from "../../../../public/images/Printmedien/image (1).png"
import images2 from "../../../../public/images/Printmedien/image (2).png"
import images3 from "../../../../public/images/Printmedien/image (3).png"
import images4 from "../../../../public/images/Printmedien/image (4).png"
import images5 from "../../../../public/images/Printmedien/image (5).png"
import images6 from "../../../../public/images/Printmedien/image (6).png"
import images7 from "../../../../public/images/Printmedien/image (7).png"
import ImagesScroll from "@/components/imagesFade"

export default function Printmedien(){
    const images = [images1,images2,images3,images4,images5,images6,images7]

    return (
        <div className="container mx-auto min-h-[calc(100vh-124px)] flex flex-col items-center">
            <h1 className="text-center col-span-3 lg:col-span-12 mt-5 mb-14">
                <span className="text-4xl font-extrabold bg-gradient-to-r from-cmr-gray-500 to-cmr-red-500 bg-clip-text text-transparent">
                    Printmedien
                </span>
            </h1>
            <div className="w-full flex-grow relative">
                <ImagesScroll images={images} />
            </div>
        </div>
    )
}