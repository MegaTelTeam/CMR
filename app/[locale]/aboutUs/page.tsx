import initTranslations from "@/app/i18n";
import Title from "@/components/Title";


export default async function AboutUs({ params: { locale } }: { params: { locale: string } }) {

  const { t } = await initTranslations(locale, ['Uber uns']);

  return (
    <div className=" mx-[12vw] content-center">
      <Title title={t("Über uns")} />
      <div className="flex  mt-14  flex-col md:flex-row  justify-center gap-20">
        <div className="flex flex-col md:w-1/2  ">
          <p className="text-[24px] font-normal text-center md:text-left ">
            {t("p1")}
          </p>

          <p className="text-center md:text-left text-[14px]">{t("p2")}</p>
        </div>
        <div className="flex flex-col  md:w-1/2 gap-7">
          <p className="text-center md:text-left">
            {t("p3")}
          </p>
          <p className="text-center md:text-left">
            {t("p4")}
          </p>
          <p className="text-center md:text-left">
            {t("p5")}
          </p>
        </div>
      </div>
    </div>
  );
}
