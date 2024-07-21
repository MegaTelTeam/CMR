import images1 from "../../../../public/images/Horfunksender/image (1).png"
import images2 from "../../../../public/images/Horfunksender/image (2).png"
import images3 from "../../../../public/images/Horfunksender/image (3).png"
import images4 from "../../../../public/images/Horfunksender/image (4).png"
import images5 from "../../../../public/images/Horfunksender/image (5).png"
import images6 from "../../../../public/images/Horfunksender/image (6).png"
import images7 from "../../../../public/images/Horfunksender/image (7).png"
import images8 from "../../../../public/images/Horfunksender/image (8).png"
import images9 from "../../../../public/images/Horfunksender/image (9).png"
import images10 from "../../../../public/images/Horfunksender/image (10).png"
import images11 from "../../../../public/images/Horfunksender/image (11).png"
import images12 from "../../../../public/images/Horfunksender/image (12).png"
import images13 from "../../../../public/images/Horfunksender/image (13).png"
import images14 from "../../../../public/images/Horfunksender/image (14).png"
import images15 from "../../../../public/images/Horfunksender/image (15).png"
import images16 from "../../../../public/images/Horfunksender/image (16).png"
import images17 from "../../../../public/images/Horfunksender/image (17).png"
import images18 from "../../../../public/images/Horfunksender/image (18).png"
import images19 from "../../../../public/images/Horfunksender/image (19).png"
import images20 from "../../../../public/images/Horfunksender/image (20).png"
import images21 from "../../../../public/images/Horfunksender/image (21).png"
import images22 from "../../../../public/images/Horfunksender/image (22).png"
import images23 from "../../../../public/images/Horfunksender/image (23).png"
import images24 from "../../../../public/images/Horfunksender/image (24).png"
import ImagesScroll from "@/components/imagesFade"
import initTranslations  from "../../../i18n";

export default async function HorfunksenderPage({ params: { locale } }: { params: { locale: string } }){
    const images = [images1,images2,images3,images4,images5,images6,images7,images8,images9,images10,images11,images12,images13,images14,images15,images16,images17,images18,images19,images20,images21,images22,images23,images24]
    const { t } = await initTranslations(locale, ['Referenzen']);

    return (
        <div className="container mx-auto min-h-[calc(100vh-124px)] flex flex-col items-center">
            <h1 className="text-center col-span-3 lg:col-span-12 mt-5 mb-14">
                <span className="text-4xl font-extrabold bg-gradient-to-r from-cmr-gray-500 to-cmr-red-500 bg-clip-text text-transparent">
                    {t('Horfunksender')}
                </span>
            </h1>
            <div className="w-full flex-grow relative">
                <ImagesScroll images={images} />
            </div>
        </div>
    )
}