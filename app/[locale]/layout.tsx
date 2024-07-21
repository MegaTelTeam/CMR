import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";
import Image from "next/image"


export default async function RootLayout({
    children, params: {locale}
  }: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
  }>) {

    return (
        <main className="">

            <NavBar locale={locale}/>
            <Image src="/bg_logo.png" alt="logo" width={318.34} height={567} className="absolute sm:left-[10%] lg:left-[15%]"/>
              <div className="min-h-[calc(100dvh-124px)] ">{children}</div>
            <Footer/>

        </main>
    );
  }