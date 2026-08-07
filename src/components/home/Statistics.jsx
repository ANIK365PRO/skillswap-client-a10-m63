import { getStatisticsStat } from "@/lib/api/home";
import StatStatisticsCard from "./StatStatisticsCard";


const Statistics = async () => {
  // later
  const statsCount = await getStatisticsStat();
  console.log("statsCount", statsCount);

  const stats = statsCount?.success
        ? statsCount.data
        : {
            totalTasks: 0,
            totalUsers: 0,
            totalPayout: 0,
            };


    
  return (
    <section className="border-y border-border bg-primary/8 py-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}

        <div className="mb-14 text-center">

          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Platform Statistics
          </span>

          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            Trusted by Our Growing Community
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Thousands of tasks have been completed by talented freelancers on
            SkillSwap. Join our growing marketplace today.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-6 grid-cols-3">

          <StatStatisticsCard
            title="Tasks Posted"
            value={`${stats.totalTasks}+`}
            icon="tasks"
            delay={0}
          />

          <StatStatisticsCard
            title="Total Users"
            value={`${stats.totalUsers}+`}
            icon="users"
            delay={0.2}
          />

          <StatStatisticsCard
            title="Total Payout"
            value={`$${stats.totalPayout.toLocaleString()}+`}
            icon="money"
            delay={0.4}
          />

        </div>

      </div>
    </section>
  );
};

export default Statistics;