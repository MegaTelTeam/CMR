import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";
import Image from "next/image"
import I18nextProvider  from "@/providers/i18nProvider";
import initTranslations from "@/app/i18n";


export default async function RootLayout({
    children, params: {locale}
  }: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
  }>) {
    const { resources } = await initTranslations(locale, ["navbar"]);

    return (
        <main className="w-full bg-[#F6F6F6]">

            <I18nextProvider namespaces={["navbar"]} locale={locale} resources={resources} >
              <NavBar/>
            </I18nextProvider>
              <div className="min-h-[calc(100dvh-124px)] ">{children}</div>
            <Footer locale={locale} />

        </main>
    );
  }