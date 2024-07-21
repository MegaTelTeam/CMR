import TableComponent from '@/components/TableComponet'
import Title from '@/components/Title'
import React from 'react'
import initTranslations from "@/app/i18n";
import I18nextProvider  from '@/providers/i18nProvider';

const page = async ({ params: { locale } }: { params: { locale: string } }) => {

  const { t } = await initTranslations(locale, ['Printmedien']);

  const data = [
    {
      Thema: t("Perceptual Study"),
      Zielgruppe: t("Bevölkerung ab 14 Jahre"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: t("n = 500 bis n = 2.500")
    },
    {
      Thema: t("Anzeigentest"),
      Zielgruppe: t("Leser"),
      Methode: "Face-to-face Interviews (Paper & pencil)",
      Stichprobe: "n = 50"
    },
    {
      Thema: "Print Rating",
      Zielgruppe: t("Leser Tageszeitung"),
      Methode: "Face-to-face Interviews (Paper & pencil)",
      Stichprobe: "n = 300"
    },
    {
      Thema: "Problem Detecting System",
      Zielgruppe: t("Leser / Wettbewerbsleser Tageszeitung"),
      Methode: "Face-to-face Interviews (Paper & pencil), Telefonische Interviews (CATI)",
      Stichprobe: "n = 500"
    },
    {
      Thema: t("Bürger-Barometer für verschiedene Tageszeitungen"),
      Zielgruppe: t("Bevölkerung"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: t("n = 500 bzw. n = 1.000")
    },
    {
      Thema: t("Potenzialanalyse für eine Tageszeitung"),
      Zielgruppe: t("Leser / Abonnenten von Tageszeitungen"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: "n = 600"
    },
    {
      Thema: t("Leserstrukturanalyse"),
      Zielgruppe: t("Leser Tageszeitung"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: "n = 500"
    },
    {
      Thema: t("Leserstrukturanalyse"),
      Zielgruppe: t("Leser / Abonnenten eines Magazins"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: "n = 250"
    },
    {
      Thema: t("Kundenzufriedenheit im Anzeigenbereich"),
      Methode: t("Telefonische Interviews (CATI) / Mystery Shopping"),
      Stichprobe: t("3 Wellen, je n = 200")
      
    },
    {
      Thema: t("Optimierung eines Hochschulmagazins"),
      Zielgruppe: t("Professoren, Dozenten, wissenschaftliche Mitarbeiter"),
      Methode: t("2 Gruppendiskussionen, Telefonische Interviews (CATI)"),
      Stichprobe: "n = 250"
    },
    {
      Thema: t("Optimierung Fachinformationen Kulturmanagement"),
      Zielgruppe: t("Mitarbeiter kultureller Einrichtungen wie Theater, Orchester, Museum, Konzertveranstalter …"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: "n = 240"
    },
    {
      Thema: t("Zustellerzufriedenheit"),
      Zielgruppe: t("Leser Tageszeitung"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: "n = 500"
    },
    {
      Thema: t("Untersuchung zu diversen Lehrwerken"),
      Zielgruppe: t("Lehrer"),
      Methode: t("Telefonische Interviews (CATI)")
    },
    {
      Thema: t("Tageszeitungen an Schulen"),
      Zielgruppe: t("Schüler"),
      Methode: t("schriftliche Befragung"),
      Stichprobe: "n = 8.000"
    }
  ];
  
  return (
    <div className='mx-[12vw]'>
      <Title title={t("Printmedien")}/>
      <div className=' text-center my-12'><p>{t("Anbei eine Auswahl der von uns aktuell durchgeführten Untersuchungen im Printbereich.")}</p></div>
      <TableComponent data={data} locale={locale} />


    </div>
  )
}

export default page
