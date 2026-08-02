
import { getUserSession } from "@/lib/core/session";
import { getFreelancerProjects } from "@/lib/api/task";
import ActiveProjectsTable from "./ActiveProjectsTable";

const ActiveProjectsPage = async() => {

    const user = await getUserSession()
    const email = user?.email
    const projects = await getFreelancerProjects(email);
    
    console.log(email, projects)

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Active Projects
        </h1>

        <p className="mt-2 text-muted">
          Track your accepted projects, submit deliverables, and view completed work.
        </p>
      </div>

      <ActiveProjectsTable projects={projects} />
    </section>
  );
};

export default ActiveProjectsPage;