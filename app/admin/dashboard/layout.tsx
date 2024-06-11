import Sidebar from "@/components/dashboard/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative w-dvw h-dvh flex flex-col overflow-hidden bg-CRM_primary-100">
        <div className="flex flex-grow">
            <Sidebar/>
            <div className="flex-grow p-4">
                <div className="bg-CRM_bg-100 size-full rounded-3xl p-4">
                {children}
                </div>
            </div>
        </div>
    </div>
  );
}
