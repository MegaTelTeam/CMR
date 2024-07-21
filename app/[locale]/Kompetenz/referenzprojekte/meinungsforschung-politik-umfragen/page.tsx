import initTranslations from '@/app/i18n';
import TableComponent from '@/components/TableComponet'
import Title from '@/components/Title'
import React from 'react'

const page = async ({ params: { locale } }: { params: { locale: string } }) => {

  const { t } = await initTranslations(locale, ['Politik']);

const data = [
    {
      Thema: t("Oberbürgermeisterwahl"),
      Zielgruppe: t("Wahlberechtigte"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: t("n = 500")
    },
    {
      Thema: t("Landratswahl"),
      Zielgruppe: t("Wahlberechtigte"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: t("n = 500")
    },
    {
      Thema: t("Konzepttest Sperrmüllentsorgung"),
      Zielgruppe: t("Bevölkerung ab 18 Jahre"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: t("n = 1.000")
    },
    {
      Thema: t("Stadtentwicklung / Bahnhof"),
      Zielgruppe: t("Bevölkerung ab 18 Jahre"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: t("n = 1.000")
    },
    {
      Thema: t("Bedarfsanalyse Dienstleistungen"),
      Zielgruppe: t("Bevölkerung"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: t("n = 500")
    },
    {
      Thema: t("Evaluation Bauvorhaben"),
      Zielgruppe: t("Bevölkerung"),
      Methode: t("Telefonische Interviews (CATI)"),
      Stichprobe: t("n = 1.000")
    }
  ];
  
  return (
    <div className='mx-[12vw]'>
      <Title title={t("Meinungsforschung, Politik-Umfragen")}/>
      <div className=' text-center my-12'><p>{t("Anbei eine Auswahl der von uns aktuell durchgeführten Untersuchungen in diesem Bereich.")}</p></div>
      <TableComponent data={data} locale={locale}/>

    </div>
  )
}

export default page
