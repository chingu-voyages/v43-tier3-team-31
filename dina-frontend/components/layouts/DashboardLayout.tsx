import { auth } from "@/utils/firebaseClient";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import DashboardNavbar from "../dashboard/navbar/Navbar";
import DashboardSidebar from "../dashboard/sidebar/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [loading, setLoading] = React.useState(true);

  // Redirect to login page if user is not logged in
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoading(false);
      } else {
        router.push("/login");
      }
    });
    return () => unsubscribe();
  }, []);
  return loading ? (
    <div className="flex justify-center h-screen items-center text-2xl text-black">
      <FontAwesomeIcon icon={faSpinner} className="fa-spin mr-4" />{" "}
      Authenticating
    </div>
  ) : (
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
