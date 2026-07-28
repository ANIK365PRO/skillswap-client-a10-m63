import StatCard from "@/components/dashboard/StatCard";

const FreelancerHomePage = () => {
  return (
    <div className="p-6">
      <h1 className="mb-8 text-3xl font-bold">
        Welcome Back, Freelancer
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total Proposals" value={42} />
        <StatCard title="Pending Proposals" value={15} />
        <StatCard title="Accepted Proposals" value={10} />
        <StatCard title="Total Earnings (USD)" value="$3,250" />
      </div>
    </div>
  );
};

export default FreelancerHomePage;