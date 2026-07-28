import { Chip, Card, Separator } from "@heroui/react";
import { CircleDollar } from "@gravity-ui/icons";

import { getMyTaskById } from "@/lib/api/task";

const TaskDetailsPage = async ({ params }) => {
  const { id } = await params;

  const task = await getMyTaskById(id);

  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="mb-8 text-3xl font-bold text-foreground">
        Task Details
      </h1>

      <Card className="border border-border bg-surface p-6">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {task.title}
            </h2>

            <p className="mt-2 text-mutedText">
              Posted by {task.clientName}
            </p>
          </div>

          <Chip
            className="bg-success/10 text-success"
          >
            {task.status}
          </Chip>
        </div>

        <Separator />

        <div className="my-6 grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-mutedText">Category</p>

            <p className="font-semibold text-foreground">
              {task.category}
            </p>
          </div>

          <div>
            <p className="text-mutedText">
              Experience Level
            </p>

            <p className="font-semibold text-foreground">
              {task.experienceLevel}
            </p>
          </div>

          <div>
            <p className="text-mutedText">
              Budget
            </p>

            <div className="flex items-center gap-2">
              <CircleDollar className="text-primary" />

              <span className="font-semibold text-foreground">
                ${task.budget}
              </span>
            </div>
          </div>

          <div>
            <p className="text-mutedText">
              Deadline
            </p>

            <p className="font-semibold text-foreground">
              {task.deadline}
            </p>
          </div>
        </div>

        <Separator />

        <div className="my-6">
          <h3 className="mb-3 text-lg font-semibold text-foreground">
            Required Skills
          </h3>

          <div className="flex flex-wrap gap-2">
            {task.skillsRequired?.map((skill) => (
              <Chip
                key={skill}
                className="bg-primary/10 text-primary"
                size="sm"
              >
                {skill}
              </Chip>
            ))}
          </div>
        </div>

        <Separator />

        <div className="mt-6">
          <h3 className="mb-3 text-lg font-semibold text-foreground">
            Description
          </h3>

          <p className="leading-7 text-mutedText">
            {task.description}
          </p>
        </div>
      </Card>

      {/* Proposal Form যাবে এখানে */}
      <Card className="mt-8 border border-border bg-surface p-6">
        <h2 className="mb-2 text-2xl font-bold text-foreground">
          Submit Proposal
        </h2>

        <p className="text-mutedText">
          Fill out the form below to apply for this task.
        </p>

        {/* ProposalForm Component */}
      </Card>
    </div>
  );
};

export default TaskDetailsPage;