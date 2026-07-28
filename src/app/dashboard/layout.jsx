import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { getUserSession } from "@/lib/core/session";


const DashboardLayout = async ({ children }) => {

    const user = await getUserSession();
      const userId = user?.id;

//     const user = {
//     name: "Client BD",
//     role: "client",
//     image:
//       "https://static.vecteezy.com/system/resources/previews/040/815/487/non_2x/client-icon-in-logotype-vector.jpg",
//   };


  return (
    <div className="flex min-h-screen bg-[var(--background)]">
        <DashboardSidebar user={user} />

        <div className="flex-1">
            <DashboardHeader user={user} />

            <div className="max-w-7xl mx-auto p-6">
                {children}
            </div>
        </div>
    </div>
  );
};

export default DashboardLayout;