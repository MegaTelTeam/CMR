export default function Themenschwerpunkte() {
    return (
        <div className='container mx-auto grid grid-cols-3 lg:grid-cols-12 px-[10%] md:px-10 gap-12'>
            <h1 className="text-center col-span-3 lg:col-span-12 mt-5 mb-14">
                <span className="text-4xl font-extrabold bg-gradient-to-r from-black via-cmr-gray-500 to-cmr-red-500 bg-clip-text text-transparent">
                Themenschwerpunkte
                </span>
            </h1>

            <p className="col-span-3 lg:col-span-12">
                Wir führen Untersuchungen zu den folgenden Themen sowohl für den <span className="font-bold">b-to-c</span> als auch den <span className="font-bold">b-to-b-Bereich</span> durch:
            </p>

            <div className='container mx-auto grid grid-cols-3 lg:grid-cols-12 col-span-3 lg:col-span-12 gap-6 px-5'>
                <ul className="col-span-3 lg:col-span-4 list-disc space-y-6">
                    <li>Ad-hoc Marketingforschung</li>
                    <li>Konzepttest</li>
                    <li>Mediaforschung (Hörfunk, Print)</li>
                    <li>Produkt- und Packungstest</li>
                    <li>Wahlanalysen</li>
                </ul>
                <ul className="col-span-3 lg:col-span-4 list-disc space-y-6">
                    <li>Desk Research</li>
                    <li>Kundenzufriedenheit</li>
                    <li>Pre- und Posttest</li>
                    <li>Mystery Shopping</li>
                    <li>Werbeforschung / Werbewirkungskontrolle</li>
                </ul>
                <ul className="col-span-3 lg:col-span-4 list-disc space-y-6">
                    <li>Image</li>
                    <li>Markt- und Potenzialanalyse</li>
                    <li>PoS-Befragung</li>
                    <li>Standortanalyse</li>
                </ul>
            </div>
        </div>
    );
}