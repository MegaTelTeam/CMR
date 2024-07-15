import Title from "@/components/Title";
import Image from "next/image";
const page = () => {
  return (
    <div className="mx-[12vw]">
      <Title title="Instrumente" />
      <div className=" text-center md:text-left my-12 ">
        <p>
          Neben individuell erstellten Untersuchungskonzepten haben wir eigene
          Instrumente für eine Reihe von Fragestellungen entwickelt.
        </p>
        <p>
          Wenn Sie an weiteren Informationen zu den einzelnen Instrumenten
          interessiert sind, nehmen Sie bitte über info@cmr.de mit uns Kontakt
          auf.
        </p>
      </div>
      <div className="flex justify-normal my-12 gap-10 flex-col lg:flex-row">
        <div className=" flex flex-col gap-9 lg:w-1/2">
          <p className="font-medium text-xl">© C.M.R. – Bürger-Barometer</p>
          <p className="text-base font-normal ">
            Sie möchten wissen, wie zufrieden die Einwohner einer Gemeinde/einer
            Region sind, welche drängenden Probleme für die Einwohner und nicht
            nur für die politischen Verantwortlichen auf der Agenda stehen, wie
            attraktiv die Gemeinde/Region hinsichtlich ihrer Lebensqualität und
            Faktoren wie Wohnen, Arbeiten, Bildung/Erziehung, Verkehr und/oder
            Umwelt eingeschätzt wird.
          </p>
          <p>
            Ist die Gemeinde/die Region auf den demographischen Wandel
            vorbereitet, welche Konzepte gibt es und fühlen sich die Bürger in
            die Überlegungen einbezogen sowie der Gemeinde/Region verbunden.
          </p>
          <p>Fragen wie diese beantwortet unser Bürger-Barometer.</p>
          <p className="font-medium text-xl">© C.M.R. – Market Structure</p>

          <p>
            Mit Market Structure erfahren Sie, wie Ihr Kunde die (Marken-) Welt
            sieht. Welche Marken (eine Branche) für ihn gleich oder ähnlich
            sind, welche sich voneinander unterscheiden und über welche
            Assoziationen die verschiedenen Marken-Familien differenziert
            werden.
          </p>
          <p>
            Außerdem weist Market Structure das Markt-Potenzial für Marken bzw.<br/>
            Marken-Familien aus.
          </p>

          <p className="font-medium text-xl">© C.M.R. – Problem Detecting System</p>
          <p>

          Dieses Instrument setzt bei der Erfahrungs- und Verhaltensebene von Konsumenten an.

          </p>
          <p>

          Eruiert wird nicht die Idealvorstellung eines Produkts, sondern es werden Probleme 
          beim bisherigen Umgang mit Produkten oder Dienstleistungen aufgespürt,
           für die Lösungsansätze erarbeitet werden.

          </p>
          <p className="font-medium text-xl">© C.M.R. – Perceptual Study Hörfunk</p>
          <p>
          Mit einer Perceptual Study wird das Musik- und das Programm-Image ermittelt.
           Eine neue Methodik dient speziell zur besseren Erfassung des Musik-Images.
          </p>
          <p>
          Die Auswertung beinhaltet die Darstellung des gegenwärtigen Hörer-Potenzials
           und potenzielle Entwicklungsmöglichkeiten.
          </p>
          <p className="font-medium text-xl">© C.M.R. – Audiometer*Commercial </p>
          <p>
          Für Werbewirkungs-Untersuchungen im Hörfunk-Bereich wurde Audiometer entwickelt. Sein Einsatz erfolgt zur Evaluierung sowie als Pre- und Posttest von Radio-Spots.
          </p>
          <p>
          Charakteristisch ist, dass der zu testende Spot nicht isoliert von seinem Medium bewertet wird.

          </p>
          <p>
          Hauptergebnisse sind die Durchsetzungsfähigkeit eines Spots und seine emotionale Stimulanz.

          </p>
        </div>
        <div className=" flex flex-col gap-9 lg:w-1/2">
        <p className="font-medium text-xl">© C.M.R. – Emotions- und Motiv-Typologie</p>
        <p>Die Emotions- und Motiv-Typologie von C.M.R. weist 7 verschiedene Typen aus, die auf der Gefühlsebene und den Wertevorstellungen von Konsumenten ansetzt.
        </p>
        <p>Mit Hilfe der Typologie kann ermittelt werden, welches emotionale Image Marken besitzen bzw. mit welchen Emotionen und Assoziationen die eigene Zielgruppe, aber auch potenzielle Kunden angesprochen werden können.
        </p>
        <p>Die Methode ist universell einsetzbar, unabhängig von der Art der Interviewmethode und kann problemlos in jede Befragung integriert werden.
        </p>
        <p>Eine Beschreibung der C.M.R. Emotions- und Motiv-Typologie finden Sie hier: </p>
        <div className="max-w-[450px] max-h-[70px] bg-[#9415301A]  w-full h-[70px] flex items-center justify-center shadow-md py-2.5 px-8 gap-[10px] ">
        <p  className="font-medium ">C.M.R. Emotions- und Motiv-Typologie.PDF</p>
         <Image src="/images/pdf.svg" width={24} height={24} alt="pdf"/> 
         <Image src="/images/right_arrow.svg" width={8} height={11} alt="download"/>
        </div>

        <p className="font-medium text-xl">© C.M.R. – Mood & Emotion        </p>
        <p>Mood & Emotion basiert auf der emotionalen Beurteilung von Marken,
             zeigt bei Einbeziehung von Werbeträgern in die Untersuchung,
              inwieweit diese das Markenimage bestätigen oder verändern.</p>
        <p className="font-medium text-xl">© C.M.R. – RegioTrack</p>
        <p>RegioTrack ermöglicht durch die Verknüpfung unterschiedlicher Daten hochwertige Standort-Analysen.
        </p>
        <p>RegioTrack ist geeignet für die Evaluierung bestehender Standorte, für Planungsprozesse (Neueröffnungen) oder Verlagerung von bisherigen Filialen sowie zur Beurteilung eines Vertriebsnetzes.
        </p>
        <p>
        Haupt-Einsatzgebiete für RegioTrack sind Handelseinrichtungen, Banken / Versicherungen, Transport / Verkehr sowie der Bereich kommunale Entwicklung.
        </p>
        <p className="font-medium text-xl">© C.M.R. – Perceptual Study Print        </p>
        <p>Eine Perceptual Study Print zeigt das Image einer Zeitung oder Zeitschrift bei Lesern, aber auch Nicht-Lesern.        </p>
        <p>Die Auswertung beinhaltet die Darstellung des aktuellen Leserpotenzials,
             seine Entwicklungstendenz sowie die Ableitung von konkreten Handlungsempfehlungen basierend auf einer Stärken-/Schwächen-Analyse.</p>
        <p className="font-medium text-xl">© C.M.R. – Print Rating        </p>
        <p>Für alle Print Medien ist Print Rating das Monitoring Instrument, um über einen definierten Zeitraum die Nutzungsintensität der einzelnen Beiträge durch die Leser zu ermitteln.        </p>
        <p>Ein Zeitungs- oder Zeitschriften-Konzept kann am Nutzungsverhalten von Lesern überprüft und weiterentwickelt werden.</p>

        
        
        </div>
      </div>
    </div>
  );
};

export default page;
