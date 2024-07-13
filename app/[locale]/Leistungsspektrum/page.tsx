export default function Leistungsspektrum() {
    return(
        <div className='container mx-auto grid grid-cols-3 lg:grid-cols-12 px-[10%] md:px-10'>
            <h1 className="text-center col-span-3 lg:col-span-12 mt-5 mb-14">
                <span className="text-4xl font-extrabold bg-gradient-to-r from-black via-cmr-gray-500 to-cmr-red-500 bg-clip-text text-transparent">
                Leistungsspektrum
                </span>
            </h1>

            <p className="col-span-3 lg:col-span-12 mt-5 mb-14">
                {"Bei internationalen Studien greifen wir auf ein Netzwerk von Instituten oder Feldorganisationen der jeweiligen Länder zu."}
            </p>

            <div className='container mx-auto grid grid-cols-3 lg:grid-cols-12 col-span-3 lg:col-span-12 mt-5 mb-14 gap-8 px-5'>
                <ul className="col-span-3 lg:col-span-6 list-disc space-y-8">
                    <li>Konzeption von Untersuchungen</li>
                    <li>Erarbeitung von Gesprächsleitfaden bzw. Fragebogen</li>
                    <li>Programmierung (z.B. für CATI- oder CAPI-Interviews)</li>
                    <li>Durchführung der Interviews</li>
                </ul>
                <ul className="col-span-3 lg:col-span-6 list-disc space-y-8">
                    <li>Auswertung und Tabellierung</li>
                    <li>Datenanalyse</li>
                    <li>Aufbereitung und Interpretation der Ergebnisse als Bericht und / oder Summary inkl. Umsetzungsempfehlungen</li>
                    <li>Präsentation der Ergebnisse beim Auftraggeber</li>
                </ul>
            </div>

            <p className="col-span-3 lg:col-span-12 mt-5 mb-14">
                {"Unser Leistungsspektrum umfasst die folgenden Bereiche, die – je nach Anforderungsprofil – auch modular in Anspruch genommen werden können:"}
            </p>
        </div>
    )
}