import TableComponent from '@/components/TableComponet'
import Title from '@/components/Title'
import React from 'react'

const data = [
  {
    Thema: "Reichweitenanalyse",
    Zielgruppe: "Bevölkerung",
    Methode: "Telefonische Interviews (CATI)",
    Stichprobe: "n = 3.000"
  },
  {
    Thema: "Perceptual Study",
    Zielgruppe: "Bevölkerung",
    Methode: "Telefonische Interviews (CATI)",
    Stichprobe: "n = 8.000 in Deutschland, England, Österreich, Schweiz und Wales"
  },
  {
    Thema: "Musiktiteltest",
    Zielgruppe: "Hörer (WHK)",
    Methode: "Telefonische Interviews (CATI)",
    Stichprobe: "26 Wellen pro Jahr, je n = 200"
  },
  {
    Thema: "Auditoriumstest / CMT",
    Zielgruppe: "Hörer",
    Methode: "Face-to-face Interviews (CAPI)",
    Stichprobe: "n = 500"
  },
  {
    Thema: "Burn Out",
    Zielgruppe: "Hörer",
    Methode: "Telefonische Interviews (CATI)",
    Stichprobe: "n = 500"
  },
  {
    Thema: "Creativ Workshop",
    Zielgruppe: "Hörer",
    Methode: "Gruppendiskussion",
    Stichprobe: "n = 15"
  },
  {
    Thema: "Image Analyse",
    Zielgruppe: "Bevölkerung",
    Methode: "Telefonische Interviews (CATI)",
    Stichprobe: "n = 1.000"
  },
  {
    Thema: "Inhaltsanalyse Radiosender",
    Methode: "Desk Research",
    Stichprobe: "1 Kalenderwoche, jeweils von 6.00 – 18.00 Uhr"
  },
  {
    Thema: "Perceptual Study",
    Zielgruppe: "Bevölkerung, 14 – 49 Jahre",
    Methode: "Telefonische Interviews (CATI)",
    Stichprobe: "n = 1.000"
  },
  {
    Thema: "Marken-Identität",
    Zielgruppe: "Bevölkerung",
    Methode: "Telefonische Interviews (CATI)",
    Stichprobe: "n = 1.000"
  },
  {
    Thema: "Reichweitenstudie",
    Zielgruppe: "Bevölkerung ab 14 Jahre",
    Methode: "Telefonische Interviews (CATI)",
    Stichprobe: "n = 750"
  },
  {
    Thema: "Call Out",
    Zielgruppe: "Hörer",
    Methode: "Telefonische Interviews (CATI)",
    Stichprobe: "n = 500"
  }
];



const page = () => {
  return (
    <div className='mx-[12vw]'>
      <Title title="Hörfunk "/>
      <div className=' text-center my-12'><p>Anbei eine Auswahl der von uns aktuell durchgeführten Untersuchungen in diesem Bereich.</p></div>
      <TableComponent data={data}/>

    </div>
  )
}

export default page
