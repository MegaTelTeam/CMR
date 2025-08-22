import Image from "next/image"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope } from "react-icons/fa";
import initTranslations  from "../i18n";
import { Button } from "@/components/ui/buttons";

import statsIcon from "../../public/icons/pie.png"
import word from "../../public/icons/world-shape-public-symbol.png"
import puzel from "../../public/icons/puzzle.png"
import check from "../../public/icons/check.png"
import certifiedIso from "../../public/icons/certified-company-certificate-iso-90012015-260nw-2461204389.png"
import medal from "../../public/icons/medal.png"
import adm from "../../public/icons/adm logo.png"
import plant from "../../public/icons/Plant-2.png"

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ['home']);

  return (
    <>
      <section className="bg-[#EBEBEB] space-y-16 px-4">
        <div className="w-full relative container mx-auto aspect-[1120/289]">
          <Image
            src="/heroImages/home.png"
            alt="logo"
            fill
          />
        </div>
        <div className="container mx-auto p-4 space-y-8">
          <h1 className="text-5xl">
            <span className="text-4xl font-extrabold bg-gradient-to-r from-[#1075BF] to-[#01F16C] bg-clip-text text-transparent">
              {t("heroHeading")}
            </span>
          </h1>
          <Button>
            {t("heroButton")}
          </Button>

          <div className="w-full">
            <div className="container mx-auto flex items-center justify-between py-2 text-sm">
              {/* left: phone + email */}
              <div className="flex items-center gap-6 text-black">
                <div className="flex items-center gap-2">
                  <FaPhone className="text-black rotate-90" size={15} aria-hidden="true" />
                  <span>{t("phone")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-black" size={15} aria-hidden="true" />
                  <a href="mailto:info@cmr.de" className="hover:underline">{t("email")}</a>
                </div>
              </div>

              {/* right: social icons */}
              <div className="flex items-center gap-4">
                <a href="#" aria-label="Facebook" className="bg-black text-white rounded-sm p-[3px]" title="Facebook">
                  <FaFacebookF size={18} aria-hidden="true" />
                </a>
                <a href="#" aria-label="Instagram" className="" title="Instagram">
                  <FaInstagram size={24} aria-hidden="true" />
                </a>
                <a href="#" aria-label="LinkedIn" className="bg-black text-white rounded-sm p-[3px]" title="LinkedIn">
                  <FaLinkedinIn size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-8 my-[98px] px-4">
        <div className="flex flex-col gap-y-6 items-center justify-center shadow-md px-4 py-6 w-full rounded-[10px] lg:max-w-[400px]">
          <Image src={word} alt="statsIcon" width={48} height={48}/>
          <p className="text-md text-[#6D747E] text-center">
        {t("card1Text")}
          </p>
        </div>
        
        <div className="flex flex-col gap-y-6 items-center justify-center shadow-md px-4 py-6 w-full rounded-[10px] lg:max-w-[400px]">
          <Image src={statsIcon} alt="statsIcon" width={48} height={48}/>
          <p className="text-md text-[#6D747E] text-center">
        {t("card2Text")}
          </p>
        </div>

        <div className="flex flex-col gap-y-6 items-center justify-center shadow-md px-4 py-6 w-full rounded-[10px] lg:max-w-[400px]">
          <Image src={puzel} alt="statsIcon" width={48} height={48}/>
          <p className="text-md text-[#6D747E] text-center">
        {t("card3Text")}
          </p>
        </div>
      </section>

      <section className="bg-[#EBEBEB] w-full px-4">
        <div className="container mx-auto flex items-stretch justify-between gap-6 py-8 lg:px-[200px] flex-wrap">
          <div className="flex-1 bg-white rounded-[10px] flex flex-col items-center justify-center min-w-[250px] py-6 px-4 relative shadow-sm">
            <Image src={medal} alt="medal" width={48} height={48} />
            <div className="mt-6 flex items-center gap-3">
              <Image src={adm} alt="logo" height={46} />
              <p className="text-[#6D747E]">{t("admMember")}</p>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-[10px] flex flex-col items-center justify-center min-w-[250px] py-6 px-4 relative shadow-sm border-x border-[#D1D5DB] border-dashed">
            <Image src={check} alt="iso" width={47} height={47} />
            <div className="mt-6 flex items-center gap-3">
              <Image src={certifiedIso} alt="logo" height={36} />
              <p className="text-[#6D747E]">{t("isoCertified")}</p>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-[10px] flex flex-col items-center justify-center min-w-[250px] py-6 px-4 relative shadow-sm">
            <Image src={plant} alt="check" width={45} height={45} />
            <div className="mt-6 flex items-center gap-3">
              <p className="text-[#6D747E]">{t("climateNeutral")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 my-[120px] relative space-y-[72px]">
        <h1 className="text-5xl font-bold text-center">{t("currentInsights")}</h1>

        <div className="p-[35px] shadow-md rounded-[10px] w-full max-w-[545px]">
          <h2 className="text-cmr-red-400 font-bold text-2xl">{t("studyTitle")}</h2>
          <p className="text-md text-[#262626]/50 ">{t("studyDescription")}</p>
          <div className="w-full flex justify-end">
            <Button>{t("studyButton")}</Button>
          </div>
        </div>
      </section>

      <section className="bg-[#EBEBEB] w-full py-[90px]">
        <div className="container mx-auto flex flex-col items-center px-4">
          <h1 className="font-bold text-black text-5xl text-center mb-[72px]">{t("cheeseTitle")}</h1>
          <div className="relative w-full aspect-[1113/407] mb-[55px]">
            <Image src="/images/homeimagefelwest.png" alt="image" fill/>
          </div>
          <p className="text-center text-cmr-red-400 text-2xl font-bold max-w-[680px] mb-[24px]">{t("cheeseDescription")}</p>
          <Button>{t("cheeseButton")}</Button>
        </div>
      </section>
    </>
  );
}