import initTranslations from "@/app/i18n";

export default async function Kompetenz({ params: { locale } }: { params: { locale: string } }) {

    const { t } = await initTranslations(locale, ['Leistungsspektrum', 'navbar']);
    
    return(
        <div className='container mx-auto grid grid-cols-3 lg:grid-cols-12 px-[10%] md:px-10 gap-12'>
            <h1 className="text-center col-span-3 lg:col-span-12 mt-5 mb-14">
                <span className="text-4xl font-extrabold bg-gradient-to-r from-black via-cmr-gray-500 to-cmr-red-500 bg-clip-text text-transparent">
                {t("Kompetenz")}
                </span>
            </h1>

            <p className="col-span-3 lg:col-span-12">
                {t("Bei internationalen Studien greifen wir auf ein Netzwerk von Instituten oder Feldorganisationen der jeweiligen Länder zu.")}
            </p>

            <div className='container mx-auto grid grid-cols-3 lg:grid-cols-12 col-span-3 lg:col-span-12 gap-6 px-5'>
                <ul className="col-span-3 lg:col-span-6 list-disc space-y-6">
                    <li>{t("Konzeption von Untersuchungen")}</li>
                    <li>{t("Erarbeitung von Gesprächsleitfaden bzw. Fragebogen")}</li>
                    <li>{t("Programmierung (z.B. für CATI- oder CAPI-Interviews)")}</li>
                    <li>{t("Durchführung der Interviews")}</li>
                </ul>
                <ul className="col-span-3 lg:col-span-6 list-disc space-y-6">
                    <li>{t("Auswertung und Tabellierung")}</li>
                    <li>{t("Datenanalyse")}</li>
                    <li>{t("Aufbereitung und Interpretation der Ergebnisse als Bericht und / oder Summary inkl. Umsetzungsempfehlungen")}</li>
                    <li>{t("Präsentation der Ergebnisse beim Auftraggeber")}</li>
                </ul>
            </div>

            <p className="col-span-3 lg:col-span-12">
                {t("p1")}
            </p>
        </div>
    )
}