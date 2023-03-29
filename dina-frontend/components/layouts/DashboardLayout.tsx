import React from "react";
import DashboardNavbar from "../dashboard/navbar/Navbar";
import DashboardSidebar from "../dashboard/sidebar/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DashboardNavbar />
      <div className="flex items-start pt-16">
        <DashboardSidebar />
        <main className="relative h-screen w-full overflow-y-auto bg-gray-50 md:ml-64 p-5">
          {children}
        </main>
      </div>
    </>
  );
}
