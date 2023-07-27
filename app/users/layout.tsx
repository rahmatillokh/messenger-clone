import React from "react";
import CustomSidebar from "../components/sidebar/Sidebar";
import getUsers from "../actions/getUsers";
import Userlist from "./components/Userlist";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();

  return (
    <CustomSidebar>
      <div className="h-full">
        <Userlist items={users} />
        {children}
      </div>
    </CustomSidebar>
  );
}
