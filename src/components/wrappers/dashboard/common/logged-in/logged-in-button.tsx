"use client";

import {ChevronUp} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {SidebarMenuButton} from "@/components/ui/sidebar";
import {LoggedInDropdown} from "./logged-in-dropdown";
import {Account, Session, User} from "better-auth";
import {AuthProviderConfig} from "../../../../../../portabase.config";

type LoggedInButtonClientProps = {
    user: User,
    sessions: Session[],
    currentSession: Session,
    accounts: Account[],
    providers: AuthProviderConfig[]
}

export const LoggedInButtonClient = ({
                                         user,
                                         sessions,
                                         currentSession,
                                         accounts,
                                         providers
                                     }: LoggedInButtonClientProps) => {

    return (
        <LoggedInDropdown
            // @ts-ignore
            user={user}
            // @ts-ignore
            sessions={sessions}
            // @ts-ignore
            currentSession={currentSession}
            // @ts-ignore
            accounts={accounts}
            providers={providers}
        >
            <SidebarMenuButton type="button">
                <Avatar className="size-6">
                    <AvatarFallback>{user.name[0].toUpperCase()}</AvatarFallback>
                    {user.image && <AvatarImage src={user.image}/>}
                </Avatar>

                <span className="first-letter:capitalize">{user.name}</span>
                <ChevronUp className="ml-auto"/>
            </SidebarMenuButton>
        </LoggedInDropdown>
    );
};
