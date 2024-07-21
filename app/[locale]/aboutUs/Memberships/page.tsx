import NextLink from "next/link";
import initTranslations  from "../../../i18n";
export default async function Memberships({ params: { locale } }: { params: { locale: string } }) {

    const { t } = await initTranslations(locale, ['Mitgliedschaften']);

    return(
        <div className="container mx-auto grid grid-cols-3 lg:grid-cols-12 grid-rows-2 gap-8 px-8 md:px:4 lg:px:2">
            <h1 className="text-center col-span-3 lg:col-span-12 mt-5 mb-14">
                <span className="text-4xl font-extrabold bg-gradient-to-r from-cmr-gray-500 to-cmr-red-500 bg-clip-text text-transparent">
                    {t("Mitgliedschaften")}
                </span>
            </h1>
            <section className="relative col-span-3 lg:col-span-6 rounded-lg shadow-md w-full overflow-hidden text-md hover:shadow-lg transition-all ease-in-out duration-200">
                <div className="absolute bg-cmr-red-500 opacity-10 size-full -z-50"/>
                <p className="p-4 xl:text-lg lg-text-md">
                    <span>{t('Unser Institut ist Mitglied im ')}</span>
                    <NextLink href="#" className="text-cmr-gray-500 hover:underline hover:text-cmr-red-500 transition-all ease-in-out duration-200">{t("Arbeitskreis Deutscher Markt-und Sozialforschungsinstitute e.V.")}</NextLink>
                    <span>{t(" (ADM) und der Arbeitsgemeinschaft ADM-Telefonstichprobe.")}</span>
                </p>
            </section>
            <section className="relative col-span-3 lg:col-span-6 rounded-lg shadow-md w-full overflow-hidden hover:shadow-lg transition-all ease-in-out duration-200">
                <div className="absolute bg-cmr-red-500 opacity-10 size-full -z-50"/>
                <p className="p-4 xl:text-lg lg-text-md">
                    <span>{t("Im ")}</span>
                    <NextLink href="#" className="text-cmr-gray-500 hover:underline hover:text-cmr-red-500 transition-all ease-in-out duration-200">{t("Berufsverband Deutscher Markt- und Sozialforscher e.V.")}</NextLink>
                    <span>{t(" besteht eine persönliche Mitgliedschaft.")}</span>
                </p>
            </section>
        </div>
    )
}