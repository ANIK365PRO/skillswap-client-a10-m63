import { getUserSession } from "@/lib/core/session";
import MyTasksTable from "./MyTasksTable";
import { getMyTasks } from "@/lib/api/task";


const MyTasksPage = async () => {

  const user = await getUserSession();
  const userId = user?.id;
  // console.log('user', user);
  
  const myTasks = await getMyTasks({userId});
  // console.log('myTasks', myTasks);


  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          My Tasks
        </h1>

        <p className="text-muted">
          View and manage all your posted tasks.
        </p>
      </div>

      <MyTasksTable tasks={myTasks} />
    </div>
  );
};

export default MyTasksPage;