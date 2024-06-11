"use client"
import { Avatar, Button, Link } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import NextLink from "next/link"
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Sidebar() {
    const pathName = usePathname()
    return(
        <div className="w-[275px] h-full flex-shrink-0 md:flex flex-col items-center p-4 hidden">
            <div className="flex flex-col mt-12">
                <Avatar 
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    size="lg"
                    radius="lg"
                />
                <span className="text-xl text-CRM_text-100 font-bold">Amine</span>
                <span className="text-xs text-CRM_text-200">amine@gmail.com</span>
            </div>
            <div className="flex flex-col mt-16 gap-4">
                <Link
                    className="text-CRM_text-200 font-bold text-xl"
                    href="#"
                    as={NextLink}
                    underline="hover"
                >
                    Requests
                </Link>
                <Link
                    className={cn("text-CRM_text-200 font-bold text-xl", pathName === "/admin/dashboard/users" ? "text-CRM_text-100" : "")}
                    href="/admin/dashboard/users"
                    underline={pathName === "/admin/dashboard/users" ? "always" : "hover"}
                    as={NextLink}
                >
                    Users
                </Link>
                <Link
                    className={cn("text-CRM_text-200 font-bold text-xl", pathName === "/admin/dashboard/createsurvay" ? "text-CRM_text-100" : "")}
                    href="/admin/dashboard/createsurvay"
                    underline={pathName === "/admin/dashboard/createsurvay" ? "always" : "hover"}
                    as={NextLink}
                >
                    Create Survay
                </Link>
                <Link
                    className="text-CRM_text-200 font-bold text-xl"
                    href="#"
                    as={NextLink}
                    underline="hover"
                >
                    Analytics
                </Link>
                <Link
                    className={cn("text-CRM_text-200 font-bold text-xl", pathName === "/admin/dashboard/createNews" ? "text-CRM_text-100" : "")}
                    href="/admin/dashboard/createNews"
                    underline={pathName === "/admin/dashboard/createNews" ? "always" : "hover"}
                    as={NextLink}
                >
                    Create News
                </Link>
            </div>
            <div className="flex-grow"/>
            <div className="h-[100px] flex flex-col gap-4">
                <Link
                    className="text-CRM_text-100 font-bold text-xl"
                    href="/"
                    as={NextLink}
                >
                    Home
                </Link>
                <Button
                    variant="flat"
                    className="font-bold text-md px-6 text-CRM_accent-100"
                    onPress={() => signOut()}
                >
                    Log out
                </Button>
            </div>
        </div>
    )
}