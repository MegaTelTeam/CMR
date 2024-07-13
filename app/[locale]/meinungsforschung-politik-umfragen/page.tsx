import TableComponent from '@/components/TableComponet'
import Title from '@/components/Title'
import React from 'react'

const data = [
    {
      Thema: "Oberbürgermeisterwahl",
      Zielgruppe: "Wahlberechtigte",
      Methode: "Telefonische Interviews (CATI)",
      Stichprobe: "n = 500"
    },
    {
      Thema: "Landratswahl",
      Zielgruppe: "Wahlberechtigte",
      Methode: "Telefonische Interviews (CATI)",
      Stichprobe: "n = 500"
    },
    {
      Thema: "Konzepttest Sperrmüllentsorgung",
      Zielgruppe: "Bevölkerung ab 18 Jahre",
      Methode: "Telefonische Interviews (CATI)",
      Stichprobe: "n = 1.000"
    },
    {
      Thema: "Stadtentwicklung / Bahnhof",
      Zielgruppe: "Bevölkerung ab 18 Jahre",
      Methode: "Telefonische Interviews (CATI)",
      Stichprobe: "n = 1.000"
    },
    {
      Thema: "Bedarfsanalyse Dienstleistungen",
      Zielgruppe: "Bevölkerung",
      Methode: "Telefonische Interviews (CATI)",
      Stichprobe: "n = 500"
    },
    {
      Thema: "Evaluation Bauvorhaben",
      Zielgruppe: "Bevölkerung",
      Methode: "Telefonische Interviews (CATI)",
      Stichprobe: "n = 1.000"
    }
  ];
  


  
  


const page = () => {
  return (
    <div className='mx-[12vw]'>
      <Title title="Meinungsforschung, Politik-Umfragen"/>
      <div className=' text-center my-12'><p>Anbei eine Auswahl der von uns aktuell durchgeführten Untersuchungen in diesem Bereich.</p></div>
      <TableComponent data={data}/>

    </div>
  )
}

export default page
