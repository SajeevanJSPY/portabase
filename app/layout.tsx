import React from "react";
import type {Metadata} from "next";
import "./globals.css";
import {Providers} from "./providers";
import {cn} from "@/lib/utils";
import {ConsoleSilencer} from "@/components/wrappers/common/console-silencer";
import {inter} from "@/fonts/fonts";
import {currentUser} from "@/lib/auth/current-user";

const title = process.env.PROJECT_NAME ?? "App Title";

export const metadata: Metadata = {
    title: {
        default: title,
        template: `%s - ${title}`
    },
    description: process.env.PROJECT_DESCRIPTION ?? undefined,
};

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {

    const user = await currentUser();
    console.info("useerrrrr",user)

    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <meta name="apple-mobile-web-app-title" content={title}/>
        </head>
        <body className={cn(inter.className, "h-full")}>
        <ConsoleSilencer/>
        <Providers >{children}</Providers>
        </body>
        </html>
    );
}
