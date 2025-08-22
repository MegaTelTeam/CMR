import initTranslations from '@/app/i18n';
import Image from 'next/image';

interface AboutUsSection1Props {
  locale: string;
  sectionName: string;
  image: string;
}

const AboutUsHeader = async ({ locale, sectionName, image }: AboutUsSection1Props) => {
  const { t } = await initTranslations(locale, ['AboutUs']);
  
  return (
    <section className="bg-[#EBEBEB] space-y-12 px-4 pb-12">
    <div className="w-full relative container mx-auto aspect-[1120/289]">
        <Image
        src={image}
        alt="logo"
        fill
        />
    </div>
    <div className="container mx-auto p-4 space-y-8">
        <h1 className="text-xl text-center">{t("pageTitle")}</h1>
        <h2 className='text-5xl text-center font-bold'>{sectionName}</h2>
    </div>
    </section>
  );
};

export default AboutUsHeader;