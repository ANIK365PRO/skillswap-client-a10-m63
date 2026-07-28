import PostTaskForm from "@/components/dashboard/client/PostTaskForm";
import { getMyTaskById } from "@/lib/api/task";

export default async function EditTaskPage({ params }) {

     const { id } = await params;
    //  console.log(id) 

     const task = await getMyTaskById(id);
     console.log('task edit page get task by -id', task)

  return (
    <div>
      {/* <h1>Edit Task</h1>
      <p>Task ID: {id}</p> */}

      <PostTaskForm task={task}></PostTaskForm>
    </div>
  );
}