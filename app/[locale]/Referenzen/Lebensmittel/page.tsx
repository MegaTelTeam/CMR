import images1 from "../../../../public/images/Lebensmittel/image (1).png"
import images2 from "../../../../public/images/Lebensmittel/image (2).png"
import images3 from "../../../../public/images/Lebensmittel/image (3).png"
import images4 from "../../../../public/images/Lebensmittel/image (4).png"
import images5 from "../../../../public/images/Lebensmittel/image (5).png"
import ImagesScroll from "@/components/imagesFade"
import initTranslations  from "../../../i18n";

export default async function Lebensmittel({ params: { locale } }: { params: { locale: string } }){
    const { t } = await initTranslations(locale, ['Referenzen']);
    const images = [images1,images2,images3,images4,images5]

    return (
        <div className="container mx-auto min-h-[calc(100vh-124px)] flex flex-col items-center">
            <h1 className="text-center col-span-3 lg:col-span-12 mt-5 mb-14">
                <span className="text-4xl font-extrabold bg-gradient-to-r from-cmr-gray-500 to-cmr-red-500 bg-clip-text text-transparent">
                    {t('Lebensmittel')}
                </span>
            </h1>
            <div className="w-full flex-grow relative">
                <ImagesScroll images={images} />
            </div>
        </div>
    )
}