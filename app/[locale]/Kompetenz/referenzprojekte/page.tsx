import Title from "@/components/Title";
import Costum_Button from "@/components/Costum_Button";
const page = () => {
  return (
    <div className="mx-[12vw]">
      <Title title="Referenzprojekte " />

      <div className=" text-center my-12">
        <p>
          Anbei eine Auswahl der von uns aktuell durchgeführten Untersuchungen
          in den Bereichen Investitionsgüter, Handel | Gastronomie, Print,
          Hörfunk und Meinungsforschung.
        </p>
      </div>
      <div className="flex justify-center flex-col items-center gap-8">
        <Costum_Button
          inside={true}
          link="/Kompetenz/referenzprojekte/printmedien"
          text="Printmedien"
          displayIcon1={false}
          height={50}
          width={180}
        />
        <Costum_Button
          inside={true}
          link="/Kompetenz/referenzprojekte/horfunk"
          text="Hörfunk"
          displayIcon1={false}
          width={140}
          height={50}
        />
        <Costum_Button
          inside={true}
          link="/Kompetenz/referenzprojekte/investitionsguter"
          text="Investitionsgüter, IT, Telekommunikation"
          displayIcon1={false}
          width={440}
          height={50}
        />
        <Costum_Button
          inside={true}
          link="/Kompetenz/referenzprojekte/handel-gastronomie"
          text="Handel, Gastronomie"
          displayIcon1={false}
          width={260}
          height={50}
        />
        <Costum_Button
          inside={false}
          link="/Kompetenz/referenzprojekte/meinungsforschung-politik-umfragen"
          text="Meinungsforschung, Politik-Umfragen"
          displayIcon1={false}
          width={420}
          height={50}
        />
      </div>
    </div>
  );
};

export default page;
