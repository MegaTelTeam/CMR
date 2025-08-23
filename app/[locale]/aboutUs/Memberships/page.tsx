import initTranslations from '@/app/i18n';
import AboutUsHeader from '@/components/aboutUs/section/AboutUsHeader';
import ADMLogo from '../../../../public/icons/adm_logo-removebg-preview 1.png'
import DMSF from "../../../../public/icons/BVM_logo-removebg-preview 1.png"
import Image from 'next/image';

interface PageProps {
  params: {
    locale: string;
  };
}

export default async function MembershipsPage({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, ['AboutUsMemberships']);

  return (
    <>
      <AboutUsHeader locale={locale} sectionName={t("sectionName")} image='/heroImages/aboutus.png'/>

      <section className='container mx-auto px-4 py-[54px] space-y-[83px]'>
        <div className='space-y-[1px]'>
          <h1 className='text-2xl text-cmr-red-400 font-bold text-center'>{t("pageTitle")}</h1>
          <p className='text-[#262626]/50 text-md text-center'>{t("pageSubtitle")}</p>
        </div>
        <div className='flex gap-[28px] flex-wrap'>
          <div className='bg-white rounded-[10px] shadow-md p-[35px] flex-1'>
            <h2 className='text-cmr-red-400 font-bold text-2xl'>{t("institutionalMembershipsTitle")}</h2>
            <p className='text-md text-[#262626]/50'>{t("institutionalMembershipsText")}</p>
          </div>

          <div className='bg-white rounded-[10px] shadow-md p-[35px] flex-1'>
            <h2 className='text-cmr-red-400 font-bold text-2xl'>{t("personalMembershipsTitle")}</h2>
            <p className='text-md text-[#262626]/50'>{t("personalMembershipsText")}</p>
          </div>
        </div>
      </section>

      <section className='bg-[#EBEBEB] px-4 py-[30px]'>
        <div className='container mx-auto flex justify-center items-center gap-[86px] flex-wrap'>
          <Image src={ADMLogo} width={115} alt="ADM-Logo"/>
          <Image src={DMSF} width={115} alt="DMSF-Logo"/>
        </div>
      </section>
    </>
  );
}