import statsIcon from "../../public/images/home/statsLogo.png"
import word from "../../public/images/home/word.png"
import puzel from "../../public/images/home/puzel.png"
import Image from "next/image"
import { FaArrowDownLong } from "react-icons/fa6";

import Link from "next/link";

export default async function Home() {

  return (
    <>
      <div className="container mx-auto grid grid-cols-3 lg:grid-cols-12 gap-16 px-8 md:px:4 lg:px:2 mb-32">
        <h1 className="text-center col-span-3 lg:col-span-12 mt-5 mb-14">
            <span className="text-4xl font-extrabold bg-gradient-to-r from-cmr-gray-500 to-cmr-red-500 bg-clip-text text-transparent">
              Für die richtige Entscheidung
            </span>
        </h1>

        <section className="flex flex-col gap-y-8 col-span-3 items-center lg:items-start lg:col-span-4 ">
          <Image src={word} alt="statsIcon" height={34}/>
          <p>
            Globalisierung und der Übergang zur Informationsgesellschaft gehen mit einem tiefgreifenden Wandel an gesellschaftlichen und ökonomischen Prozessen einher.
          </p>
        </section>
        
        <section className="flex flex-col gap-y-8 items-center lg:items-start col-span-3 lg:col-span-4">
          <Image src={statsIcon} alt="statsIcon" height={34}/>
          <p>
            Fundierte Informationen und deren Ableitungen gewinnen für den Erfolg von Unternehmen umso mehr an Bedeutung, je spezifischer eine Zielgruppe oder je gesättigter Märkte sind.
          </p>
        </section>

        <section className="flex flex-col gap-y-8 items-center lg:items-start col-span-3 lg:col-span-4">
          <Image src={puzel} alt="statsIcon" height={34}/>
          <p>
            {'Marktforschung kann die "richtigen" Fragen stellen und Informationen liefern, die die Grundlage für Ihre Entscheidungen sind.'}
          </p>
        </section>
      </div>
      <div className="w-full bg-[#EDEDF9] px-8 md:px:4 lg:px:2 mb-16">
        <div className="container mx-auto py-8 space-y-8">
          <section className="relative rounded-lg shadow-md overflow-hidden text-md hover:shadow-lg transition-all ease-in-out duration-200 lg:w-[70%] w-full">
            <div className="absolute bg-cmr-red-500 opacity-10 size-full"/>
            <div className="p-6 flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 items-end lg:items-center lg:justify-between">
              <div className="z-10">
                <h2 className="text-2xl font-semibold">Sind Sie ein Käseliebhaber?</h2>
                <p>Wir suchen Sie! Weitere Informationen sowie den Link zum Vorabinterview finden Sie hier.</p>
              </div>
              <Link href="#" className="z-10">
                <FaArrowDownLong size={22}/>
              </Link>
            </div>
          </section>

          <section className="relative rounded-lg shadow-md overflow-hidden text-md hover:shadow-lg transition-all ease-in-out duration-200 lg:w-[70%] w-full">
            <div className="absolute bg-cmr-gray-500 opacity-10 size-full"/>
            <div className="p-6 flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 items-end lg:items-center lg:justify-between">
              <div className="z-10">
                <h2 className="text-2xl font-semibold">Sind Sie ein Käseliebhaber?</h2>
                <p>Wir suchen Sie! Weitere Informationen sowie den Link zum Vorabinterview finden Sie hier.</p>
              </div>
              <Link href="#" className="z-10 w-fit">
                <FaArrowDownLong size={22}/>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
