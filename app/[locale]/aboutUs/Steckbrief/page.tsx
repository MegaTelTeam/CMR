import NextLink from "next/link";

export default function Steckbrief() {
    return(
        <div className="container mx-auto grid grid-cols-3 lg:grid-cols-12 grid-rows-2 gap-8 px-8 md:px:4 lg:px:2">
            <h1 className="text-center col-span-3 lg:col-span-12 mt-5 mb-14 mb-">
                <span className="text-4xl font-extrabold bg-gradient-to-r from-black via-cmr-gray-500 to-cmr-red-500 bg-clip-text text-transparent">
                    Steckbrief
                </span>
            </h1>

            <section className="relative mx-auto w-[70%] col-span-3 lg:col-span-4 lg:w-full flex flex-col gap-2 px-4">
                <h2 className="text-xl font-semibold">Gründung</h2>
                <p>1993</p>
            </section>

            <section className="relative mx-auto w-[70%] col-span-3 lg:col-span-4 lg:w-full flex flex-col gap-2 px-4">
                <h2 className="text-xl font-semibold">Gesellschaftsform</h2>
                <p>Aktiengesellschaft (seit Januar 2000)</p>
            </section>

            <section className="relative mx-auto w-[70%] col-span-3 lg:col-span-4 lg:w-full flex flex-col gap-2 px-4">
                <h2 className="text-xl font-semibold">Personalien: Vorstand</h2>
                <p>Werner Dieing</p>
            </section>

            <section className="relative mx-auto w-[70%] col-span-3 lg:col-span-4 lg:w-full flex flex-col gap-2 px-4">
                <h2 className="text-xl font-semibold">Personalien: Vorsitzende des Aufsichtsrats</h2>
                <p>Claudia Dieing</p>
            </section>

            <section className="relative mx-auto w-[70%] col-span-3 lg:col-span-4 lg:w-full flex flex-col gap-2 px-4">
                <h2 className="text-xl font-semibold">Spezielle Ressourcen</h2>
                <h3 className="text-cmr-red-500">Telefonstudio</h3>
                <p>Bundesweit einsetzbarer Interviewer-Fulltimerstab</p>
            </section>
        </div>
    )
}