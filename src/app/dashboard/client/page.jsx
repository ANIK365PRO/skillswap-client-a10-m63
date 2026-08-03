// import { SidebarMenu } from '@/components/dashboard/SidebarMenu';
import StatCard from '@/components/dashboard/StatCard';
import { getClientStats } from '@/lib/api/dashboard';
import { getUserSession } from '@/lib/core/session';
import { Briefcase, CircleCheck, FolderOpen, LoaderCircle } from 'lucide-react';


const ClientHomePage = async () => {

    const user = await getUserSession()
    const stats = await getClientStats(user?.email);

    console.log(user, "stats ----", stats)


  
     return (
    <div className="p-6">
      <h1 className="mb-8 text-3xl font-bold">
        Overview
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <StatCard
              title="My Tasks"
              value={stats.totalTasks || 0}
              icon={<Briefcase />}
              color="bg-primary"
          />

          <StatCard
              title="Open Tasks"
              value={stats.openTasks || 0}
              icon={<FolderOpen />}
              color="bg-warning"
          />

          <StatCard
              title="In Progress"
              value={stats.inProgress || 0}
              icon={<LoaderCircle />}
              color="bg-secondary"
          />

          <StatCard
              title="Completed"
              value={stats.completed || 0}
              icon={<CircleCheck />}
              color="bg-success"
          />
      </div>
    </div>
  );
};

export default ClientHomePage;