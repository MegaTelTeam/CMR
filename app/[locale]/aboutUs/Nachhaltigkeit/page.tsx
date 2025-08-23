import initTranslations from '@/app/i18n';
import AboutUsHeader from '@/components/aboutUs/section/AboutUsHeader';

interface PageProps {
  params: {
    locale: string;
  };
}

export default async function NachhaltigkeitPage({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, ['AboutUsNachhaltigkeit']);

  return (
    <>
      <AboutUsHeader locale={locale} sectionName={t("sectionName")} image='/heroImages/aboutus.png'/>
      
      <section className='container mx-auto px-4 py-[54px]'>
        <div className='space-y-[1px] mb-[36px]'>
          <h1 className='text-2xl text-cmr-red-400 font-bold text-center'>{t("pageTitle")}</h1>
          <p className='text-[#262626]/50 text-md text-center'>{t("pageSubtitle")}</p>
        </div>
        
        <div className='space-y-8 mb-[27px]'>
          <p className='text-[#262626]/50 text-md text-center max-w-4xl mx-auto'>
            {t("introText")}
          </p>
        </div>
        
        <div className='space-y-[35px]'>
          {/* Mitgliedschaft im Nachhaltigkeitskodex */}
          <div className='bg-white rounded-[10px] shadow-md p-[35px]'>
            <h2 className='text-cmr-red-400 font-bold text-2xl mb-4'>{t("sustainabilityCodexTitle")}</h2>
            <p className='text-[#262626]/50 text-md leading-relaxed'>
              {t("sustainabilityCodexText1")}<a href="https://www.adm-ev.de/wp-content/uploads/2024/04/ADM-Nachhaltigkeitskodex_designed.pdf" target="_blank" rel="noopener noreferrer" className='text-cmr-red-400 hover:underline'>{t("sustainabilityCodexLinkText")}</a>{t("sustainabilityCodexText2")}
            </p>
            <p className='text-[#262626]/50 text-md leading-relaxed mt-4'>
              {t("sustainabilityCodexText3")}
            </p>
          </div>

          {/* Selbstverständlichkeiten im Arbeitsalltag */}
          <div className='bg-white rounded-[10px] shadow-md p-[35px]'>
            <h2 className='text-cmr-red-400 font-bold text-2xl mb-4'>{t("dailyPracticesTitle")}</h2>
            <p className='text-[#262626]/50 text-md leading-relaxed'>
              {t("dailyPracticesText")}
            </p>
          </div>

          {/* Homeoffice für Umwelt und Balance */}
          <div className='bg-white rounded-[10px] shadow-md p-[35px]'>
            <h2 className='text-cmr-red-400 font-bold text-2xl mb-4'>{t("homeofficeTitle")}</h2>
            <p className='text-[#262626]/50 text-md leading-relaxed'>
              {t("homeofficeText")}
            </p>
          </div>

          {/* Soziales Engagement */}
          <div className='bg-white rounded-[10px] shadow-md p-[35px]'>
            <h2 className='text-cmr-red-400 font-bold text-2xl mb-4'>{t("socialEngagementTitle")}</h2>
            <p className='text-[#262626]/50 text-md leading-relaxed'>
              {t("socialEngagementText")}
            </p>
          </div>

          {/* Reduktion der Emissionen */}
          <div className='bg-white rounded-[10px] shadow-md p-[35px]'>
            <h2 className='text-cmr-red-400 font-bold text-2xl mb-4'>{t("emissionReductionTitle")}</h2>
            <div className='space-y-4'>
              <p className='text-[#262626]/50 text-md leading-relaxed'>
                {t("emissionReductionText1")}
              </p>
              <p className='text-[#262626]/50 text-md leading-relaxed'>
                {t("emissionReductionText2")}
              </p>
              <p className='text-[#262626]/50 text-md leading-relaxed'>
                {t("emissionReductionText3")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}