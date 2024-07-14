import initTranslations from "@/app/i18n";

export default async function Themenschwerpunkte({ params: { locale } }: { params: { locale: string } }) {

    const { t } = await initTranslations(locale, ["Themenschwerpunkte"]);
    return (
        <div className='container mx-auto grid grid-cols-3 lg:grid-cols-12 px-[10%] md:px-10 gap-12'>
            <h1 className="text-center col-span-3 lg:col-span-12 mt-5 mb-14">
                <span className="text-4xl font-extrabold bg-gradient-to-r from-black via-cmr-gray-500 to-cmr-red-500 bg-clip-text text-transparent">
                {t("Themenschwerpunkte")}
                </span>
            </h1>

            <p className="col-span-3 lg:col-span-12">
                {t("Wir führen Untersuchungen zu den folgenden Themen sowohl für den ")}<span className="font-bold">b-to-c</span>{t(" als auch den ")}<span className="font-bold">{t("b-to-b-Bereich")}</span>{t(" durch:")}
            </p>

            <div className='container mx-auto grid grid-cols-3 lg:grid-cols-12 col-span-3 lg:col-span-12 gap-6 px-5'>
                <ul className="col-span-3 lg:col-span-4 list-disc space-y-6">
                    <li>{t("Ad-hoc Marketingforschung")}</li>
                    <li>{t("Konzepttest")}</li>
                    <li>{t("Mediaforschung (Hörfunk, Print)")}</li>
                    <li>{t("Produkt- und Packungstest")}</li>
                    <li>{t("Wahlanalysen")}</li>
                </ul>
                <ul className="col-span-3 lg:col-span-4 list-disc space-y-6">
                    <li>Desk Research</li>
                    <li>{t("Kundenzufriedenheit")}</li>
                    <li>{t("Pre- und Posttest")}</li>
                    <li>{t("Mystery Shopping")}</li>
                    <li>{t("Werbeforschung / Werbewirkungskontrolle")}</li>
                </ul>
                <ul className="col-span-3 lg:col-span-4 list-disc space-y-6">
                    <li>Image</li>
                    <li>{t("Markt- und Potenzialanalyse")}</li>
                    <li>{t("PoS-Befragung")}</li>
                    <li>{t("Standortanalyse")}</li>
                </ul>
            </div>
        </div>
    );
}