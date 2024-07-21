import initTranslations from "@/app/i18n";

export default async function Methoden({ params: { locale } }: { params: { locale: string }}) {

    const { t } =await initTranslations(locale, ['Methoden','Themenschwerpunkte']);

    return (
        <div className='container mx-auto grid grid-cols-3 lg:grid-cols-12 px-[10%] md:px-10 gap-12'>
            <h1 className="text-center col-span-3 lg:col-span-12 mt-5 mb-14">
                <span className="text-4xl font-extrabold bg-gradient-to-r from-cmr-gray-500 to-cmr-red-500 bg-clip-text text-transparent">
                {t("Themenschwerpunkte:Themenschwerpunkte")}
                </span>
            </h1>

            <p className="col-span-3 lg:col-span-12">
                {t("Das Untersuchungsziel bestimmt die Wahl der Erhebungs-Methode.")}<br/>
                {t("Unser Leistungsspektrum umfasst die folgenden Methoden.")}
            </p>

            <div className='container mx-auto grid grid-cols-3 lg:grid-cols-12 col-span-3 lg:col-span-12 gap-6 px-5'>
                <ul className="col-span-3 lg:col-span-4 list-disc space-y-6">
                    <li>CAPI-Interviews</li>
                    <li>{t("Gruppendiskussion")}</li>
                    <li>{t("Schriftliche Befragung")}</li>
                </ul>
                <ul className="col-span-3 lg:col-span-4 list-disc space-y-6">
                    <li className="text-cmr-red-500">CATI-Interviews</li>
                    <li>Paper & pencil Interviews</li>
                    <li>{t("Tiefeninterviews")}</li>
                </ul>
                <ul className="col-span-3 lg:col-span-4 list-disc space-y-6">
                    <li>{t("Internetgestützte Telefonbefragungen")}</li>
                    <li>{t("Online Befragung")}</li>
                </ul>
            </div>
        </div>
    );
}