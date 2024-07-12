import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";
import Image from "next/image"

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className="">
            <NavBar/>
            <Image src="/bg_logo.png" alt="logo" width={318.34} height={567} className="absolute sm:left-[10%] lg:left-[15%]"/>
              <div className="min-h-[calc(100dvh-124px)] ">{children}</div>
            <Footer/>
        </main>
    );
  }