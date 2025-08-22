import AboutUsSection1 from '@/components/aboutUs/section/AboutUsHeader';
import initTranslations from '@/app/i18n';
import { Button } from '@/components/ui/buttons';

interface AboutUsPageProps {
  params: {
    locale: string;
  };
}

export default async function AboutUsGrundsatz({ params: { locale } }: AboutUsPageProps) {
  const { t } = await initTranslations(locale, ['AboutUsGrundsatz']);

  return (
    <>
      <AboutUsSection1 locale={locale} sectionName={t("sectionName")} image="/heroImages/aboutus.png"/>

      <section className='container mx-auto px-4 flex flex-col items-center justify-center gap-2 py-[54px]'>
        <Button className='px-[10px] py-[5px] rounded-full'>{t("buttonText")}</Button>
        <p className='font-bold text-2xl text-cmr-red-400 text-center'>{t("motto")}</p>
      </section>

      <section className='bg-[#EBEBEB] px-4 py-20'>
        <div className='container mx-auto space-y-8'>
          {/* Main heading card */}
          <div className='bg-white rounded-[10px] shadow-sm p-8'>
            <h2 className='text-cmr-red-400 font-bold text-2xl mb-4'>
              {t("mainHeading")}
            </h2>
            <p className='text-[#262626]/50 text-md leading-relaxed'>
              {t("mainSubtext")}
            </p>
          </div>

          {/* Two column layout for services */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Our Services */}
            <div className='bg-white rounded-[10px] shadow-sm p-8'>
              <h3 className='text-cmr-red-400 font-bold text-xl mb-4'>
                {t("servicesTitle")}
              </h3>
              <p className='text-[#262626]/50 text-md leading-relaxed'>
                {t("servicesText")}
              </p>
            </div>

            {/* Implementation Support */}
            <div className='bg-white rounded-[10px] shadow-sm p-8'>
              <h3 className='text-cmr-red-400 font-bold text-xl mb-4'>
                {t("implementationTitle")}
              </h3>
              <p className='text-[#262626]/50 text-md leading-relaxed'>
                {t("implementationText")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}