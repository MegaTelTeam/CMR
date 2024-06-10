import NavBar from "@/components/navBar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main >
            <NavBar/>
            {children}
        </main>
    );
  }