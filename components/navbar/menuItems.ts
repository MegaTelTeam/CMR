// li 3andou link y7ottou lenna ma3a esm el page mta3ou 
import initTranslations from '../../app/i18n';

export type MenuItem =({
  text: string;
  link: string;
  list?: undefined;
} | {
  text: string;
  link: string;
  list: ({
      text: string;
      link: string;
      content?: undefined;
  } | {
      text: string;
      link: string;
      content: {
          text: string;
          link: string;
      }[];
  })[];
})[]

export async function getMenuItems({locale}: {locale: string}) : Promise<MenuItem> {
  
  const { t } = await initTranslations(locale, ["navbar"]);

  return [
    {text:t("MARKTFORSCHUNG"),link:"#" },
    {text: t("ÜBER UNS"), link:"/aboutUs", list:[
      {text: t("MITGLIEDSCHAFTEN"), link:"/aboutUs/Memberships"},
      {text: t("STECKBRIEF"), link:"/aboutUs/Steckbrief"}
    ]},
    {text: t("KOMPETENZ"), link:"/Kompetenz" , list:[
      {text: t("LEISTUNGSSPEKTRUM"),link:"/Kompetenz/Leistungsspektrum"},
      {text: t("THEMENSCHWERPUNKTE"),link:"/Kompetenz/Themenschwerpunkte"},
      {text: t("METHODEN"),link:"/Kompetenz/Methoden"},
      {text: t("TELEFONSTUDIO"),link:"/Kompetenz/Telefonstudio"},
      {text: t("INSTRUMENTE"),link:"/Kompetenz/instrumente"},
      {text: t("REFERENZPROJEKTE"), link:"/Kompetenz/referenzprojekte", 
        content: [
          {text: t("PRINTMEDIEN"), link:"/competence/referenzprojekte/printmedien"},
          {text: t("HÖRFUNK"), link:"/competence/referenzprojekte/horfunk"},
          {text: t("INVESTITIONSGÜTER, IT, TK"), link:"/competence/referenzprojekte/investitionsguter"},
          {text: t("HANDEL, GASTRONOMIE"),link:"/competence/referenzprojekte/handel-gastronomie"},
          {text: t("MEINUNGSFORSCHUNG, POLITIK-UMFRAGEN"), link:"/competence/referenzprojekte/meinungsforschung-politik-umfragen"},
        ]}
    ]},
    {text: t("REFERENZEN"),  link:"#"  , list:[
      {text: t("HÖRFUNKSENDER"),link:"/Referenzen/Horfunksender"},
      {text: t("PRINTMEDIEN"),link:"/Referenzen/Printmedien"},
      {text: t("LEBENSMITTEL"),link:"/Referenzen/Lebensmittel"},
      {text: "Prototype2",link:"/Referenzen/Prototype2"}
    ] },
    {text: t("AKTUELLES"),  link:"/aktuelles"  , list:[
      {text: t("KÄSELIEBHABER"),link:"#"}
    ] },
    {text: t("DATENSCHUTZ"), link:"#"},
    {text: t("KONTAKT"),  link:"#"  , list:[
      {text: t("ANSPRECHPARTNER"),link:"#"},
      {text: t("IHR WEG ZU UNS"),link:"#"}
    ] },
  ];
}
