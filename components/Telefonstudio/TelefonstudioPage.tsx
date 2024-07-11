import Image from 'next/image';

const TelefonstudioPage = () => {
  return (
    <div className="pt-[200px] container mx-auto p-[50px] flex flex-col min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gradient">Telefonstudio</h1>
      </div>
      <div className="pt-8 md:pt-12 text-center md:text-left text-[15px] leading-[30px] lg:pt-16">
        <div className="mb-[30px]">
          <p>
            Unser Telefonstudio verfügt über 60 CATI-Plätze. Es ist immer mit
            einer Studioleitung und Assistenz sowie sechs Supervisoren, die je 10
            CATI-Plätze beaufsichtigen, besetzt.
          </p>
        </div>
        <div>
          <p>
            Wir arbeiten mit dem Software-System “Voxco”, das sowohl komplizierte
            Stichproben-, als auch eine komplexe Fragebogensteuerung und
            Programmierung erlaubt. Um Synergien zu schaffen, haben wir einen
            Predictive Dialer mit einem auf uns abgestimmten Programm installiert.
            Sobald ein Interviewer ein Interview beendet hat, wird ihm vom System
            das nächste Gespräch durchgestellt. Langes Anwählen und Warten, ob
            eine Leitung frei ist, entfällt, da z.B. Anrufbeantworter oder
            Besetztzeichen vom Dialer erkannt werden. Die volle Konzentration des
            Interviewers gilt nur dem Gesprächspartner und nicht der Technik. Das
            System beinhaltet außer dem leistungsfähigen Anrufmanagement auch das
            Feld- und Quotenmanagement sowie die Reportingfunktionen. Ein
            zusätzliches Monitoring ermöglicht den Supervisoren jedes Interview zu
            verfolgen.
          </p>
        </div>
      </div>
      <div className="mt-auto flex justify-end p-4">
        <button className="rounded-md shadowButton flex justify-center items-center text-center bg-[#9415301A] h-[50px] w-[147px] gap-[10px] text-[20px] hover:border-[#941530] border-[2px] duration-300 transition-all hover:text-gray-400">
          <p>weiter</p>
          <Image src="/images/chevron-right.svg" alt="" width={9} height={10} />
        </button>
      </div>
    </div>
  );
};

export default TelefonstudioPage;
