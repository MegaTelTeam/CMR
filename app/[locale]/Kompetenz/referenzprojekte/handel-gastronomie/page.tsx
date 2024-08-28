import initTranslations from '@/app/i18n';
import TableComponent from '@/components/TableComponet'
import Title from '@/components/Title'
import React from 'react'

const page = async ({ params: { locale } }: { params: { locale: string } }) => {

  const { t } = await initTranslations(locale, ['Gastronomie']);

  const data = [
    {
      Thema: t("Kundensegmentierung Mobilfunk"),
      Zielgruppe: t("Kunden / Nutzer des Handys"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: t("n = 2.000")
    },
    {
      Thema: t("Entwicklung Hard- und Software-Einsatz in Unternehmen"),
      Zielgruppe: t("EDV-Leiter"),
      Methode: t("Telefonische Interviews (CATI), unternehmensrepräsentativ"),
      Stichprobe: t("n = 700 (Deutschland), n = 250 (Schweiz)")
    },
    {
      Thema: t("Serviceanforderungen Nutzfahrzeuge (Transporter)"),
      Zielgruppe: t("Kaufentscheider für Transporter"),
      Methode: t("4 Gruppendiskussionen, Face-to-face Interviews"),
      Stichprobe: t("n = 150")
    },
    {
      Thema: t("Image Nutzfahrzeuge (Transporter)"),
      Zielgruppe: t("Kaufentscheider für Transporter"),
      Methode: t("Gruppendiskussionen"),
      Stichprobe: t("8 Mini-GD mit 4-6 Teilnehmern")
    },
    {
      Thema: t("Werbeerfolgsmessung Radiospot (Autoreifen)"),
      Zielgruppe: t("Kaufentscheider"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: t("n = 1.000")
    },
    {
      Thema: t("Kundenzufriedenheit mit Finanzbuchhaltungs-Software"),
      Zielgruppe: t("Kaufentscheider / Anwender in Unternehmen"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: t("n = 300 (Schweiz)")
    },
    {
      Thema: t("Optimierung Vertriebsweg Softwareprodukte"),
      Zielgruppe: t("Fachhändler / Vertriebspartner"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: t("n = 155 (Schweiz)")
    },
    {
      Thema: t("Einsatz und Kundenzufriedenheit betriebswirtschaftlicher Analysetools"),
      Zielgruppe: t("Entscheider / Anwender in den Unternehmen"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: t("n = 400 Deutschland, Dänemark, England, Frankreich, Finnland, Österreich, Schweden, Schweiz")
    },
    {
      Thema: t("Messe-Erfolgs-Messung"),
      Zielgruppe: t("Fach- und Privatbesucher des Messestandes"),
      Methode: t("Face-to-face Interviews (CAPI)"),
      Stichprobe: t("n = 200")
    },
    {
      Thema: t("Kaufverhalten Kunden / Nicht-Kunden"),
      Zielgruppe: t("Kaufentscheider für Hardware in Unternehmen"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: t("n = 500")
    },
    {
      Thema: t("Potentialanalyse neuer Softwareprodukte"),
      Zielgruppe: t("EDV-Leiter in Großunternehmen"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: t("n = 400 Deutschland, Österreich, Schweiz")
    },
    {
      Thema: t("Kundenzufriedenheit Geldautomat-Transaktionsserver"),
      Zielgruppe: t("Verantwortliche für Geldautomaten in Banken"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: t("n = 10")
    }
  ];

  return (
    <div className='mx-[12vw]'>
      <Title title={t("Handel, Gastronomie")}/>
      <div className=' text-center my-12'><p>{t("Anbei eine Auswahl der von uns aktuell durchgeführten Untersuchungen in diesem Bereich.")}</p></div>
      <TableComponent data={data} locale={locale}/>

    </div>
  )
}

export default page
