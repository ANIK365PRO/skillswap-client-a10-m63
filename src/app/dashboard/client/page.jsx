// import { SidebarMenu } from '@/components/dashboard/SidebarMenu';
import StatCard from '@/components/dashboard/StatCard';


const ClientHomePage = () => {
    // return (
    //     <div>
    //        <h2>ClientHomePage</h2>
    //          <SidebarMenu></SidebarMenu>
    //     </div>
    // );


     return (
    <div className="p-6">
      <h1 className="mb-8 text-3xl font-bold">
        Welcome Back, Client
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total Tasks" value={25} />
        <StatCard title="Open Tasks" value={12} />
        <StatCard title="Tasks In Progress" value={8} />
        <StatCard title="Total Spent (USD)" value="$4,500" />
      </div>
    </div>
  );
};

export default ClientHomePage;