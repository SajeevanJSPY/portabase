"use client";

import {Card, CardContent, CardHeader} from "@/components/ui/card";
import Link from "next/link";
import {formatDateLastContact} from "@/utils/date-formatting";
import {ConnectionCircle} from "@/components/wrappers/common/connection-circle";
import {Agent, AgentWith} from "@/db/schema/08_agent";
import {Activity, Database, ShieldCheck} from "lucide-react";

export type agentCardProps = {
    data: AgentWith;
};

export const AgentCard = (props: agentCardProps) => {
    const {data: agent} = props;

    return (
        <Link href={`/dashboard/agents/${agent.id}`}
              className="block transition-all duration-200 hover:scale-[1.01] hover:shadow-md rounded-xl"
        >
            <Card className="flex flex-row justify-between">
                <div className="flex-1 text-left">
                    <CardHeader className="text-2xl font-bold">{agent.name}</CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Activity className="h-4 w-4"/>
                                <span>{formatDateLastContact(agent.lastContact)}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Database className="h-4 w-4"/>
                                <span>{agent.databases?.length ?? 0} DB</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <ShieldCheck className="h-4 w-4"/>
                                {agent.version ?
                                    <span>v{agent.version}</span>
                                    :
                                    <span>N/A</span>
                                }
                            </div>
                        </div>
                    </CardContent>
                </div>
                <div className="flex items-center px-4">
                    <ConnectionCircle date={agent.lastContact}/>
                </div>
            </Card>
        </Link>
    );
};
