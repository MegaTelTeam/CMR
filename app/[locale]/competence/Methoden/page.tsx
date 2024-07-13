export default function Methoden(){
    return (
        <div className='container mx-auto grid grid-cols-3 lg:grid-cols-12 px-[10%] md:px-10 gap-12'>
            <h1 className="text-center col-span-3 lg:col-span-12 mt-5 mb-14">
                <span className="text-4xl font-extrabold bg-gradient-to-r from-black via-cmr-gray-500 to-cmr-red-500 bg-clip-text text-transparent">
                Themenschwerpunkte
                </span>
            </h1>

            <p className="col-span-3 lg:col-span-12">
                Das Untersuchungsziel bestimmt die Wahl der Erhebungs-Methode.<br/>
                Unser Leistungsspektrum umfasst die folgenden Methoden.
            </p>

            <div className='container mx-auto grid grid-cols-3 lg:grid-cols-12 col-span-3 lg:col-span-12 gap-6 px-5'>
                <ul className="col-span-3 lg:col-span-4 list-disc space-y-6">
                    <li>CAPI-Interviews</li>
                    <li>Gruppendiskussion</li>
                    <li>Schriftliche Befragung</li>
                </ul>
                <ul className="col-span-3 lg:col-span-4 list-disc space-y-6">
                    <li className="text-cmr-red-500">CATI-Interviews</li>
                    <li>Paper & pencil Interviews</li>
                    <li>Tiefeninterviews</li>
                </ul>
                <ul className="col-span-3 lg:col-span-4 list-disc space-y-6">
                    <li>Internetgestützte Telefonbefragungen</li>
                    <li>Online Befragung</li>
                </ul>
            </div>
        </div>
    );
}