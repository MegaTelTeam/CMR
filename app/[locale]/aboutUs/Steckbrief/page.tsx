import initTranslations from '@/app/i18n';
import AboutUsHeader from '@/components/aboutUs/section/AboutUsHeader';

interface PageProps {
  params: {
    locale: string;
  };
}

export default async function SteckbriefPage({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, ['AboutUsSteckbrief']);

  return (
    <>
      <AboutUsHeader locale={locale} sectionName={t("sectionName")} image='/heroImages/aboutus.png'/>

      <section className='container mx-auto px-4 py-[54px] space-y-[83px]'>
        <div className='space-y-[1px]'>
          <h1 className='text-2xl text-cmr-red-400 font-bold text-center'>{t("pageTitle")}</h1>
          <p className='text-[#262626]/50 text-md text-center'>{t("pageSubtitle")}</p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[28px]'>
          {/* Top Left - Gründung */}
          <div className='bg-white rounded-[10px] shadow-md p-[35px]'>
            <h2 className='text-cmr-red-400 font-bold text-2xl mb-4'>{t("foundingTitle")}</h2>
            <div className='space-y-3'>
              <div className='flex justify-between items-center'>
                <span className='text-[#262626]/50 text-md'>{t("foundingYear")}</span>
              </div>
            </div>
          </div>

          {/* Top Right - Personalien */}
          <div className='bg-white rounded-[10px] shadow-md p-[35px]'>
            <h2 className='text-cmr-red-400 font-bold text-2xl mb-4'>{t("personnelTitle")}</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <h3 className='font-medium text-[#262626] mb-1'>{t("wernerDieing")}</h3>
                <p className='text-[#262626]/50 text-sm'>{t("wernerDieingRole")}</p>
              </div>
              <div>
                <h3 className='font-medium text-[#262626] mb-1'>{t("claudiaDieing")}</h3>
                <p className='text-[#262626]/50 text-sm'>{t("claudiaDieingRole")}</p>
              </div>
            </div>
          </div>

          {/* Bottom Left - Gesellschaftsform */}
          <div className='bg-white rounded-[10px] shadow-md p-[35px]'>
            <h2 className='text-cmr-red-400 font-bold text-2xl mb-4'>{t("companyFormTitle")}</h2>
            <div className='space-y-3'>
              <div>
                <p className='text-[#262626]/50 text-md'>{t("companyFormText")}</p>
              </div>
            </div>
          </div>

          {/* Bottom Right - Spezielle Ressourcen */}
          <div className='bg-white rounded-[10px] shadow-md p-[35px]'>
            <h2 className='text-cmr-red-400 font-bold text-2xl mb-4'>{t("specialResourcesTitle")}</h2>
            <div className='space-y-2'>
              <div className='flex items-center'>
                <span className='w-2 h-2 bg-cmr-red-400 rounded-full mr-3'></span>
                <p className='text-[#262626]/50 text-md'>{t("telephoneStudio")}</p>
              </div>
              <div className='flex items-center'>
                <span className='w-2 h-2 bg-cmr-red-400 rounded-full mr-3'></span>
                <p className='text-[#262626]/50 text-md'>{t("interviewerResources")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}