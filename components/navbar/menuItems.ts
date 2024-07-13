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
    {text: t("KOMPETENZ"), link:"/competence" , list:[
      {text: t("LEISTUNGSSPEKTRUM"),link:"/competence/Leistungsspektrum"},
      {text: t("THEMENSCHWERPUNKTE"),link:"/competence/Themenschwerpunkte"},
      {text: t("METHODEN"),link:"/competence/Methoden"},
      {text: t("TELEFONSTUDIO"),link:"/competence/Telefonstudio"},
      {text: t("INSTRUMENTE"),link:"#"},
      {text: t("REFERENZPROJEKTE"), link:"#",
        content: [
          {text: t("PRINTMEDIEN"), link:"#"},
          {text: t("HÖRFUNK"), link:"#"},
          {text: t("INVESTITIONSGÜTER, IT, TK"), link:"#"},
          {text: t("HANDEL, GASTRONOMIE"),link:"#"},
          {text: t("MEINUNGSFORSCHUNG, POLITIK-UMFRAGEN"), link:"#"},
        ]}
    ]},
    {text: t("REFERENZEN"),  link:"#"  , list:[
      {text: t("HÖRFUNKSENDER"),link:"#"},
      {text: t("PRINTMEDIEN"),link:"#"},
      {text: t("LEBENSMITTEL"),link:"#"}
    ] },
    {text: t("AKTUELLES"),  link:"#"  , list:[
      {text: t("KÄSELIEBHABER"),link:"#"}
    ] },
    {text: t("DATENSCHUTZ"), link:"#"},
    {text: t("KONTAKT"),  link:"#"  , list:[
      {text: t("ANSPRECHPARTNER"),link:"#"},
      {text: t("IHR WEG ZU UNS"),link:"#"}
    ] },
  ];
}
