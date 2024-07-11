import NavBar from "@/components/nav_bar";
import Image from "next/image"

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className="w-dvw">
            <NavBar/>
            <Image src="/bg_logo.png" alt="logo" width={318.34} height={567} className="absolute sm:left-[10%] lg:left-[15%]"/>
            {children}
        </main>
    );
  }