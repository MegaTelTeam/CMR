import initTranslations from '@/app/i18n';
import TableComponent from '@/components/TableComponet'
import Title from '@/components/Title'
import React from 'react'

const page = async ({ params: { locale } }: { params: { locale: string } }) => {

  const { t } = await initTranslations(locale, ['Horfunk']);

  const data = [
    {
      Thema: t("Reichweitenanalyse"),
      Zielgruppe: t("Bevölkerung"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: "n = 3.000"
    },
    {
      Thema: "Perceptual Study",
      Zielgruppe: t("Bevölkerung"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: t("n = 8.000 in Deutschland, England, Österreich, Schweiz und Wales")
    },
    {
      Thema: t("Musiktiteltest"),
      Zielgruppe: t("Hörer (WHK)"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: t("26 Wellen pro Jahr, je n = 200")
    },
    {
      Thema: t("Auditoriumstest / CMT"),
      Zielgruppe: t("Hörer"),
      Methode: "Face-to-face Interviews (CAPI)",
      Stichprobe: "n = 500"
    },
    {
      Thema: "Burn Out",
      Zielgruppe: t("Hörer"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: "n = 500"
    },
    {
      Thema: t("Creativ Workshop"),
      Zielgruppe: t("Hörer"),
      Methode: t("Gruppendiskussion"),
      Stichprobe: "n = 15"
    },
    {
      Thema: "Image Analyse",
      Zielgruppe: t("Bevölkerung"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: "n = 1.000"
    },
    {
      Thema: t("Inhaltsanalyse Radiosender"),
      Methode: "Desk Research",
      Stichprobe: t("1 Kalenderwoche, jeweils von 6.00 – 18.00 Uhr")
    },
    {
      Thema: "Perceptual Study",
      Zielgruppe: t("Bevölkerung, 14 – 49 Jahre"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: "n = 1.000"
    },
    {
      Thema: t("Marken-Identität"),
      Zielgruppe: t("Bevölkerung"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: "n = 1.000"
    },
    {
      Thema: t("Reichweitenstudie"),
      Zielgruppe: t("Bevölkerung ab 14 Jahre"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: "n = 750"
    },
    {
      Thema: "Call Out",
      Zielgruppe: t("Hörer"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: "n = 500"
    }
  ];

  
  return (
    <div className='mx-[12vw]'>
      <Title title={t("Hörfunk ")}/>
      <div className=' text-center my-12'><p>{t("Anbei eine Auswahl der von uns aktuell durchgeführten Untersuchungen in diesem Bereich.")}</p></div>
      <TableComponent data={data} locale={locale} />

    </div>
  )
}

export default page
