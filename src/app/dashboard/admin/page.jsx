import StatCard from "@/components/dashboard/StatCard";
import { getAdminStats } from "@/lib/api/dashboard";
import { Briefcase, CircleCheck, FolderOpen, LoaderCircle } from "lucide-react";


const AdminHomePage = async () => {

    const stats = await getAdminStats();



    return (
        <div className="p-6">
              <h1 className="mb-8 text-3xl font-bold">
                Overview
              </h1>
        
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

<StatCard  />
<StatCard  />
<StatCard  />
<StatCard  />


                  <StatCard
                      title="Users"
                       value={stats.users}
                      icon={<Briefcase />}
                      color="bg-primary"
                  />
        
                  <StatCard
                      title="Tasks" 
                      value={stats.tasks}
                      icon={<FolderOpen />}
                      color="bg-warning"
                  />
        
                  <StatCard
                      title="Proposals" 
                      value={stats.proposals}
                      icon={<LoaderCircle />}
                      color="bg-secondary"
                  />
        
                  <StatCard
                      title="Completed Tasks" 
                      value={stats.completedTasks}
                      icon={<CircleCheck />}
                      color="bg-success"
                  />
              </div>
            </div>
    );
};

export default AdminHomePage;