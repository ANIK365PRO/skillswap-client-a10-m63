"use client";

import { deleteTaskPost } from "@/lib/actions/task";
import {
  Button,
  Chip,
  Table,
} from "@heroui/react";

import {
  Lock,
  Pencil,
  Trash2,
  Plus,
} from "lucide-react";
import Link from "next/link";

// const tasks = [
//   {
//     _id: 1,
//     title: "Logo design",
//     category: "Design",
//     budget: 50,
//     deadline: "12 May 2026",
//     status: "open",
//     hasApprovedProposal: false,
//   },
//   {
//     _id: 2,
//     title: "Fix CSS bug",
//     category: "Development",
//     budget: 30,
//     deadline: "15 May 2026",
//     status: "in-progress",
//     hasApprovedProposal: true,
//   },
//   {
//     _id: 3,
//     title: "Write article",
//     category: "Writing",
//     budget: 20,
//     deadline: "10 May 2026",
//     status: "completed",
//     hasApprovedProposal: true,
//   },
// ];

const statusMap = {
  open: {
    label: "Open",
    color: "warning",
  },
  "in-progress": {
    label: "In Progress",
    color: "info",
  },
  completed: {
    label: "Completed",
    color: "success",
  },
};

const MyTasksTable = ({tasks}) => {

  const handleDelete = async (id) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    const result = await deleteTaskPost(id);

    console.log(result);

    if (result.deletedCount > 0) {
      alert("Task deleted successfully!");

      // refresh page
      window.location.reload();
    }
  };



  return (
   <div className="rounded-3xl border border-border bg-surface p-6 shadow-md">
      {/* Header */}

      <div className="mb-6 flex items-start justify-between">
        <div>
          {/* <h2 className="text-3xl font-bold">
            My Tasks
          </h2> */}

          <p className="mt-1 text-sm text-muted">
           
            {tasks.length} posted tasks
          </p>
        </div>

       <Link href="/dashboard/client/post-task">
            <Button className="bg-accent text-primary" size="sm">
              <Plus size={18} />
              Post a Task
            </Button>
       </Link>

      </div>

      {/* Table */}

      <Table>
        <Table.ScrollContainer>
          <Table.Content
            aria-label="My Tasks Table"
            className="min-w-[900px]"
          >
            <Table.Header>
              <Table.Column isRowHeader>TASK</Table.Column>
              <Table.Column>BUDGET</Table.Column>
              <Table.Column>DEADLINE</Table.Column>
              <Table.Column>STATUS</Table.Column>
              <Table.Column className="text-end">
                ACTIONS
              </Table.Column>
            </Table.Header>

            <Table.Body>
              {tasks.map((task) => (
                <Table.Row key={task._id}>
                  {/* Task */}

                  <Table.Cell>
                    <div>
                     <h3 className="font-semibold text-foreground">
                        {task.title}
                      </h3>

                      <p className="text-sm text-muted">
                        {task.category}
                      </p>
                    </div>
                  </Table.Cell>

                  {/* Budget */}

                  <Table.Cell>
                   <span className="font-semibold text-secondary">
                      ${task.budget}
                    </span>
                  </Table.Cell>

                  {/* Deadline */}

                  <Table.Cell>
                    {task.deadline}
                  </Table.Cell>

                  {/* Status */}

                  <Table.Cell>
                    <Chip
                      color={statusMap[task.status].color}
                      size="sm"
                      variant="soft"
                      // className={`text-${statusMap[task.status].color}`}
                      
                    >
                      {statusMap[task.status].label}
                    </Chip>
                  </Table.Cell>



                  {/* Actions */}

                  <Table.Cell>
                    <div className="flex justify-end gap-2">


                    {/* Manage Proposals */}
                    <Link href={`/dashboard/client/manage-proposals/${task._id}`}>
                        <Button
                          size="sm"
                          className="bg-primary text-white"
                        >
                          Proposals
                        </Button>
                    </Link>

                      {task.status === "open" &&
                      !task.hasApprovedProposal ? (
                        <>


                        {/* edit and delete buttons */}

                          <Link href={`/dashboard/client/my-tasks/edit/${task._id}`}>
                              <Button
                                isIconOnly
                                size="sm"
                                variant="secondary"
                              >
                                <Pencil size={16} />
                              </Button>
                          </Link>

                        <Button
                          isIconOnly
                          size="sm"
                          variant="danger-soft"
                          onPress={() => handleDelete(task._id)}
                        >
                          <Trash2 size={16} />
                        </Button>
                        </>
                      ) : (
                       <div className="flex items-center gap-2 text-sm text-muted">
                          <Lock size={15} />

                          <span>Locked</span>
                        </div>
                      )}
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default MyTasksTable;