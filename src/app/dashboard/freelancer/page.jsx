import StatCard from "@/components/dashboard/StatCard";
import { getFreelancerStats } from "@/lib/api/dashboard";
import { getUserSession } from "@/lib/core/session";

      import {
  FileText,
  Clock3,
  BadgeCheck,
  XCircle,
} from "lucide-react";



const FreelancerHomePage = async () => {

  const user = await getUserSession()
  const stats = await getFreelancerStats(user?.email);


  return (
    <div className="p-6">
      <h1 className="mb-8 text-3xl font-bold">
       Overview
      </h1>


        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="Total Proposals"
             value={stats.totalProposals}
            icon={<FileText size={28} />}
            color="bg-primary"
          />

          <StatCard
            title="Pending"
            value={stats.pending}
            icon={<Clock3 size={28} />}
            color="bg-warning"
          />

          <StatCard
            title="Accepted"
           value={stats.accepted}
            icon={<BadgeCheck size={28} />}
            color="bg-success"
          />

          <StatCard
            title="Rejected"
            value={stats.rejected}
            icon={<XCircle size={28} />}
            color="bg-danger"
          />

        </div>
    </div>
  );
};

export default FreelancerHomePage;