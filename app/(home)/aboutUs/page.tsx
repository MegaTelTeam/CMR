import Title from "@/components/Title";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className=" mx-[12vw] content-center">
      <Title title="Über uns" />
      <div className="flex  mt-14  flex-col md:flex-row  justify-center gap-20">
        <div className="flex flex-col  ">
          <p className="text-[24px] font-normal text-center md:text-left ">
            “Den Menschen im Blick. Den Markt im Visier.”
          </p>

          <p className="text-center md:text-left text-[14px]">Nach diesem Grundsatz handeln wir seit 1993.</p>
        </div>
        <div className="flex flex-col  max-w-[531px] gap-7">
          <p className="text-center md:text-left">
            Der Mensch mit seinen Einstellungen, Erwartungen, Wünschen, aber
            auch Widersprüchen steht im Mittelpunkt unserer Befragungen. Nur wer
            den Markt kennt, wird die erhaltenen Daten entsprechend aufbereiten
            und interpretieren können.
          </p>
          <p className="text-center md:text-left">
            Im Bereich der Markt- und Meinungsforschung bieten wir Ihnen
            individuell die Leistungen an, die Sie benötigen. Angefangen bei der
            Problembeschreibung und der Erarbeitung eines Untersuchungsdesign,
            über die Durchführung bis zur Präsentation der Ergebnisse.
          </p>
          <p className="text-center md:text-left">
            In Kooperation mit unseren Kunden sind wir auch bei der Umsetzung
            der Ergebnisse begleitend tätig, zum Beispiel in Form von
            Geschäftsfeld- und Marketing-Beratung, Workshops oder
            Mitarbeiterschulungen.
          </p>
        </div>
      </div>
    </div>
  );
}
