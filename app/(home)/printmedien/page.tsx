import TableComponent from '@/components/TableComponet'
import Title from '@/components/Title'
import React from 'react'

const data = [
  { Thema: "Perceptual Study", Zielgruppe: "Bevölkerung ab 14 Jahre", Methode: "Telefonische Interviews (CATI)", Stichprobe: "n = 500 bis n = 2.500" },
  { Thema: "Angelgentest", Zielgruppe: "Leser", Methode: "Face-to-face Interviews (Paper & pencil)", Stichprobe: "n = 50" },
  { Thema: "Print Rating", Zielgruppe: "Leser Tageszeitung", Methode: "Face-to-face Interviews (Paper & pencil)", Stichprobe: "n = 300" },
  { Thema: "Problem Detecting System", Zielgruppe: "Leser/Wettbewerbsleser Tageszeitung", Methode: "Face-to-face Interviews (Paper & pencil), Telefonische Interviews (CATI)", Stichprobe: "n = 500" },
  { Thema: "Burger Barometer für verschiedene Tageszeitungen", Zielgruppe: "Bevölkerung", Methode: "Telefonische Interviews (CATI)", Stichprobe: "n = 500 bzw n = 1.000" },
  { Thema: "Potenzialanalyse für eine Tageszeitung", Zielgruppe: "Leser/Abonnenten von Tageszeitungen", Methode: "Telefonische Interviews (CATI)", Stichprobe: "n = 600" },
  { Thema: "Leserstrukturanalyse (1)", Zielgruppe: "Leser Tageszeitung", Methode: "Telefonische Interviews (CATI)", Stichprobe: "n = 500" },
  { Thema: "Leserstrukturanalyse (2)", Zielgruppe: "Leser/Abonnenten eines Magazins", Methode: "Telefonische Interviews (CATI)", Stichprobe: "n = 250" },
  { Thema: "Kundenzufriedenheit im Anzeigenbereich", Zielgruppe: "", Methode: "Telefonische Interviews (CATI), Mystery Shopping", Stichprobe: "3 Wellen, je n = 200" },
  { Thema: "Optimierung eines Hochschulmagazins", Zielgruppe: "Professoren, Dozenten, wissenschaftliche Mitarbeiter", Methode: "2 Gruppendiskussionen, Telefonische Interviews (CATI)", Stichprobe: "n = 250" },
  { Thema: "Optimierung Fachinformationen Kulturmanagement", Zielgruppe: "Mitarbeiter kultureller Einrichtungen wie Theater, Orchester, Museum, Konzertveranstalter", Methode: "Telefonische Interviews (CATI)", Stichprobe: "n = 240" },
  { Thema: "Zustellerzufriedenheit", Zielgruppe: "Leser Tageszeitung", Methode: "Telefonische Interviews (CATI)", Stichprobe: "n = 500" },
  { Thema: "Untersuchung zu diversen Lehrwerken", Zielgruppe: "Lehrer", Methode: "Telefonische Interviews (CATI)"},
  { Thema: "Tageszeitungen an Schulen", Zielgruppe: "Schüler", Methode: "schriftliche Befragung", Stichprobe: "n = 8.000" }
];



const page = () => {
  return (
    <div className='mx-[12vw]'>
      <Title title="Printmedien "/>
      <div className=' text-center my-12'><p>Anbei eine Auswahl der von uns aktuell durchgeführten Untersuchungen im Printbereich.</p></div>
      <TableComponent data={data}/>

    </div>
  )
}

export default page
