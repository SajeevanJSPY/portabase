"use client";

import {useTheme} from "next-themes";
import {useEffect} from "react";
import {authClient} from "@/lib/auth/auth-client";

export function ThemeMetaUpdater() {
    const {resolvedTheme, setTheme} = useTheme();
    const {data: session} = authClient.useSession();

    useEffect(() => {
        if (!resolvedTheme) return;

        const color = resolvedTheme === "dark" ? "#000000" : "#ffffff";

        let tag = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
        if (!tag) {
            tag = document.createElement("meta");
            tag.setAttribute("name", "theme-color");
            document.head.appendChild(tag);
        }
        tag.setAttribute("content", color);
    }, [resolvedTheme]);

    useEffect(() => {
        if (!session?.user?.theme) return;
        setTheme(session.user.theme);
    }, [session, resolvedTheme, setTheme]);


    return null;
}

//
// "use client"
// import {useEffect, useState} from "react";
// import {useTheme} from "next-themes";
// import {authClient} from "@/lib/auth/auth-client";
//
// export function ThemeMetaUpdater() {
//     const [mounted, setMounted] = useState(false);
//     const {resolvedTheme, setTheme} = useTheme();
//     const {data: session} = authClient.useSession();
//
//     useEffect(() => setMounted(true), []);
//
//     useEffect(() => {
//         if (!mounted || !resolvedTheme) return;
//         const color = resolvedTheme === "dark" ? "#000000" : "#ffffff";
//         let tag = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
//         if (!tag) {
//             tag = document.createElement("meta");
//             tag.setAttribute("name", "theme-color");
//             document.head.appendChild(tag);
//         }
//         tag.setAttribute("content", color);
//     }, [mounted, resolvedTheme]);
//
//     useEffect(() => {
//         if (!mounted || !session?.user?.theme) return;
//         if (resolvedTheme !== session.user.theme) {
//             setTheme(session.user.theme);
//         }
//     }, [mounted, session, setTheme]);
//
//     return null;
// }
