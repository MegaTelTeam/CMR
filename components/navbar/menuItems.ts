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

export function getMenuItems({t}: {t: any}) : MenuItem {
  return [
    { text: t("STARTSEITE"), link: "/" },
    {
      text: t("ÜBER UNS"),
      link: "/aboutUs",
      list: [
        { text: t("GRUNDSATZ"), link: "/aboutUs/Grundsatz" },
        { text: t("MITGLIEDSCHAFTEN"), link: "/aboutUs/Memberships" },
        { text: t("STECKBRIEF C.M.R"), link: "/aboutUs/Steckbrief" },
        { text: t("NACHHALTIGKEIT BEI C.M.R"), link: "/aboutUs/Nachhaltigkeit" },
      ],
    },
    {
      text: t("KOMPETENZ"),
      link: "/Kompetenz",
      list: [
        { text: t("LEISTUNGSSPEKTRUM"), link: "/Kompetenz/Leistungsspektrum" },
        { text: t("THEMENSCHWERPUNKTE"), link: "/Kompetenz/Themenschwerpunkte" },
        { text: t("METHODEN"), link: "/Kompetenz/Methoden" },
        { text: t("INSTRUMENTE"), link: "/Kompetenz/instrumente" },
      ],
    },
    {
      text: t("REFERENZPROJEKTE"),
      link: "/Kompetenz/referenzprojekte",
      list: [
        { text: t("PRINTMEDIEN"), link: "/Kompetenz/referenzprojekte/printmedien" },
        { text: t("HÖRFUNK"), link: "/Kompetenz/referenzprojekte/horfunk" },
        {
          text: t("INVESTITIONSGÜTER | INFORMATIONSTECHNOLOGIE | TELEKOMMUNIKATION"),
          link: "/Kompetenz/referenzprojekte/investitionsguter",
        },
        { text: t("HANDEL | GASTRONOMIE"), link: "/Kompetenz/referenzprojekte/handel-gastronomie" },
        {
          text: t("MEINUNGSFORSCHUNG | POLITIK-UMFRAGEN"),
          link: "/Kompetenz/referenzprojekte/meinungsforschung-politik-umfragen",
        },
      ],
    },
    {
      text: t("KONTAKT"),
      link: "/contact",
      list: [
        { text: t("KONTAKT"), link: "/contact" },
        { text: t("SO FINDEN SIE UNS"), link: "/contact/so-finden-sie-uns" },
      ],
    },
  ];
}
