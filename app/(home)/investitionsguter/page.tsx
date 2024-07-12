import TableComponent from '@/components/TableComponet'
import Title from '@/components/Title'
import React from 'react'

const data = [
    { Thema: "Kundensegmentierung Mobilfunk", Zielgruppe: "Kunden / Nutzer des Handys", Methode: "Telefonische Interviews (CATI)", Stichprobe: "n = 2.000" },
    { Thema: "Entwicklung Hard- und Software-Einsatz in Unternehmen", Zielgruppe: "EDV-Leiter, Unternehmensvertreter", Methode: "Telefonische Interviews (CATI)", Stichprobe: "n = 700 in Deutschland, n = 250 in der Schweiz" },
    { Thema: "Serviceanforderungen Nutzfahrzeuge (Transporter)", Zielgruppe: "Kaufentscheider für Transporter", Methode: "4 Gruppendiskussionen, Face-to-face Interviews", Stichprobe: "n = 150" },
    { Thema: "Image Nutzfahrzeuge (Transporter)", Zielgruppe: "Kaufentscheider für Transporter", Methode: "Gruppendiskussionen", Stichprobe: "8 Mini-GD mit 4-6 Teilnehmern" },
    { Thema: "Werbeerfolgsmessung Radiospot (Autoreifen)", Zielgruppe: "Kaufentscheider", Methode: "Telefonische Interviews (CATI)", Stichprobe: "n = 1.000" },
    { Thema: "Kundenzufriedenheit mit Finanzbuchhaltungs-Software", Zielgruppe: "Kaufentscheider / Anwender in Unternehmen", Methode: "Telefonische Interviews (CATI)", Stichprobe: "n = 300 in der Schweiz" },
    { Thema: "Optimierung Vertriebsweg Softwareprodukte", Zielgruppe: "Fachhändler / Vertriebspartner", Methode: "Telefonische Interviews (CATI)", Stichprobe: "n = 155 in der Schweiz" },
    { Thema: "Einsatz und Kundenzufriedenheit betriebswirtschaftlicher Analysetools", Zielgruppe: "Entscheider / Anwender in Unternehmen", Methode: "Telefonische Interviews (CATI)", Stichprobe: "n = 400 in Deutschland, Dänemark, England, Frankreich, Finnland, Österreich, Schweiz" },
    { Thema: "Messe-Erfolgs-Messung", Zielgruppe: "Fach- und Privatbesucher des Messestandes", Methode: "Face-to-face Interviews (CAPI)", Stichprobe: "n = 200" },
    { Thema: "Kaufverhalten Kunden / Nicht-Kunden", Zielgruppe: "Kaufentscheider für Hardware in Unternehmen", Methode: "Telefonische Interviews (CATI)", Stichprobe: "n = 500" },
    { Thema: "Potentialanalyse neuer Softwareprodukte", Zielgruppe: "EDV-Leiter in Großunternehmen", Methode: "Telefonische Interviews (CATI)", Stichprobe: "n = 400 in Deutschland, Österreich, Schweiz" },
    { Thema: "Kundenzufriedenheit Geldautomat-Transaktionsserver", Zielgruppe: "Verantwortliche für Geldautomaten in Banken", Methode: "Telefonische Interviews (CATI)", Stichprobe: "n = 100" }
];

  
  


const page = () => {
  return (
    <div className='mx-[12vw]'>
      <Title title="Investitionsgüter, IT, TK "/>
      <div className=' text-center my-12'><p>Anbei eine Auswahl der von uns aktuell durchgeführten Untersuchungen in diesem Bereich.</p></div>
      <TableComponent data={data}/>

    </div>
  )
}

export default page
