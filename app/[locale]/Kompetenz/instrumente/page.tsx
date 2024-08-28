import Costum_Button from "@/components/Costum_Button";
import Title from "@/components/Title";
import initTranslations from "@/app/i18n";

const page = async ({ params: { locale } }: { params: { locale: string } }) => {

  const { t } = await initTranslations(locale, ['Instrumente']);
  
  return (
    <div className="mx-[12vw]">
      <Title title={t("Instrumente")} />
      <div className=" text-center md:text-left my-12 ">
        <p>
          {t("Neben individuell erstellten Untersuchungskonzepten haben wir eigene")}
          {t("Instrumente für eine Reihe von Fragestellungen entwickelt.")}
        </p>
        <p>
          {t("Wenn Sie an weiteren Informationen zu den einzelnen Instrumenten")}
          {("interessiert sind, nehmen Sie bitte über info@cmr.de")}{(` mit uns Kontakt
          auf.`)}
        </p>
      </div>
      <div className="flex justify-normal my-12 gap-10 flex-col lg:flex-row">
        <div className=" flex flex-col gap-9 lg:w-1/2">
          <p className="font-medium text-xl">© C.M.R. – {t("Bürger-Barometer")}</p>
          <p className="text-base font-normal ">
            {t(`Sie möchten wissen, wie zufrieden die Einwohner einer Gemeinde/einer Region sind, welche drängenden Probleme für die Einwohner und nicht nur für die politischen Verantwortlichen auf der Agenda stehen, wieattraktiv die Gemeinde/Region hinsichtlich ihrer Lebensqualität und Faktoren wie Wohnen, Arbeiten, Bildung/Erziehung, Verkehr und/oder Umwelt eingeschätzt wird.`)}
          </p>
          <p>
            {t("Ist die Gemeinde/die Region auf den demographischen Wandelvorbereitet, welche Konzepte gibt es und fühlen sich die Bürger in die Überlegungen einbezogen sowie der Gemeinde/Region verbunden.")}
          </p>
          <p>{t("Fragen wie diese beantwortet unser Bürger-Barometer.")}</p>
          <p className="font-medium text-xl">© C.M.R. – Market Structure</p>

          <p>
            {t("Mit Market Structure erfahren Sie, wie Ihr Kunde die (Marken-) Welt sieht. Welche Marken (eine Branche) für ihn gleich oder ähnlich sind, welche sich voneinander unterscheiden und über welche Assoziationen die verschiedenen Marken-Familien differenziert werden.")}
          </p>
          <p>
            {t("Außerdem weist Market Structure das Markt-Potenzial für Marken bzw.")}
            <br />
            {t("Marken-Familien aus.")}
          </p>

          <p className="font-medium text-xl">
            © C.M.R. – Problem Detecting System
          </p>
          <p>
            {t("Dieses Instrument setzt bei der Erfahrungs- und Verhaltensebene von Konsumenten an.")}
          </p>
          <p>
            {t("Eruiert wird nicht die Idealvorstellung eines Produkts, sondern es werden Probleme beim bisherigen Umgang mit Produkten oder Dienstleistungen aufgespürt, für die Lösungsansätze erarbeitet werden.")}
          </p>
          <p className="font-medium text-xl">
            © C.M.R. – {t("Perceptual Study Hörfunk")}
          </p>
          <p>
            {t("Mit einer Perceptual Study wird das Musik- und das Programm-Image ermittelt. Eine neue Methodik dient speziell zur besseren Erfassung des Musik-Images.")}
          </p>
          <p>
            {t("Die Auswertung beinhaltet die Darstellung des gegenwärtigen Hörer-Potenzials und potenzielle Entwicklungsmöglichkeiten.")}
          </p>
          <p className="font-medium text-xl">
            © C.M.R. – Audiometer*Commercial{" "}
          </p>
          <p>
            {t("Für Werbewirkungs-Untersuchungen im Hörfunk-Bereich wurde Audiometer entwickelt. Sein Einsatz erfolgt zur Evaluierung sowie als Pre- und Posttest von Radio-Spots.")}
          </p>
          <p>
            {t("Charakteristisch ist, dass der zu testende Spot nicht isoliert von seinem Medium bewertet wird.")}
          </p>
          <p>
            {t("Hauptergebnisse sind die Durchsetzungsfähigkeit eines Spots und seine emotionale Stimulanz.")}
          </p>
        </div>
        <div className=" flex flex-col gap-9 lg:w-1/2">
          <p className="font-medium text-xl">
            © C.M.R. – {t("Emotions- und Motiv-Typologie")}
          </p>
          <p>
            {t("Die Emotions- und Motiv-Typologie von C.M.R. weist 7 verschiedene Typen aus, die auf der Gefühlsebene und den Wertevorstellungen von Konsumenten ansetzt.")}
          </p>
          <p>
            {t("Mit Hilfe der Typologie kann ermittelt werden, welches emotionale Image Marken besitzen bzw. mit welchen Emotionen und Assoziationen die eigene Zielgruppe, aber auch potenzielle Kunden angesprochen werden können.")}
          </p>
          <p>
            {t("Die Methode ist universell einsetzbar, unabhängig von der Art der Interviewmethode und kann problemlos in jede Befragung integriert werden.")}
          </p>
          <p>
            {t("Eine Beschreibung der C.M.R. Emotions- und Motiv-Typologie finden Sie hier:")}{" "}
          </p>

          <Costum_Button
            inside={false}
            link="https://www.cmr.de/deutsch/kompetenz/C.M.R.%20Emotions-%20und%20Motiv-Typologie.pdf"
            rel="noreferrer noopener"
            text="C.M.R. Emotions- und Motiv-Typologie.PDF"
          />

          <p className="font-medium text-xl">© C.M.R. – Mood & Emotion </p>
          <p>
            {t("Mood & Emotion basiert auf der emotionalen Beurteilung von Marken, zeigt bei Einbeziehung von Werbeträgern in die Untersuchung, inwieweit diese das Markenimage bestätigen oder verändern.")}
          </p>
          <p className="font-medium text-xl">© C.M.R. – RegioTrack</p>
          <p>
            {t("RegioTrack ermöglicht durch die Verknüpfung unterschiedlicher Daten hochwertige Standort-Analysen.")}
          </p>
          <p>
            {t("RegioTrack ist geeignet für die Evaluierung bestehender Standorte, für Planungsprozesse (Neueröffnungen) oder Verlagerung von bisherigen Filialen sowie zur Beurteilung eines Vertriebsnetzes.")}
          </p>
          <p>
            {t("Haupt-Einsatzgebiete für RegioTrack sind Handelseinrichtungen,Banken Versicherungen, Transport / Verkehr sowie der Bereich kommunale Entwicklung.")}
          </p>
          <p className="font-medium text-xl">
            © C.M.R. – Perceptual Study Print{" "}
          </p>
          <p>
            {t("Eine Perceptual Study Print zeigt das Image einer Zeitung oder Zeitschrift bei Lesern, aber auch Nicht-Lesern.")}{" "}
          </p>
          <p>
            {t("Die Auswertung beinhaltet die Darstellung des aktuellen Leserpotenzials, seine Entwicklungstendenz sowie die Ableitung von konkreten Handlungsempfehlungen basierend auf einer Stärken-/Schwächen-Analyse.")}
          </p>
          <p className="font-medium text-xl">© C.M.R. – Print Rating </p>
          <p>
            {t("Für alle Print Medien ist Print Rating das Monitoring Instrument, um über einen definierten Zeitraum die Nutzungsintensität der einzelnen Beiträge durch die Leser zu ermitteln.")}{" "}
          </p>
          <p>
            {t("Ein Zeitungs- oder Zeitschriften-Konzept kann am Nutzungsverhalten von Lesern überprüft und weiterentwickelt werden.")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
