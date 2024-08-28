import initTranslations from "@/app/i18n";
import PageContainer from "@/components/Carousel/pageContainer";
import PageSwitcher from "@/components/Carousel/pageSwitcher";

export default async function Telefonstudio({ params: { locale } }: { params: { locale: string } }) {
    const { t } = await initTranslations(locale, ['Telefonstudio']);

    return (
        <div className='container mx-auto px-[10%] md:px-10 space-y-24'>
            <h1 className="text-center mt-5 mb-14">
                <span className="text-4xl font-extrabold bg-gradient-to-r from-cmr-gray-500 to-cmr-red-500 bg-clip-text text-transparent">
                    {t("Telefonstudio")}
                </span>
            </h1>

            <div className="container mx-autogap-6 space-y-6 px-5 overflow-hidden">
                <PageSwitcher>
                    <PageContainer pageNumber={0}>
                        <div className="w-full space-y-2">
                            <p className="col-span-3 lg:col-span-12">
                                {t("Unser Telefonstudio verfügt über 60 CATI-Plätze. Es ist immer mit einer Studioleitung und Assistenz sowie sechs Supervisoren, die je 10 CATI-Plätze beaufsichtigen, besetzt.")}
                            </p>

                            <p className="col-span-3 lg:col-span-12">
                                {t("Wir arbeiten mit dem Software-System “Voxco”, das sowohl komplizierte Stichproben-, als auch eine komplexe Fragebogensteuerung und Programmierung erlaubt. Um Synergien zu schaffen, haben wir einen Predictive Dialer mit einem auf uns abgestimmten Programm installiert. Sobald ein Interviewer ein Interview beendet hat, wird ihm vom System das nächste Gespräch durchgestellt. Langes Anwählen und Warten, ob eine Leitung frei ist, entfällt, da z.B. Anrufbeantworter oder Besetztzeichen vom Dialer erkannt werden. Die volle Konzentration des Interviewers gilt nur dem Gesprächspartner und nicht der Technik. Das System beinhaltet außer dem leistungsfähigen Anrufmanagement auch das Feld- und Quotenmanagement sowie die Reportingfunktionen. Ein zusätzliches Monitoring ermöglicht den Supervisoren jedes Interview zu verfolgen.")}
                            </p>
                        </div>
                    </PageContainer>
                    <PageContainer pageNumber={1}>
                        <div className="w-full space-y-2">
                            <p className="col-span-3 lg:col-span-12">
                                {t("Unsere Interviewer werden permanent inhaltlich und technisch geschult. Vor jeder Studie findet zusätzlich eine Fragebogeneinweisung durch die Studioleitung statt, um auf Besonderheiten hinzuweisen und die Interviewer für relevante Sachverhalte zu sensibilisieren.")}
                            </p>

                            <p className="col-span-3 lg:col-span-12">
                                {t("p1")}
                            </p>
                        </div>
                    </PageContainer>
                </PageSwitcher>
            </div>
        </div>
    );
}