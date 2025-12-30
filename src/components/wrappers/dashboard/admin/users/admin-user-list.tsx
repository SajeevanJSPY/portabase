"use client";
import { DataTable } from "@/components/wrappers/common/table/data-table";
import {usersListColumns} from "@/components/wrappers/dashboard/admin/users/table-colums";
import {User} from "@/db/schema/02_user";

type AdminUserListProps = {
    users: User[];
};

export const AdminUserList = ({ users }: AdminUserListProps) => {
    return <DataTable columns={usersListColumns()} data={users} enablePagination={true} enableSelect={false} />;
};
