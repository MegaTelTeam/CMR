import Title from "@/components/Title";
import Costum_Button from "@/components/Costum_Button";
import initTranslations from "@/app/i18n";

const page = async ({ params: { locale } }: { params: { locale: string } }) => {

  const { t } = await initTranslations(locale, ['referenzprojekte']);
  
  return (
    <div className="mx-[12vw]">
      <Title title={t("ReferenzprojekteTitle" )}/>

      <div className=" text-center my-12">
        <p>
          {t("Anbei eine Auswahl der von uns aktuell durchgeführten Untersuchungen in den Bereichen Investitionsgüter, Handel | Gastronomie, Print, Hörfunk und Meinungsforschung.")}
        </p>
      </div>
      <div className="flex justify-center flex-col items-center gap-8">
        <Costum_Button
          inside={true}
          link="/Kompetenz/referenzprojekte/printmedien"
          text={t("Printmedien")}
          displayIcon1={false}
          height={50}
          width={180}
        />
        <Costum_Button
          inside={true}
          link="/Kompetenz/referenzprojekte/horfunk"
          text={t("Hörfunk")}
          displayIcon1={false}
          width={140}
          height={50}
        />
        <Costum_Button
          inside={true}
          link="/Kompetenz/referenzprojekte/investitionsguter"
          text={t("InvestitionsgüterITTelekommunikation")}
          displayIcon1={false}
          width={440}
          height={50}
        />
        <Costum_Button
          inside={true}
          link="/Kompetenz/referenzprojekte/handel-gastronomie"
          text={t("HandelGastronomie")}
          displayIcon1={false}
          width={260}
          height={50}
        />
        <Costum_Button
          inside={false}
          link="/Kompetenz/referenzprojekte/meinungsforschung-politik-umfragen"
          text={t("MeinungsforschungPolitikUmfragen")}
          displayIcon1={false}
          width={420}
          height={50}
        />
      </div>
    </div>
  );
};

export default page;
